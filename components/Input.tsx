import React from 'react';

interface InputProps {
    id: string;
    name: string;
    onChange: any;
    value: string;
    label: string;
    type?: string;
    required?: boolean;
};

const Input: React.FC<InputProps> = ({id, name, onChange, value, label, type, required=false}) => {
    return (
        <div className='relative'>
            {required ? <input onChange={onChange} type={type} id={id} name={name} value={value} className="block rounded-[5px] px-6 pt-6 pb-2 w-full text-md text-white bg-transparent border-[1px] border-[#646464] focus:border-[#a9a9a9] basic-transition apperance-none focus:outline-none focus:ring-0 peer" placeholder=" " autoComplete={"off"} required/> : <input onChange={onChange} type={type} id={id} name={name} value={value} className="block rounded-[5px] px-6 pt-6 pb-2 w-full text-md text-white bg-transparent border-[1px] border-[#646464] focus:border-[#a9a9a9] basic-transition apperance-none focus:outline-none focus:ring-0 peer" placeholder=" " autoComplete={"off"}/>}
            <label htmlFor={id} className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">{label}</label>
        </div>
    )
}

export default Input;