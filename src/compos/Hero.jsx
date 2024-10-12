import React from 'react'
import arkBanner from "../images/arkBanner.jpg"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Hero = () => {
	return (
		<div className={`flex justify-center items-center mt-5 w-full h-fit px-5`} >
			<img className={`rounded-lg relative xl:h-[28rem] lg:h-[23rem] md:h-[17rem] sm:h-[14rem]`} src={arkBanner} alt="" />
			<div className={`flex absolute justify-between items-center xl:w-[72rem] lg:w-[59rem] md:w-[43rem] sm:w-[36rem] w-full`} >
				<button className={`text-white text-xl bg-black p-2 sm:mx-0 mx-10`} ><FaArrowLeft /></button>
				<button className={`text-white text-xl bg-black p-2 sm:mx-0 mx-10`} ><FaArrowRight /></button>
			</div>
		</div>
	)
}

export default Hero
