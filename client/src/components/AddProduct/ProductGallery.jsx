import { useState } from "react";
import SectionHeading from "./SectionHeading";

const ProductGallery = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const onImageSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  };
  return (
    <>
      <SectionHeading
        title="Product Image"
        desc="Please provide your product picture"
      />
      <div>
        <div className=" z-10 top-0 ">
          <div className="extraOutline p-4 bg-white w-max m-auto rounded-lg">
            <div className="file_upload p-5 w-52 sm:w-72 relative border-4 border-dotted border-gray-300 rounded-lg">
              {imagePreview ? (
                <img src={imagePreview} draggable={false} />
              ) : (
                <div>
                  <svg
                    className="text-indigo-500 w-24 mx-auto mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <div className="input_field flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        className="text-sm cursor-pointer w-36 hidden"
                        type="file"
                        name="ImageURL"
                        onChange={onImageSelect}
                        id="imageURL"
                        placeholder="Write your image url"
                        accept="image/png, image/jpg, image/jpeg"
                      />
                      <div className="text-[14px] bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-1 hover:bg-indigo-500">
                        Select
                      </div>
                    </label>

                    <div className="title md:text-[14px] text-[13px] text-indigo-500 uppercase">
                      or drop files here
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
