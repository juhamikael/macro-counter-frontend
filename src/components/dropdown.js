import Select from "react-select"

const customStyles = {
    control: (provided) => {
        return {
            ...provided,
            padding: "0px 0px",
            textAlign: "center",
        }
    },
}

function DropDown(props) {
    let DropdownStyle = `mt-0.5 ${props.marginLeft} ${props.width}`
    return (
        <div className={DropdownStyle}>
            <Select
                styles={customStyles}
                options={props.option}
                placeholder={`Select ${props.title}`}
                isSearchable
                menuPlacement="auto"
                onChange={props.onChange}
            />
        </div>
    )
}

export default DropDown
