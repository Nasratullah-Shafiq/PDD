import React, { ReactNode, createContext, useState } from "react";

export const DiagnosticContext = createContext<{
  fileURL: string | undefined;
  setFileURL: React.Dispatch<React.SetStateAction<string | undefined>>;
  submited: boolean;
  setSubmited: React.Dispatch<React.SetStateAction<boolean>>;
  result: ResultData | undefined;
  setResult: React.Dispatch<React.SetStateAction<ResultData | undefined>>;
}>({
  fileURL: undefined,
  setFileURL: () => {},
  submited: false,
  setSubmited: () => {},
  result: undefined,
  setResult: () => {},
});

interface ResultData {
  is_infected: boolean;
  plant: string;
  disease: {
    id: number;
    name: string;
    image: string;
    description: string;
    plant: number;
  };
  cures: {
    cure: {
      id: number;
      name: string;
      description: string;
    }
  }[]
}

interface DiagnosticProviderProps {
  children: ReactNode;
}

const DiagnosticProvider: React.FC<DiagnosticProviderProps> = ({
  children,
}) => {
  const [fileURL, setFileURL] = useState<string>();
  const [submited, setSubmited] = useState<boolean>(false);
  const [result, setResult] = useState<ResultData>();

  return (
    <>
      <DiagnosticContext.Provider
         value={{ fileURL, setFileURL, submited, setSubmited, result, setResult }}
      >
        {children}
      </DiagnosticContext.Provider>
    </>
  );
};

export default DiagnosticProvider;
