import React, { useState } from "react";

function Portfoliobtns({ all , company , computer ,genrel, hipster ,food }) {
  const [activeButton, setActiveButton] = useState('all');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="pt-[3%]">
      <div className="w flex rou items-center gap-[15px]  bg-gray-100 justify-center w-[100%] py-[30px]  ">
        <button
          onClick={() => {
            handleButtonClick("all");
            all();
          }}
          className={`h-[40px] px-[15px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[14px] font-[500] text-[#747474] border-none bg-white  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${
            activeButton === "all" ? "text-white bg-[#ff6e30fd] " : ""
          }`}
        >
          all
        </button>
        <button
          onClick={() => {
            handleButtonClick("company");
            company();
          }}
          className={`h-[40px] px-[15px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[14px] font-[500] text-[#747474] border-none bg-white  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${
            activeButton === "company" ? "text-white bg-[#ff6e30fd] " : ""
          }`}
        >
          company
        </button>
        <button
          onClick={() => {
            handleButtonClick("computer");
            computer();
          }}
          className={`h-[40px] px-[15px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[14px] font-[500] text-[#747474] border-none bg-white  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${
            activeButton === "computer" ? "text-white bg-[#ff6e30fd] " : ""
          }`}
        >
          Computer
        </button>
        <button
          onClick={() => {
            handleButtonClick("genrel");
            genrel();
          }}
          className={`h-[40px] px-[15px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[14px] font-[500] text-[#747474] border-none bg-white  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${
            activeButton === "genrel" ? "text-white bg-[#ff6e30fd] " : ""
          }`}
        >
          genrel
        </button>
        <button
          onClick={() => {
            handleButtonClick("hipster");
            hipster();
          }}
          className={`h-[40px] px-[15px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[14px] font-[500] text-[#747474] border-none bg-white  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${
            activeButton === "hipster" ? "text-white bg-[#ff6e30fd] " : ""
          }`}
        >
          Hipster
        </button>
        <button
          onClick={() => {
            handleButtonClick("food");
            food();
          }}
          className={`h-[40px] px-[15px] border-[1px] uppercase cursor-pointer border-[#242424] hover:border-[#ff6a28] hover:text-white  text-center  flex items-center justify-center  text-[14px] font-[500] text-[#747474] border-none bg-white  hover:bg-[#fd7e14] hover:boder-[#fd7e14] ease-in duration-300 ${
            activeButton === "food" ? "text-white bg-[#ff6e30fd] " : ""
          }`}
        >
          Just Food
        </button>
      </div>
    </div>
  );
}

export default Portfoliobtns;