import React from "react";

interface InputProps{
    placeholder: string,
    value: string,
    setValue: (val: any) => void,
    type: "text" | "password" | "date" | "datetime"| "number" | "checkbox" | "radio" | "email",
    className?: string,
    min?: number,
    max?: number,
    read_only?: boolean,
}

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    setValue,
    type,
    className,
    min,
    max,
    read_only=false,
}) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return <>
        <input 
            className={`py-3 px-5 border-b border-gray-500 text-gray-700
            outline-none w-full bg-gray-200 ${className} rounded-t-sm`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e)}
            type={type}
            minLength={min}
            maxLength={max}
            readOnly={read_only}
        />
    </>
}

export default Input
