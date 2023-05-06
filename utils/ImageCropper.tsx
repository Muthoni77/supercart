import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Crop } from "react-image-crop/dist/types";
const ImageCropper = () => {
  const [crop, setCrop] = useState<Crop>({
    unit: "%", // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          position: "fixed",
          inset: 0,
        }}
        className="h-screen w-full flex justify-center items-center p-3"
      >
        <div
          style={{ backgroundColor: "white" }}
          className="p-5 rounded-2xl shadow-lg m-5 w-full md:w-1/2"
        >
          <div className="w-full flex flex-col relative flex justify-center items-center p-3">
            <span
              className="font-bold text-xl"
              style={{
                width: "100% !imporant",
              }}
            >
              Crop your image
            </span>
            <MdClose
              size={30}
              className="text-red-500 absolute hoverUpEffect right-0 top-0"
            />
            <span className="text-sm text-gray-800">
              (Drag the crop to find your face)
            </span>
          </div>
          <div className="w-full flex justify-center p-3">
            <ReactCrop
              crop={crop}
              onChange={(c) => setCrop(c)}
              style={{ backgroundColor: "blue" }}
              // locked={true}
            >
              <img src={"/avatar.png"} className="w-full mx-auto" />
            </ReactCrop>
          </div>
          <center>
            <button
              style={{ backgroundColor: "#007acc", width: "200px" }}
              className="text-white p-3 rounded-xl m-3 shadow border-none"
            >
              Crop
            </button>
          </center>
        </div>
      </div>
    </>
  );
};

export default ImageCropper;
