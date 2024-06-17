import React from "react";
import Product1 from "../../../asserts/hamzer_61_key_electric_music_keyboard_piano_with_stand_3.png.png"

const HomeSectionCard = ({product}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg overflow-hidden w-[15rem] mx-3 border">
        <div className="h-[15rem] w-[10rem]">
            <img className="object-cover object-top w-full h-full" src={product.imageUrl} alt=""/>
        </div>

        <div className="p-4">
            <h2 className="text-lg font-medium">{product.brand}</h2>
            <p className="mt-2 text-sm">{product.title}</p>
        </div>
    </div>
  );
};

export default HomeSectionCard;
