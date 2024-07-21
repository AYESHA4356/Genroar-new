import React, { useState } from "react";
import ProductInfo from "./ProductInfo"; 
import ProductMore from "../molecules/ProductMore";
import ProductSheet from "../molecules/ProductSheet";
import Productreviews from "../molecules/Productreviews";

const PortListing = () => {
  const [activeTab, setActiveTab] = useState("more");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="flex border flex-col">
        <div className="">
          <ProductInfo
            more={() => handleTabChange("more")}
            date={() => handleTabChange("date")}
            reviews={() => handleTabChange("reviews")}
          />
        </div>
        <div className="flex-col justify-center">
          <div className=" py-[20px] px-[30px] ">
            {activeTab === "more" && <ProductMore/>}
            {activeTab === "date" && <ProductSheet />}
            {activeTab === "reviews" && <Productreviews />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortListing;
