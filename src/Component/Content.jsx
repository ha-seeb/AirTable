
import  {useState} from "react";
import {Chip, FormControl, MenuItem, Select} from "@mui/material";

const options = [
    {value: 1, label: "Less than 1 hour per day", color: '#d0e2ff'},
    {value: 2, label: "1-2 hours per day", color: '#b3e5fc'},
    {value: 3, label: "2-4 hours per day", color: '#c8e6c9'},
    {value: 4, label: "4-8 hours per day", color: '#dce775'},
    {value: 5, label: "Entire day", color: '#ffecb3'},
];

const Content = () => {

    const [explict, setExplict] = useState(0)
    const [face, setFace] = useState(0)
    const [selectedValue, setSelectedValue] = useState()

    return (
        <div>
            <h1 className="font-bold text-xl">Content</h1>
            <p className="text-xs mt-4">
                Are you comfortable creating sexually explicit content?{" "}
                <span className="text-red-500 font-bold">*</span>
            </p>
            <div className="mt-4">
                <div className="flex items-center mb-4">
                    <input
                        id="default-radio-1"
                        type="radio"
                        checked={explict===1}
                        onChange={() => setExplict(1)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="default-radio-1"
                        className="ms-2 text-xs font-medium bg-indigo-200 px-2 rounded-full text-gray-900"
                    >
                        Yes
                    </label>
                </div>
                <div className="flex items-center mb-1">
                    <input
                        id="default-radio-2"
                        type="radio"
                        checked={explict===2}
                        onChange={() => setExplict(2)}
                        className="w-4 h-4 text-blue-600"
                    />
                    <label
                        htmlFor="default-radio-2"
                        className="ms-2 text-xs font-medium bg-blue-200 px-2 rounded-full text-gray-900"
                    >
                        No
                    </label>
                </div>
                <p onClick={() => setExplict(0)} className="font-semibold duration-300 text-gray-300 text-xs hover:cursor-pointer hover:text-black mt-3">
                    Clear Selection
                </p>
            </div>

            <p className="text-xs mt-6">
                Are you comfortable showing your face? {" "}
                <span className="text-red-500 font-bold">*</span>
            </p>
            <div className="mt-4">
                <div className="flex items-center mb-4">
                    <input
                        id="default-radio-3"
                        type="radio"
                        checked={face===1}
                        onChange={() => setFace(1)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="default-radio-3"
                        className="ms-2 text-xs font-medium bg-indigo-200 px-2 rounded-full text-gray-900"
                    >
                        Yes
                    </label>
                </div>
                <div className="flex items-center mb-1">
                    <input
                        id="default-radio-4"
                        type="radio"
                        checked={face===2}
                        onChange={() => setFace(2)}
                        className="w-4 h-4 text-blue-600"
                    />
                    <label
                        htmlFor="default-radio-4"
                        className="ms-2 text-xs font-medium bg-blue-200 px-2 rounded-full text-gray-900"
                    >
                        No
                    </label>
                </div>
                <p onClick={() => setFace(0)} className="font-semibold duration-300 text-gray-300 text-xs hover:cursor-pointer hover:text-black mt-3">
                    Clear Selection
                </p>
            </div>
            <div className={"mt-4"}>
                <label className="tracking-wide text-grey-darker text-xs font-[700]">
                    How much revenue have time do you have to create content?
                </label>
                <FormControl fullWidth>
                    <Select
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.target.value)}
                        displayEmpty
                        sx={{height: "40px"}}
                        inputProps={{'aria-label': 'Without label'}}
                    >
                        {options.length > 0 ? (
                            options.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    <Chip label={option.label} style={{backgroundColor: option.color}}/>
                                </MenuItem>
                            ))
                        ) : (
                            <MenuItem disabled>
                                <em>No options found</em>
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
            </div>
            <div className="mt-4">
            <label className="tracking-wide text-grey-darker text-xs font-[700]">
                    Which phone do you have?
                </label>
            <p className="mt-2 text-xs">e.g. Iphone 15 Pro </p>
            <input
                type="text"
                className="w-full border border-gray-300 mt-3 focus:outline-blue-500 hover:shadow-sm duration-300 rounded-md px-4 py-1 text-wrap"
            />
            </div>
        </div>
    );
};

export default Content;
