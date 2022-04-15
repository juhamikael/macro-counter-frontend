import GroupedDropDowns from "./groupedDropDown";

function HeroSection() {
    return (
        <div className="w-full h-full bg-no-repeat bg-image-1 bg-right-bottom">
            <div className="w-auto mt-15 mx-auto bg-footer-texture flex items-center">
                <div className="sm:ml-20 text-gray-50 text-center sm:text-left">
                    <h1 className="text-5xl font-bold mb-4">
                        <br/>
                        <p className="text-4xl">
                            To get some results give us
                            <br/>
                            some basic info.
                        </p>
                    </h1>
                    <p className="text-lg inline-block sm:block"></p>
                </div>
                <div className="mb-32 ml-10">
                    <GroupedDropDowns className="text-gray-700 flex justify-center place-items-center"/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
