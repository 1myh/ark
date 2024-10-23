import React, { useState } from "react";
import { IoCart } from "react-icons/io5";
import { useAtom } from "jotai";
import { atomCartCounter, atomLanguage } from "../atoms/atom";

const FloatingCard = ({backgroundColor, textColor, backgroundColorHover, textColorHover}) => {
  let [cartCounter, setCartCounter] = useAtom(atomCartCounter)
  let [language, setLanguage] = useAtom(atomLanguage)
  let [isHovered, setIsHovered] = useState(false)
  return (
    <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`fixed p-5 -translate-x-[7.1rem] group hover:translate-x-0 transition-all duration-500 flex justify-center items-center left-0 top-80`} style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", backgroundColor: isHovered ? backgroundColorHover : backgroundColor, color: isHovered ? textColorHover : textColor }}>
			<div className={`flex relative`} >
        <h1 className={`text-lg mr-3`} > {language ? "عرض الطلب" : "view order"} </h1>
        <IoCart className={`text-3xl transition-all duration-500 ${language ? "mx-1" : "ml-5 mr-2"}`} style={{color: isHovered ? textColorHover : textColor}} />
        <div className={`text-2xl pt-2 px-4 transition-all duration-500 rounded-full absolute left-36 bottom-7 flex text-end justify-center items-center `} style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", backgroundColor: isHovered ? backgroundColorHover : backgroundColor, color: isHovered ? textColorHover : textColor }} >{cartCounter}</div>
      </div>
		</button>
  );
};

export default FloatingCard;
