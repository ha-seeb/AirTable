import {useState} from 'react';

const PersonelInfo = () => {
    const [data, setData] = useState({
        name: '',
        age: '',
        country: '',
        email: '',
    });

    const [errors, setErrors] = useState({
        name: false,
        age: false,
        country: false,
        email: false,
    });

    const [regex] = useState({
        name: /^[a-zA-Z\s'-]{1,50}$/,
        age: /^(?:1[0-4][0-9]|[1-9]?[0-9]|150)$/,
        country: /^[a-zA-Z\s]{1,50}$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((d) => ({...d, [name]: value}));
        setErrors((prevState) => ({...prevState, [name]: false}));
    };

    const submit = () => {
        let hasError = false;
        let newErrors = {};

        Object.keys(data).forEach((v) => {
            if (regex[v] && regex[v] !== null) {
                if (!regex[v].test(data[v])) {
                    newErrors[v] = true;
                    hasError = true;
                }
            }
        });

        setErrors(newErrors);

        if (!hasError) {
            console.log("Form submitted successfully.");
        } else {
            console.log("Validation errors found.");
        }
    };

    return (
        <div>
            <div className="w-[100%] bg-white rounded-xl flex flex-col my-5">
                <h1 className="font-bold text-xl">Personal Info</h1>
                <div className="mt-5">
                    <label className="tracking-wide text-grey-darker text-xs font-[700] mb-[3px] ml-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        value={data.name}
                        name="name"
                        onChange={handleChange}
                        className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 shadow-sm rounded-md border appearance-none focus:outline-none focus:ring-0 ${errors.name ? 'border-red-600' : 'focus:border-blue-500'}`}
                    />
                    {errors.name && <p className="text-red-600 text-xs ml-4 mt-1">Enter Your name </p>}
                </div>

                <div className="mt-2">
                    <label className="tracking-wide text-grey-darker text-xs font-[700] mb-[3px] ml-2">
                        Age *
                    </label>
                    <input
                        type="text"
                        value={data.age}
                        name="age"
                        onChange={handleChange}
                        className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 shadow-sm rounded-md border appearance-none focus:outline-none focus:ring-0 ${errors.age ? 'border-red-600' : 'focus:border-blue-500'}`}
                    />
                    {errors.age && <p className="text-red-600 text-xs ml-4 mt-1">Enter your age</p>}
                </div>

                <div className="mt-2">
                    <label className="tracking-wide text-grey-darker text-xs font-[700] mb-[3px] ml-2">
                        Country *
                    </label>
                    <input
                        type="text"
                        value={data.country}
                        name="country"
                        onChange={handleChange}
                        className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 shadow-sm rounded-md border appearance-none focus:outline-none focus:ring-0 ${errors.country ? 'border-red-600' : 'focus:border-blue-500'}`}
                    />
                    {errors.country &&
                        <p className="text-red-600 text-xs ml-4 mt-1">Please Enter your country Name.</p>}
                </div>

                <div className="mt-2">
                    <label className="tracking-wide text-grey-darker text-xs font-[700] mb-[3px] ml-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        value={data.email}
                        name="email"
                        onChange={handleChange}
                        className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 shadow-sm rounded-md border appearance-none focus:outline-none focus:ring-0 ${errors.email ? 'border-red-600' : 'focus:border-blue-500'}`}
                    />
                    {errors.email &&
                        <p className="text-red-600 text-xs ml-4 mt-1">Please enter a valid email address.</p>}
                </div>

               {/* <div className="flex justify-center mt-5">*/}
               {/*     <button*/}
               {/*         className="text-white bg-[#FF6E40] hover:shadow-lg duration-300*/}
               {/*hover:shadow-gray-400 rounded-xl px-10 py-2"*/}
               {/*         onClick={submit}*/}
               {/*     >*/}
               {/*         Submit*/}
               {/*     </button>*/}
               {/* </div>*/}
            </div>
            <hr className='mt-10'/>
        </div>
    );
};

export default PersonelInfo;
