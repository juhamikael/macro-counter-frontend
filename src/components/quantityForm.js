function QuantityForm(props) {
    let width = props.width;
    let style = `border-2 rounded-[4px] text-center h-9 ${width} ml-2 mt-0.4 h-[37px]`
    return (
        <div className="mt-0.5">
            <form>
                <label>
                    <input
                        className= {style}
                        type={props.input_type}
                        // value={variable}
                        placeholder={`Enter quantity in grams`}
                        onChange={props.onChange}
                        min={props.minValue}
                        max={props.maxValue}
                        onKeyPress={(e) => {
                            e.key === "Enter" && e.preventDefault()
                        }}
                    />
                </label>
                {/* <input type="submit" /> */}
            </form>
        </div>
    )
}

export default QuantityForm
