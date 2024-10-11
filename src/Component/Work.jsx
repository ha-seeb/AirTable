
import { IoIosRefresh } from "react-icons/io";

const Work = () => {
    return (
        <div className="mt-10 w-full">
            <p className="mt-5 text-sm">Why do you want to work with us? *</p>
            <input
                type="text"
                className="w-full border border-gray-300 mt-3 focus:outline-blue-500 hover:shadow-sm duration-300 rounded-md px-4 pb-10 pt-1 text-wrap"
            />
            <div className="flex flex-row justify-between mt-6">
                <button className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                    <IoIosRefresh size={20} />
                    <span>Clear Form</span>
                </button>
                <button className="bg-gray-700 rounded-lg text-white text-sm font-semibold py-2 px-4">Submit</button>
            </div>
        </div>
    );
};

export default Work;
