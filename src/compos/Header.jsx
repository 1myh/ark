import React, { useState } from 'react'
import logo from "../images/logo.jpg"
import { FaGlobeAmericas, FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useAtom } from 'jotai';
import { atomLanguage } from '../atoms/atom';
import { Link } from 'react-router-dom';

const Header = ({backgroundColor, textColor, buttonBackgroundColor, buttonBackgroundColorHover, buttonIconColor, buttonIconColorHover}) => {
	let [language, setLanguage] = useAtom(atomLanguage)
	let [isHovered, setIsHovered] = useState(false)
	
	return (
		<div>
			{/* LAPTOPS HEADER */}
			<div className={`md:flex hidden ${language ? "flex-row-reverse" : "flex-row"} relative py-3 border-[0.1rem] justify-center items-center`} style={{backgroundColor: backgroundColor}} >
				<img className={`h-10`} src={logo} alt="ark" />
				<div className={`flex ${language ? "flex-row-reverse" : "flex-row"} text-gray-500 mx-10 justify-center items-center`} >
					<FaSearch style={{color: textColor}} />
					<input id='placeholder' dir={language ? "rtl" : "ltr"} className={`xl:w-[60rem] focus:outline-none lg:w-[45rem] md:w-[30rem] px-3 py-2 rounded-md ${language ? "text-right" : "text-left"}`} placeholder={language ? 'ابحث هنا...' : 'search here...'} type="text" style={{color: textColor}} />
				</div>
				<button
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					onClick={() => setLanguage(!language)}
					className={`px-3 group py-2 rounded-lg flex transition-all duration-300 justify-center items-center border-[0.1rem] `}
					style={{backgroundColor: isHovered ? buttonBackgroundColorHover : buttonBackgroundColor}} >
						{language ? "عربي" : "english"}<FaGlobeAmericas className={`ml-2 transition-all duration-300`} style={{color: isHovered ? buttonIconColorHover : buttonIconColor}} />
				</button>
				<Link
					to={"/rate"}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					className={`px-3 group py-2 rounded-lg flex mx-5 transition-all duration-300 justify-center items-center border-[0.1rem] `}
					style={{backgroundColor: isHovered ? buttonBackgroundColorHover : buttonBackgroundColor}} >
						{language ? "قيم المطعم" : "give us a star"}<FaStar className={`ml-2 text-lg transition-all duration-300`} style={{color: isHovered ? buttonIconColorHover : buttonIconColor}} />
				</Link>
			</div>

			{/* MOBILES HEADER */}
			<div className={`md:hidden flex flex-col relative py-3 border-[0.1rem] justify-center items-center`} >
				<div className={`flex ${language ? "flex-row-reverse" : "flex-row"} justify-between w-full px-5 items-center `} >
					<img className={`h-10`} src={logo} alt={logo} />
					<button onClick={() => setLanguage(!language)} className={`px-3 py-2 rounded-lg flex justify-center items-center border-[0.1rem] `} > {language ? "عربي" : "english"} <FaGlobeAmericas className={`ml-2 text-orange-500`} /> </button>
				</div>
				<div className={`flex ${language ? "flex-row-reverse" : "flex-row"} w-full mt-5 text-gray-500 px-5 justify-center items-center`} >
					<FaSearch style={{color: textColor}} />
					<input
						id='placeholder'
						dir={language ? "rtl" : ""}
						className={`focus:outline-none w-full px-3 py-2 rounded-md ${language ? "text-right" : "text-left"}`} placeholder={language ? 'ابحث هنا...' : 'search here...'}
						type="text" style={{color: textColor}}
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
