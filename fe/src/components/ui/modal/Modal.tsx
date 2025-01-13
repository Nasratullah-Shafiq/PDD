import React, { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";
import Blur from "../Blur";


interface ModalStructureProps{
    children: ReactNode,
    className: string
}

interface ModalProps{
    isVisible: boolean,
    setIsVisible: (visiblity: boolean) => void,
    children: ReactNode,
    className?: string,
    width?: string,
    closable?: boolean
}

export const ModalHeader: React.FC<ModalStructureProps> = ({
    children
}) => {
    return <>
        <div
            className="border-b p-4"
        >
            {children}
        </div>
    </>
}

export const ModalBody: React.FC<ModalStructureProps> = ({
    children, className
}) => {
    return <>
        <div
            className={`${className} p-2`}
        >
            {children}
        </div>
    </>
}

export const ModalFooter: React.FC<ModalStructureProps> = ({
    children
}) => {
    return <>
        <div
            className="border-t p-3 bottom-0 absolute w-full
            flex justify-end"
        >
            {children}
        </div>
    </>
}



const Modal: React.FC<ModalProps> = ({
    isVisible,
    setIsVisible,
    children,
    width,
    className,
    closable = true
}) => {
    return <>
        <Blur 
            isActive={isVisible}        
        />
        <div
            
        >
            <div
                className={`
                    bg-white rounded-md shadow-sm
                    fixed ${width} h-max duration-[.1s] bg-opacity-40 backdrop-blur-md
                    ease-linear  ${isVisible ? 'scale-1' : 'scale-0 pointer-events-none'}
                    z-50 translate-x-[-50%] left-[50%] top-[50%] translate-y-[-50%] ${className}
                `}
            >   
                {closable ? (
                    <div
                    className="cursor-pointer z-50 relative"
                    onClick={() => setIsVisible(false)}
                    >
                        <FaTimes 
                            className="bg-white shadow-md
                            p-1 text-[24px] rounded-md absolute right-[-10px]
                            top-[-10px]"
                        />
                    </div>
                ): null}
                {children}
            </div>
        </div>
    </>
}

export default Modal