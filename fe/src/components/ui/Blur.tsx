import React from "react"

interface BlurProps{
    isActive: boolean
}

const Blur: React.FC<BlurProps> = ({
    isActive
}) => {
    return <>
        {
            isActive ? (
                <div
                    className="fixed inset-0 bg-gray-900
                    bg-opacity-5 backdrop-blur-sm z-30"
                ></div>
            ): null
        }
    </>
}

export default Blur