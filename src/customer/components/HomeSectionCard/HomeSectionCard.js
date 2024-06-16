import React from "react";
import Product1 from "../../../asserts/product1.jpg"

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
        <div className="h-[15rem] mx-3">
            <img className="object-cover object-top w-full h-full" src={Product1} alt=""/>
        </div>

        <div className="p-4">
            <h2 className="text-lg font-medium text-gray-900">HI-FI Micro System</h2>
            <p className="mt-2 text-sm text-gray-500">Fyne Audio F301 Compact Bookshelf Speaker + Yamaha R-S202 Stereo Receiver Combo Stereo Package</p>
        </div>
    </div>
  );
};

export default HomeSectionCard;
