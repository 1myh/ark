import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'

const FoodType = ({image, title, onClick, id, isSelected}) => {
	return (
		<Link to={"/"} >
			<div key={id} onClick={onClick} className={`rounded-full ${isSelected ? 'bg-dish' : ''} min-w-[9rem] mx-3 scale-90 group hover:bg-dish cursor-pointer transition-all duration-200 grid justify-items-center align-middle`} style={{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)"}} >
				<img className={`rounded-full filter ${isSelected ? 'invert-0' : ''} invert group-hover:invert-0 transition-all duration-200 w-[10rem] h-[10rem] p-5`} src={image} alt="" />
				<h1 className={`mb-10 whitespace-pre-wrap ${isSelected ? 'text-white' : ''} text-center group-hover:text-white transition-all duration-200`} >{title}</h1>
			</div>
		</Link>
	)
}

export default FoodType
