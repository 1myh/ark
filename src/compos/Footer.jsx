import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaSnapchat } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import rights from "../images/copy.png"


const Footer = () => {
	return (
		<div className={`w-full flex flex-col md:flex-row-reverse justify-around py-5 mt-5 items-center`} style={{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)"}}>
			<div className={`flex flex-col items-center md:items-end`} >
				<img className={`h-4 mb-2`} src={rights} alt="" />
				<h1 className={`text-sm mb-3 px-5 md:px-0 text-center`} >مطعم وكافيه ارك - بغداد - الكرادة - ش52 - قرب جامعة اوروك - 07710007222</h1>
			</div>
			<div className={`flex flex-row-reverse `} >
				<FaFacebookF className={`text-3xl mx-2 text-gray-500 cursor-pointer hover:text-dish transition-all duration-500`} />
				<FaInstagram className={`text-3xl mx-2 text-gray-500 cursor-pointer hover:text-dish transition-all duration-500`} />
				<ImWhatsapp className={`text-3xl mx-2 text-gray-500 cursor-pointer hover:text-dish transition-all duration-500`} />
				<FaSnapchat className={`text-3xl mx-2 text-gray-500 cursor-pointer hover:text-dish transition-all duration-500`} />
				<MdLocationPin className={`text-3xl mx-2 text-gray-500 cursor-pointer hover:text-dish transition-all duration-500`} />
			</div>
		</div>
	)
}

export default Footer
