import React, { useEffect, useRef } from "react";


interface TextAreaProps{
    placeholder: string,
    value: any,
    setValue: (val: any) => void,
    hasCustomSetter?: boolean,
    cols?: number,
    rows?: number,
    className?: string,
    read_only?: boolean,
    onClick?: () => void
}

const TextArea: React.FC<TextAreaProps> = ({
    placeholder,
    value,
    setValue,
    cols = 10,
    rows = 3,
    className,
    hasCustomSetter = false,
    read_only=false,
    onClick = () => {},
}) => {

    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        hasCustomSetter ? setValue(event) : setValue(event.target.value)
    }

    useEffect(() => {
        if(textAreaRef.current){
            textAreaRef.current.style.height = 'auto'
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
        }
    },[value])

    return <>
        <textarea 
            className={`py-3 px-5 border-b border-gray-500 text-gray-700
            outline-none w-full bg-gray-200 ${className} rounded-t-sm`}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e)}
            cols={cols}
            rows={rows}
            spellCheck={false}
            ref={textAreaRef}
            readOnly={read_only}
            onClick={onClick}
        ></textarea>
    </>
}

export default TextArea
