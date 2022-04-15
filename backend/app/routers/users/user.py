from backend.app.routers.users import user_functions as user_f
from fastapi import APIRouter, HTTPException, status
from fastapi_sqlalchemy import db
from backend.schemas import UserIn as SchemaUser
from backend.schemas import UserUpdate as SchemaUserUpdate
from backend.models import ProcessedData, User

router = APIRouter()


# ######################################################################################################################
# GET
# ######################################################################################################################
@router.get("/api/v1/users", tags=["Get"], summary="All users base data", description="Returns the info users sent")
async def get_all_users():
    users = db.session.query(User).all()
    return {"users": users}


@router.get("/api/v1/users_processed_data", tags=["Get"], summary="All users processed data")
async def get_all_users():
    users = db.session.query(ProcessedData).all()
    return {"users": users}


@router.get("/api/v1/users/{user_id}", tags=["Get"], summary="Get user base data by id ")
def get_user_base_info(user_id: int):
    user = db.session.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"user": user}


@router.get("/api/v1/users/processed_data/{user_id}", tags=["Get"], summary="Get user processed data by id ")
def get_user_processed_data_by_id(user_id: int):
    user = db.session.query(ProcessedData).filter(ProcessedData.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"user": user}


# ######################################################################################################################
# POST
# ######################################################################################################################
@router.post("/api/v1/users", tags=["Post"], summary="Create users", response_model=SchemaUser)
async def create_user(new_user: SchemaUser):
    db_user = user_f.data(new_user)
    processor = user_f.data_processor(db_user)
    db.session.add(processor)
    db.session.commit()
    return processor


######################################################################################################################
# PUT
######################################################################################################################
@router.put("/api/v1/users/{user_id}", tags=["Update"], status_code=status.HTTP_202_ACCEPTED)
def update_user(user_id: int, request: SchemaUserUpdate):
    update_processed = db.session.query(ProcessedData).filter(User.id == user_id).first()
    if not update_user:
        raise HTTPException(status_code=404, detail="User not found")
    user_f.update_user_basic_info(update_processed, request, db.session)
    user_f.update_user_processed_data(update_processed, request, db.session)
    return f"User {user_id} info updated"


######################################################################################################################
# DELETE
######################################################################################################################
@router.delete("/api/v1/users/{user_id}", tags=["Delete"], summary="Delete user by id")
def delete_user(user_id: int):
    check_if_exist = db.session.query(User).filter(User.id == user_id).first()
    if not check_if_exist:
        raise HTTPException(status_code=404, detail=f"User with ID {user_id} not found")
    db.session.query(User).filter(User.id == user_id).delete(synchronize_session=False)
    db.session.commit()
    return f"User {user_id} deleted"
