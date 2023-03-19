function FoodForm(props) {
    return (
        <div className="mt-0.5">
            <form>
                <label>
                    <input
                        className="
                        border-2 rounded-[3px] text-center
                        h-9 w-full shadow-xl shadow-black/20"
                        type={props.input_type}
                        // value={variable}
                        placeholder={props.title}
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

export default FoodForm
