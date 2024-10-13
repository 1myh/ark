import React from "react";
import { IoCart } from "react-icons/io5";
import { useAtom } from "jotai";
import { atomCartCounter, atomLanguage } from "../atoms/atom";

const FloatingCard = () => {
  let [cartCounter, setCartCounter] = useAtom(atomCartCounter)
  let [language, setLanguage] = useAtom(atomLanguage)
  return (
    <button className={`fixed p-5 -translate-x-[7.1rem] hover:translate-x-0 transition-all duration-500 bg-dish flex justify-center items-center left-0 top-80`} style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}>
			<div className={`flex relative`} >
        <h1 className={`text-white text-lg mr-3`} > {language ? "عرض الطلب" : "view order"} </h1>
        <IoCart className={`text-white text-3xl ${language ? "mx-1" : "ml-5 mr-2"}`} />
        <div className={`bg-dish text-white text-2xl pt-2 px-4 rounded-full absolute left-36 bottom-7 flex text-end justify-center items-center `} style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }} >{cartCounter}</div>
      </div>
		</button>
  );
};

export default FloatingCard;
