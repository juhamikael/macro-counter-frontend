function Forms(props) {
    return (
        <div className="mt-0.5">
            <form>
                <label>
                    <input
                        className="
                        border-1 rounded-[3px] text-center
                        h-9 w-52 ml-1"
                        type={props.input_type}
                        // value={variable}
                        placeholder={`Enter your${props.title}`}
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

export default Forms
