import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link, Route, Routes } from 'react-router-dom'
import DishPage from '../pages/DishPage'
import { useAtom } from 'jotai'
import { atomCartCounter, atomLanguage } from '../atoms/atom'

const DishCard = ({image, title, price, desc, id}) => {
	let [cartCounter, setCartCounter] = useAtom(atomCartCounter)
	let [clicked, setClicked] = useState(false)
	let [language, setLanguage] = useAtom(atomLanguage)
	
	let handle = () => {
		if(!clicked) {
			setClicked(true)
			setCartCounter(cartCounter + 1)
		} if(clicked) {
			setCartCounter(cartCounter)
		}
	}
	return (
		<div className={`md:w-[17rem] cursor-pointer rounded-xl sm:m-5 mx-2 my-3 flex flex-col items-start text-right`} style={{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)"}}>
				<Link to={`/${id}`} state={{ image, title, price, desc }} >
					<img className={`md:h-[15rem] md:w-[17rem] object-cover rounded-t-xl`} src={image} />
					<div className={`m-3 grid justify-items-start align-baseline`}>
						<h1 className={`text-xl my-1 mr-2`} >{title}</h1>
						<h2 dir={language ? "rtl" : ""} className={`text-sm my-1 mr-2`} >{price} {language ? "دينار" : "IQD"} </h2>
					</div>
				</Link>
				<button onClick={handle} className={`bg-dish text-nowrap text-xs mx-4 mb-3 sm:text-sm p-3 flex flex-row-reverse justify-center items-center text-white rounded-lg`} > {language ? "اضافة الى الطلبية" : "add to cart"} <FaPlus className={`${language ? "ml-3" : "mr-3"} mb-1`} /></button>
			</div>
	)
}

export default DishCard
