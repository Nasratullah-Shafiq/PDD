import React, { ReactNode } from "react";

interface CardProps{
    children: ReactNode,
    className?: string
}

const Card: React.FC<CardProps> = ({
    children, className
}) => {
    return <>
        <div
            className={`bg-gray-50 p-5 rounded-xl
            bg-opacity-60 backdrop-blur-sm ${className}`}
        >
            { children }
        </div>
    </>
}

export default Card