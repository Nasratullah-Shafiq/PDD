import React from "react";

const Step: React.FC<{
    title:string,
    description: string
}> = ({title, description}) => {
    return <>
        <div
            className="relative"
        >
            <div 
                className="absolute -left-9 top-[10px] h-[9px] w-[8.5px] bg-gray-950
                rounded-full"
            ></div>
            <h2
                className="text-lg font-semibold"
            >{title}</h2>
            <p
                className="text-base"
            >{description}</p>
        </div>
    </>
}

const Works = () => {
    
    const steps = [
        {
            title: "Snap a Photo",
            description: "Take a clear picture of the affected plant."
        },
        {
            title: "Get Instant Result",
            description: "Our AI analyzes the image and identifies potential diseases."
        },
        {
            title: "Receive Recommendations",
            description: "Get detailed information on how to treat and prevent the disease."
        }
    ];

    return (
      <>
        <h2
            className="text-2xl font-bold py-3"
        >3 Steps to go</h2>
        <div className="grid gap-4 relative px-10">
          <div className="absolute left-2 h-full w-[1px] bg-gray-950 mt-3"></div>
          {steps.map((step, index) => (
            <Step
                key={index}
                title={step.title}
                description={step.description}
            />
          ))}
        </div>
      </>
    );
  };
  
  export default Works;
  