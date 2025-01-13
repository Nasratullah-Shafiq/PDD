import React, { ReactNode } from "react";

interface InputGroupProps{
    className?: string,
    children?: ReactNode,
    revers?: boolean
}

const InputGroup: React.FC<InputGroupProps> = ({
    className, children, revers = false
}) => {
    return <>
        <div
            className={`${className} ${revers ? 'input-group-reverse' : 'input-group'}`}
        >
            {children}
        </div>
    </>
}

export default InputGroup