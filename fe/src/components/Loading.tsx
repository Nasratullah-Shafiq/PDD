import React from "react"
import Modal from "./ui/modal/Modal"
import { VscLoading } from "react-icons/vsc";


interface LoadingProps{
    isActive: boolean
}

const Loading: React.FC<LoadingProps> = ({
    isActive
}) => {
    return <>
        <Modal
            isVisible={isActive}
            setIsVisible={() => {}}
            closable={false}
        >
            <div
                className="p-2"
            >
                <VscLoading 
                    className="text-[21px] animate-spin"
                />
            </div>
        </Modal>
    </>
}

export default Loading