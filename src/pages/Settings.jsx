import React, { useState } from 'react'
import Category from "../compos/Category"
import image from "../images/finger.jpg"
import DishCard from '../compos/DishCard'
import { useAtom } from 'jotai'
import { style } from '../atoms/atom'
import { atomBackgroundColor, atomBackgroundColorHover, atomTitleColor, atomTextColorHover, atomPriceColor, atomButtonBackgroundColor, atomTextColor, atomButtonTextColor } from '../atoms/atom'

const Settings = () => {
	let [data, setData] = useAtom(style)
	{/* CATEGORY */}
	let [backgroundColor, setBackgroundColor] = useAtom(atomBackgroundColor)
	let [backgroundColorHover, setBackgroundColorHover] = useAtom(atomBackgroundColorHover)
	let [textColor, setTextColor] = useAtom(atomTextColor)
	let [textColorHover, setTextColorHover] = useAtom(atomTextColorHover)

	{/* DISH CARD */}
	let [titleColorr, setTitleColor] = useAtom(atomTitleColor)
	let [priceColorr, setPriceColor] = useAtom(atomPriceColor)
	let [buttonBackgroundColorr, setButtonBackgroundColor] = useAtom(atomButtonBackgroundColor)
	let [buttonTextColorr, setButtonTextColor] = useAtom(atomButtonTextColor)

	return (
		<div className={`flex flex-col justify-center items-center`} >
			<Category title={"شيشة"} image={image} backgroundColorr={backgroundColor} backgroundColorHover={backgroundColorHover} textColor={textColor} textColorHover={textColorHover} />
			<div className={`border p-3 flex flex-col items-start border-x-4 border-y-4 rounded-lg`} >
				<h1 className={`text-xl`} >controls</h1>
				<div className={`flex justify-center my-3 items-center`} >
					<h1 className={`mr-5`}>background color</h1>
					<input type="color" onChange={(e) => setBackgroundColor(e.target.value)} />
				</div>
				<div className={`flex justify-center my-3 items-center`} >
					<h1 className={`mr-5`}>background color (hover)</h1>
					<input type="color" onChange={(e) => setBackgroundColorHover(e.target.value)} />
				</div>
				<div className={`flex justify-center my-3 items-center`} >
					<h1 className={`mr-5`}>text color</h1>
					<input type="color" onChange={(e) => setTextColor(e.target.value)} />
				</div>
				<div className={`flex justify-center my-3 items-center`} >
					<h1 className={`mr-5`}>text color (hover)</h1>
					<input type="color" onChange={(e) => setTextColorHover(e.target.value)} />
				</div>
			</div>

			<DishCard image={image} title={"بتيتة فنكر بطاطس"} price={"250,000"} titleColor={data.dishCardTitleColor} priceColor={priceColorr} buttonBackgroundColor={buttonBackgroundColorr} buttonTextColor={buttonTextColorr} />
			<div className={`border p-3 flex flex-col items-start border-x-4 border-y-4 rounded-lg`} >
				<h1 className={`text-xl`} >controls</h1>
				<div className={`flex justify-center my-3 items-center`} >
					<h1 className={`mr-5`}>title color</h1>
					<input value={data.dishCardTitleColor} type="color" onChange={(e) => setData({...data, dishCardTitleColor: e.target.value})} />
				</div>
				<div className={`flex justify-center my-3 items-center`} >
					<h1 className={`mr-5`}>price color</h1>
					<input value={data.dishCardPriceColor} type="color" onChange={(e) => setData({...data, dishCardPriceColor: e.target.value})} />
				</div>
				<div className={`flex justify-center my-3 items-center`} >
					<h1 className={`mr-5`}>button background color</h1>
					<input type="color" onChange={(e) => setButtonBackgroundColor(e.target.value)} />
				</div>
				<div className={`flex justify-center my-3 items-center`} >
					<h1 className={`mr-5`}>button text color</h1>
					<input type="color" onChange={(e) => setButtonTextColor(e.target.value)} />
				</div>
			</div>
		</div>
	)
}

export default Settings
