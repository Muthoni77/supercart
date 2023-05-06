import { useState, useEffect, useRef } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";

import "react-image-crop/dist/ReactCrop.css";
import ReactCrop, {
  Crop,
  centerCrop,
  makeAspectCrop,
  PixelCrop,
} from "react-image-crop";

import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebounceEffect";

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

interface PropType {
  closeModal: () => void;
}

const ImageCropper = ({ closeModal }: PropType) => {
  const [crop, setCrop] = useState<Crop | undefined>({
    unit: "%", // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });

  //img input ref
  const imageInputRef = useRef<HTMLInputElement>(null);

  //selected image source
  const [imgSrc, setImgSrc] = useState("");

  //img ref
  const imgRef = useRef<HTMLImageElement>(null);

  //state to check if image is selected
  const [imageSelected, setImageSelected] = useState<boolean>(false);

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);
  const blobUrlRef = useRef("");

  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);

  // Function to handle the image selection
  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
      setImageSelected(true);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  function onDownloadCropClick() {
    if (!previewCanvasRef.current) {
      throw new Error("Crop canvas does not exist");
    }

    previewCanvasRef.current.toBlob((blob) => {
      if (!blob) {
        throw new Error("Failed to create blob");
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
      blobUrlRef.current = URL.createObjectURL(blob);
      hiddenAnchorRef.current!.href = blobUrlRef.current;
      hiddenAnchorRef.current!.click();
    });
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined);
    } else if (imgRef.current) {
      const { width, height } = imgRef.current;
      setAspect(16 / 9);
      setCrop(centerAspectCrop(width, height, 16 / 9));
    }
  }

  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          position: "fixed",
          inset: 0,
          zIndex: 10000000,
        }}
        className="h-screen w-full flex justify-center items-center p-3"
      >
        <div
          style={{ backgroundColor: "white" }}
          className="p-8 rounded-2xl relative shadow-lg m-5 w-full  md:w-1/2 mt-10"
        >
          <div className="relative z-50">
            <MdClose
              size={30}
              className="text-red-500 absolute hoverUpEffect right-2 top-2"
              onClick={closeModal}
            />{" "}
          </div>
          {imageSelected ? (
            <>
              <div className="w-full flex flex-col  flex justify-center items-center mt-3">
                <span
                  className="font-bold text-xl"
                  style={{
                    width: "100% !imporant",
                  }}
                >
                  Crop your image
                </span>

                <span className="text-sm text-gray-800">
                  (Drag the crop to find your face)
                </span>
              </div>
              <div
                className="w-full flex justify-center p-3"
                // style={{ maxHeight: "60vh", overflow: "auto" }}
              >
                <ReactCrop
                  crop={crop}
                  onChange={(_, percentCrop) => setCrop(percentCrop)}
                  onComplete={(c) => setCompletedCrop(c)}
                  aspect={aspect}
                  minHeight={100}
                  minWidth={100}
                  //   circularCrop
                  // locked={true}
                >
                  <img
                    ref={imgRef}
                    src={imgSrc}
                    className=""
                    style={{ width: "100%", maxHeight: "80vh" }}
                  />
                </ReactCrop>
              </div>
              <center>
                <button
                  style={{ backgroundColor: "#007acc", width: "200px" }}
                  className="text-white p-3 rounded-xl m-3 shadow border-none"
                  onClick={() => {
                    console.log(crop);
                  }}
                >
                  Crop
                </button>
              </center>

              {/* Preview */}
              {!!completedCrop && (
                <>
                  <div>
                    <canvas
                      ref={previewCanvasRef}
                      style={{
                        border: "1px solid black",
                        objectFit: "contain",
                        width: completedCrop.width,
                        height: completedCrop.height,
                      }}
                    />
                  </div>
                  <div>
                    <button onClick={onDownloadCropClick}>Download Crop</button>
                    <a
                      ref={hiddenAnchorRef}
                      download
                      style={{
                        position: "absolute",
                        top: "-200vh",
                        visibility: "hidden",
                      }}
                    >
                      Hidden download
                    </a>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="w-full flex flex-col relative flex justify-center items-center px-3 py-12">
                <span
                  className="font-bold text-xl p-3"
                  style={{
                    width: "100% !imporant",
                  }}
                >
                  Select a photo to upload
                </span>
                <BsFillImageFill size={90} className="my-4" color={"#fcaa01"} />

                <button
                  style={{ backgroundColor: "#dbe0e3" }}
                  className="border px-6 py-3 text-sm"
                  onClick={() => imageInputRef?.current?.click()}
                >
                  Select photo
                </button>
                <input
                  ref={imageInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={onSelectFile}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageCropper;
