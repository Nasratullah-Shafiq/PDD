
const ImageWidget: React.FC<{ 
    imgURL: string, 
    setFileURL: (url: string) => void 
    }> = ({ imgURL, setFileURL }) => {

  return (
    <>
      <div
        className="w-16 h-16 rounded-lg 
        overflow-hidden shadow-sm cursor-pointer
        relative"
        onClick={() => setFileURL(imgURL)}
      >
        <div
          className="absolute bg-gray-900 w-full h-full
          hover:bg-opacity-20 duration-75 ease-linear bg-opacity-0"
        ></div>
        <img src={imgURL} className="object-cover h-full w-full" />
      </div>
    </>
  );
};

export default ImageWidget
