import React from "react"


interface ButtonProps{
    text: any,
    priority: 'primary' | 'secondary' | 'dark' | 'light' | 'danger' | 'warning' | 'success';
    action?: () => void,
    type: "submit" | "button" | "reset",
    className?: string
}

const Button: React.FC<ButtonProps> = (
    {
        text,
        priority,
        action,
        type,
        className
    }
) => {
    
    const priorities: Record<string, string> = {
        primary: 'bg-blue-500 text-gray-50 border-blue-500',
        secondary: 'bg-gray-500 text-gray-50',
        dark: 'bg-gray-700 text-gray-50 ',
        light: 'bg-gray-300 text-gray-500 ',
        danger: 'bg-red-500 text-gray-50 ',
        warning: 'bg-yellow-500 text-gray-50 ',
        success: 'bg-[#5DF69B] text-gray-900 border-[#5DF69B]'
    }

    return <>
        <button
            className={`px-3 py-3 shadow rounded-2xl border
            font-bold
            ${priorities[priority]}
            ${className}`}
            onClick={() => action ? action(): {}}
            type={type}
        >
            {text}
        </button>
    </>
}

export default Button