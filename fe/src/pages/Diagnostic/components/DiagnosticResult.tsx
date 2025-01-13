import { FaCircleXmark } from "react-icons/fa6";
import Card from "../../../components/Card";
import Button from "../../../components/ui/Button";
import Modal, { ModalBody } from "../../../components/ui/modal/Modal";
import React, { useState } from "react";
import { useContext } from "react";
import { DiagnosticContext } from "../../../contexts/DiagnosticContext";
import { FaCheckCircle } from "react-icons/fa";

const CureItem: React.FC<{title: string, description: string}> = ({
    title, description
}) => {
  console.log("test")
    return <>
        <div
            className="relative"
        >
            <div className="point bg-gray-800 w-3 h-3
                absolute -left-[23px] top-[9px] rounded-full"></div>
            <h4
                className="text-lg font-bold"
            >{title}</h4>
            <p
                className="text-sm"
            >
                {description}
            </p>
        </div>
    </>
}


const DiagnosticResult = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const {result, setSubmited, fileURL, setFileURL, setResult} = useContext(DiagnosticContext)

  
  const tryAnotherPlant = () => {
    setSubmited(false)
    setResult(undefined)
    setFileURL(undefined)
  }

  return (
    <>
      <div
        className="flex flex-wrap items-center
            justify-center gap-10 w-full xl:mx-[200px]"
      >
        <div>
          <Card
            className="bg-[#9c9797] min-w-[450px]
                flex flex-col items-center gap-5 justify-between
                max-h-[530px] py-10 card mt-7"
          >
            <div className="text-center px-5 relative">
              <img
                className="absolute w-72 h-60 rounded-xl
                -top-32 left-1/2 -translate-x-1/2 shadow-md
                object-cover"
                src={fileURL}
              />
              <h2 className="font-bold text-3xl py-2 pt-32">
                {
                  result?.is_infected == true ? (
                    result?.disease.name
                  ) : (
                    "Plant is Healthy"
                  )
                }
              </h2>
              {
                result?.is_infected == true ? 
                (<FaCircleXmark color="#DA2323" className="mx-auto" size={32} />) :
                (<FaCheckCircle color="#5DF69B" className="mx-auto" size={32} />)
              }
              <p className="text-lg text-gray-800">
                {
                  result?.disease.description
                }
              </p>
            </div>

            {
              result?.is_infected == true ? (
                <div
                  className="flex gap-2 flex-wrap"
                >
                  <Button
                    className="w-[200px]"
                    type="button"
                    priority="success"
                    text={"Try Another Plant"}
                    action={tryAnotherPlant}
                  />
                  <Button
                    className="w-[200px]"
                    type="button"
                    priority="primary"
                    text={"Explore Cures"}
                    action={() => setToggle(true)}
                  />
                </ div>
              ) : (
                <Button
                  className="w-[250px]"
                  type="button"
                  priority="success"
                  text={"Try Another Plant"}
                  action={tryAnotherPlant}
                />
              )
            }
            
          </Card>
        </div>
      </div>
      <Modal
       className="w-3/4 md:w-2/3 lg:w-2/4 xl:w-1/3"
       isVisible={toggle} 
       setIsVisible={setToggle}
       >
        <ModalBody className="relative overflow-hidden">
          <div className="
            absolute w-[1px] h-full bg-gray-900
            rounded-md left-5 my-2
          "></div>
          <div className="pl-8 py-2 flex flex-col gap-3">
            <div
                className="overflow-y-auto max-h-[500px]"
            >

              {result?.cures && result?.cures.length ? (
                result?.cures ? (result?.cures.map((instance, index) => (
                  <CureItem
                      key={index}
                      title={instance.cure.name}
                      description={instance.cure.description}
                  />
                ))) : null
              ): <p
                    className="text-base"
                  >No Cure available in our database right now, check back later</p>
              }    

            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default DiagnosticResult;
