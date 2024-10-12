import React from "react";
import { IoCart } from "react-icons/io5";
import { useAtom } from "jotai";
import { atomCartCounter } from "../atoms/atom";

const FloatingCard = () => {
  let [cartCounter, setCartCounter] = useAtom(atomCartCounter)
  return (
    <button className={`fixed p-5 -translate-x-[7.1rem] hover:translate-x-0 transition-all duration-500 bg-dish flex justify-center items-center left-0 top-80`} style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}>
			<div className={`flex relative`} >
        <h1 className={`text-white text-lg mr-3`} >عرض الطلب</h1>
        <IoCart className={`text-white text-3xl mx-1`} />
        <div className={`bg-dish text-white text-xl rounded-full p-2 h-7 absolute left-36 bottom-7 w-7 flex text-center justify-center items-start `} style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }} >{cartCounter}</div>
      </div>
		</button>
  );
};

export default FloatingCard;
