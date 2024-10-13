import React from 'react'
import logo from "../images/logo.jpg"
import { FaGlobeAmericas, FaSearch } from "react-icons/fa";

const Header = () => {
	return (
		<div>
			{/* LAPTOPS HEADER */}
			<div className={`md:flex hidden relative py-3 border-[0.1rem] flex-row-reverse justify-center items-center`} >
				<img className={`h-10`} src={logo} alt="ark" />
				<div className={`flex flex-row-reverse text-gray-500 mx-10 justify-center items-center`} >
					<FaSearch className={``} />
					<input dir='rtl' className={`xl:w-[60rem] focus:outline-none lg:w-[45rem] md:w-[30rem] px-3 py-2 rounded-md text-right`} placeholder='ابحث هنا...' type="text" />
				</div>
				<button className={`px-3 py-2 rounded-lg flex justify-center items-center border-[0.1rem] `} >arabic <FaGlobeAmericas className={`ml-2 text-orange-500`} /> </button>
			</div>

			{/* MOBILES HEADER */}
			<div className={`md:hidden flex flex-col relative py-3 border-[0.1rem] justify-center items-center`} >
				<div className={`flex flex-row-reverse justify-between w-full px-5 items-center `} >
					<img className={`h-10`} src={logo} alt={logo} />
					<button className={`px-3 py-2 rounded-lg flex justify-center items-center border-[0.1rem] `} >arabic <FaGlobeAmericas className={`ml-2 text-orange-500`} /> </button>
				</div>
				<div className={`flex flex-row-reverse w-full mt-5 text-gray-500 px-5 justify-center items-center`} >
					<FaSearch className={``} />
					<input dir='rtl' className={` w-full px-3 py-2 rounded-md text-right`} placeholder='ابحث هنا...' type="text" />
				</div>
			</div>
		</div>
	)
}

export default Header
