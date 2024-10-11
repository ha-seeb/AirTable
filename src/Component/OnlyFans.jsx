import {Chip, FormControl, MenuItem, Select} from "@mui/material";
import {useState} from "react";

const options = [
    {value: 1, label: "$0 - $200", color: '#d0e2ff'},
    {value: 2, label: "$200 - $1,000", color: '#b3e5fc'},
    {value: 3, label: "$1,000 - $5,000", color: '#c8e6c9'},
    {value: 4, label: "$5,000 - $10,000", color: '#dce775'},
    {value: 5, label: "$10,000 - $20,000", color: '#ffecb3'},
];

const OnlyFans = () => {

    const [explict, setExplict] = useState(0)
    const [selectedValue, setSelectedValue] = useState()

    return (
        <div className="mt-6">
            <h1 className="font-bold text-xl">Only Fans</h1>
            <p className="text-xs mt-4">
            Do you have an OnlyFans account?{" "}
                <span className="text-red-500 font-bold">*</span>
            </p>
            <div className="mt-4">
                <div className="flex items-center mb-4">
                    <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        checked={explict === 1}
                        onClick={() => setExplict(1)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="default-radio-1"
                        className="ms-2 text-sm font-medium bg-indigo-200 px-2 rounded-full text-gray-900"
                    >
                        Yes
                    </label>
                </div>
                <div className="flex items-center mb-1">
                    <input
                        id="default-radio-2"
                        type="radio"
                        value=""
                        checked={explict === 2}
                        onClick={() => setExplict(2)}
                        className="w-4 h-4 text-blue-600"
                    />
                    <label
                        htmlFor="default-radio-2"
                        className="ms-2 text-sm font-medium bg-blue-200 px-2 rounded-full text-gray-900"
                    >
                        No
                    </label>
                </div>
                <p onClick={() => setExplict(0)}
                   className="font-semibold duration-300 text-gray-300 text-xs hover:cursor-pointer hover:text-black mt-2">
                    Clear Selection
                </p>
            </div>
            {explict === 1 &&
                <>
                    <div className="flex flex-col mt-5">
                        <label className="tracking-wide text-grey-darker text-sm font-[700]">
                            Please Provide your OnlyFans URL
                        </label>
                        <label className="tracking-wide text-grey-darker text-xs font-regular mt-2">
                            e.g <span
                            className={`cursor-pointer text-blue-600 border-b-blue-600 border-[1px]`}>https://onlyfans.com/YOURNAME</span>
                        </label>
                        <input
                            type="text"
                            // value={data.name}
                            name="name"
                            // onChange={handleChange}
                            className={`mt-2 pl-4 py-[9px] px-0 w-full text-sm text-gray-900 shadow-sm rounded-md border appearance-none focus:outline-none focus:ring-0 ${false ? 'border-red-600' : 'focus:border-blue-500'}`}
                        />
                        {false && <p className="text-red-600 text-xs ml-4 mt-1">Enter Your name </p>}
                    </div>

                    <div className={`mt-4`}>
                        <label className="tracking-wide text-grey-darker text-xs font-[500]">
                            How much revenue have you made in the last 30 days?
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
                </>
            }
        </div>
    );
};

export default OnlyFans;
