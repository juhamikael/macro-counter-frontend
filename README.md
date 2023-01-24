# macro-counter-react-fastapi-postgre
## What this is?
This project is a fullstack food diary. It's not confirmed yet, but maybe later, you can log your gym/cardio training, build own training program or diet and more!

Once the project is built, go to http://localhost:3000/faq for a better overview.

--- 

1. When the page is opened, the user's view is as follows. 
![image](https://user-images.githubusercontent.com/83360104/214435715-6a12f394-29c3-4717-b9d3-cb32540b3098.png)


The user needs to enter: 
```
1. * Name
2. * Weight
3. * Height
4. * Age
5. * Activity level
6. * Diet style (weight management method, weight loss, etc.)
7. * Gender
8. * Body type
```



# Guide
This guide provides instructions for setting up and running the macro-counter-react-fastapi-postgre repository using Node.js, npm, Python, PostgreSQL and several other technologies.

Before starting, make sure you have the following tools installed:

-   NodeJS: [https://nodejs.org/en/](https://nodejs.org/en/)
-   npm : npm is included with Node.js installation
-   Python: [https://www.python.org/downloads/](https://www.python.org/downloads/) (Developed with version 3.9.13)
-   PostgreSQL : [https://www.postgresql.org/download](https://www.postgresql.org/download)
    -   pgAdmin : https://www.pgadmin.org/download/pgagent-windows/

# Getting Started

> This application is developed using Windows 10. Therefore, the project build guide and commands are specific to Windows 10.
 

## Installation

1.  Clone the repository by running the following command:


```
git clone https://github.com/juhamikael/macro-counter-react-fastapi-postgre.git
```
2.  Navigate to the root folder by running the following command:


```
cd macro-counter-react-fastapi-postgre
```
### Build
#### 1 database
1. Open pgAdmin
2. Right click servers -> Choose `Create` -> `Server`  
![image](https://user-images.githubusercontent.com/83360104/214409868-14dcf6a7-59c8-443a-afb3-ca9842e440c7.png)

3. Give General name, that doesn't really matter  
![image](https://user-images.githubusercontent.com/83360104/214408829-65384175-187b-40ed-95d9-2255f8fb1bb2.png) 
4. Fill with following 
```
Host name / address = localhost
Port = 5432 (default) 
Maintenance database = postgres (default)
Username = postgres (default)
Password = <YOUR MASTER PASSWORD YOU USE WHEN YOU START pgAdmin>
```  
![image](https://user-images.githubusercontent.com/83360104/214410279-2d45ef05-35c8-4a97-bb67-4595856b5a16.png)  

5.  Open second terminal instance 
6.  Navigate to the repository `macro-counter-react-fastapi-postgre`
7.  Navigate to the backend folder and create .env file
8.  Edit .env file and 
```
DATABASE_URL= postgresql://postgres:testpassword@localhost:5432/postgres
DB_PASSWORD= <YOUR MASTER PASSWORD YOU USE WHEN YOU START pgAdmin>
DB_USER= postgres
DB_HOST= localhost
```
9. Replace `testpassword` in DATABASE_URL with your own password

> ### With`install_macrocounter_dev_env.bat` you can skip `1 /frontend` and `3 /backend` manual builds and jump to step 4

> NOTE! Before running the command `install_macrocounter_dev_env.bat` or building `/backend`, you may need to change the execution policy settings in order activate **virtual env**.   
> 
> You can do this by opening a PowerShell window as an administrator and running the command: 
> ```
> Set-ExecutionPolicy Unrestricted
> ```
>  This will allow you to run scripts on your system. More here: [https://www.top-password.com/blog/change-powershell-execution-policy-in-windows-10/](https://www.top-password.com/blog/change-powershell-execution-policy-in-windows-10/)

#### 2 /frontend
1.  Open the Terminal
2.  Navigate to the frontend folder by running the following command:
```
cd frontend
``` 
3.  Run the command `npm install` to install the required dependencies for the project. This may take a moment.
4.  Once the dependencies have been installed, start the frontend by running the command `npm start`.
5.  The frontend should now be running and accessible through a web browser at [http://localhost:3000/](http://localhost:3000/)

#### 3 /backend
1.  Open second terminal instance 
2.  Navigate to the repository `macro-counter-react-fastapi-postgre`
3.  Navigate to the backend folder and copy the following block:
```
cd backend
python -m venv macrocounter-env
macrocounter-env\Scripts\activate
pip install -r requirements.txt
``` 
4.  Once the dependencies have been installed, open the project in the IDE of your choice and start the backend by running the command 
```
uvicorn main:app --reload
```
5.  The back should now be running and accessible through a web browser at [http://localhost:8000/](http://localhost:8000/)

#### 4. Final step (IF YOU SKIPPED STEPS 2 & 3)

The application should now be running and accessible through a web browser 
You should be able to interact with the application and use its features.
	1. Frontend: `npm start` [http://localhost:3000/](http://localhost:3000/)
	2. Backend: `uvicorn main:app --reload` [http://localhost:8000/](http://localhost:8000/)
	
Please note that the instructions in this guide are specific to Windows 10. If you are running on a different operating system, some of the commands or steps may need to be adjusted accordingly.


