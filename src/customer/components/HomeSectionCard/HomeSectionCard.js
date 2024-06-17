import React from "react";
import Product1 from "../../../asserts/hamzer_61_key_electric_music_keyboard_piano_with_stand_3.png.png"

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg overflow-hidden w-[15rem] mx-3 border">
        <div className="h-[15rem] mx-3">
            <img className="object-cover object-top w-full h-full" src={Product1} alt=""/>
        </div>

        <div className="p-4">
            <h2 className="text-lg font-medium">HI-FI Micro System</h2>
            <p className="mt-2 text-sm">Fyne Audio F301 Compact Bookshelf Speaker + Yamaha R-S202 Stereo Receiver Combo Stereo Package</p>
        </div>
    </div>
  );
};

export default HomeSectionCard;
