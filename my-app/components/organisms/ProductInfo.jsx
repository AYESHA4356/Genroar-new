import React, { useState } from "react";

function ProductInfo({ more, date, reviews }) {
  const [activeButton, setActiveButton] = useState('more');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div className="">
        <div className="flex items-center gap-[10px]  ">
          <button
            onClick={() => {
              handleButtonClick("more");
              more();
            }}
            className={`h-[45px] px-[30px]  font-semibold	 border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[16px]  border-none bg-gray-300  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${activeButton === "more" ? "text-white bg-[#ff6929fd] " : ""
              }`}
          >

            MORE INFO
          </button>
          <button
            onClick={() => {
              handleButtonClick("date");
              date();
            }}
            className={`h-[45px] px-[30px]  font-semibold	 border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[16px]  border-none bg-gray-300  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${activeButton === "date" ? "text-white bg-[#ff6929fd]" : ""
              }`}
          >
            DATE SHEET
          </button>
          <button
            onClick={() => {
              handleButtonClick("reviews");
              reviews();
            }}
            className={`h-[45px] px-[30px]  font-semibold	 border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[16px]  border-none bg-gray-300  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${activeButton === "reviews" ? "text-white bg-[#ff6929fd] " : ""
              }`}
          >
            REVIEWS
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo