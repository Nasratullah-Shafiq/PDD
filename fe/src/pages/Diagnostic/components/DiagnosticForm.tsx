import Card from "../../../components/Card";
import { MdOutlineFileUpload } from "react-icons/md";
import Button from "../../../components/ui/Button";
import React, { useRef, useState } from "react";
import ImageWidget from "./ImageWidget";
import DiagnosticService from "../../../services/DiagnosticService";
import { useContext } from "react";
import { DiagnosticContext } from "../../../contexts/DiagnosticContext";
import { VscLoading } from "react-icons/vsc";
import axios from "axios";

const Diagnostic = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [testImage, setTestImage] = useState<any>()
  const [err, setErr] = useState<string | undefined>()
  const { fileURL, setFileURL, setResult, setSubmited } = useContext(DiagnosticContext)
  const TestImagesURLs = [
    'src\\assets\\img\\apple_black_rote.jpg',
    'src\\assets\\img\\corn_leaf_healthy.jpg',
    'src\\assets\\img\\tomato_late_blioght.jpg'
  ]
  const fileRef = useRef<HTMLInputElement>(null);

  const triggerFileInput = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files) {
      setFileURL(URL.createObjectURL(event.target.files[0]));
    }
  };

  const diagnostic =  async () => {
    setIsLoading(true)
    const formData = new FormData();
    try{
      if(testImage == true){
        const image = await fetch("http://localhost:5173/"+fileURL)
        const blob = await image.blob();
        const file = new File([blob], 'test_image.jpg', { type: blob.type });
        formData.append('image', file);
      }else{
        if(fileRef.current?.files){
          formData.append('image', fileRef.current.files[0]);
        }
      }
      const response = await DiagnosticService.diagnostic(formData)
      setResult(response.data)
      console.log(response.data)
      setSubmited(true)
    }catch(err){
      setErr("Something went wrong, please try again")
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <>
      <div
        className="flex flex-wrap items-center
            justify-center gap-10 w-full xl:mx-[200px]"
      >
        <div>
          <Card
            className="bg-[#9c9797] w-[450px]
                flex flex-col items-center gap-5 justify-between
                max-h-[530px] card"
          >
            <div className="text-center px-5">
              {err ? (
                <p
                  className="text-red-500 text-sm"
                >{err}</p>
              ) : null}
              <h2 className="font-bold text-3xl py-2">
                Plant Disease Detector
              </h2>
              <p
                className="text-lg text-gray-800y"
              >
                Simply upload a photo of your plant and let our AI do the job
              </p>
            </div>
            <div
              className="bg-gray-50 hover:bg-[#ededed] w-[200px] rounded-2xl
                    h-[200px] flex flex-col items-center justify-center cursor-pointer
                    overflow-hidden shadow-md relative"
              onClick={triggerFileInput}
            >
              {fileURL ? (
                <>
                  <img src={fileURL} className="object-cover h-full w-full" />
                  <div
                    className="absolute opacity-0 flex flex-col items-center
                            bg-gray-50 h-full w-full justify-center bg-opacity-0
                            hover:bg-opacity-30 hover:opacity-100 font-bold "
                  >
                    <MdOutlineFileUpload size={36} />
                    <p>Change file</p>
                  </div>
                </>
              ) : (
                <>
                  <MdOutlineFileUpload size={36} />
                  <p className="font-bold">Upload your file</p>
                </>
              )}
            </div>
            <Button
              className="w-[250px] min-h-11 max-h-11"
              type="button"
              priority="success"
              text={
                isLoading ? (
                  <VscLoading 
                      size={18}
                      className="animate-spin mx-auto"
                  />) : (
                    "Diagnostic"
                  )
              }
              action={diagnostic}
            />
            <input
              type="file"
              accept="image/*"
              ref={fileRef}
              onChange={handleChange}
              hidden
            />
            <div
              className="text-center"
            >
              <p
                className="text-sm"
              >No picture on hand? Try with one of these</p>
              <div
                className="flex justify-center gap-2 pt-4"
              >
                {TestImagesURLs.map((imageURL, index) => (
                  <ImageWidget 
                    key={index}
                    imgURL={imageURL}
                    setFileURL={() => {
                      setFileURL(imageURL)
                      setTestImage(true)
                    }}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Diagnostic;
