import React, { ReactNode } from "react";

interface MainProps{
    children: ReactNode
}

const Main: React.FC<MainProps> = ({
    children
}) => {
    return <>
        <main
            className="absolute w-full min-h-[100vh] flex
            justify-center items-center z-20 pt-16 main"
        >
            { children }
        </main>
    </>
}

export default Main