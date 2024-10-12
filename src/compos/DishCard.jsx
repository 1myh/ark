import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link, Route, Routes } from 'react-router-dom'
import DishPage from '../pages/DishPage'

const DishCard = ({image, title, price, desc}) => {
	return (
		<Link to={`/${title}`} state={{ image, title, price, desc }} >
			<div className={`md:w-[17rem] cursor-pointer rounded-xl sm:m-5 mx-2 my-3 flex flex-col items-end text-right`} style={{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)"}}>
				<img className={`md:h-[15rem] md:w-[17rem] object-cover rounded-t-xl`} src={image} />
				<div className={`m-3 grid justify-items-end align-baseline`}>
					<h1 className={`text-xl my-1 mr-2`} >{title}</h1>
					<h2 dir='rtl' className={`text-sm my-1 mr-2`} >{price} دينار</h2>
					<button className={`bg-dish text-nowrap text-xs sm:text-sm p-3 flex justify-center items-center text-white rounded-lg`} >اضافة الى الطلبية <FaPlus className='ml-3' /></button>
				</div>
			</div>
		</Link>
	)
}

export default DishCard
