import React from 'react'
import Categories from '../compos/Categories'
import { useAtom } from 'jotai'
import { atomCategories, atomSelectedCategoryId, atomCartCounter, atomLanguage } from "../atoms/atom";
import { useLocation } from 'react-router-dom';
import FloatingCard from '../compos/FloatingCard';


const DishPage = () => {
	const location = useLocation();
	let [language, setLanguage] = useAtom(atomLanguage)
  const { image, title, price, desc, id } = location.state || {};
	let [categories, setCategories] = useAtom(atomCategories);
	let [cartCounter, setCartCounter] = useAtom(atomCartCounter)

	let handle = () => {
		if(!clicked) {
			setClicked(true)
			setCartCounter(cartCounter + 1)
		} if(clicked) {
			setCartCounter(cartCounter)
		}
	}

	return (
		<div className={`flex flex-col items-center`} >
			<Categories categoriess={categories} />
			<FloatingCard />
			<div className={`flex flex-col md:flex-row justify-center items-center md:items-start w-full`} >
				<div className={`flex order-2  flex-col max-w-[30rem] md:w-fit w-full px-10 py-5 my-5 ${language ? "items-end md:order-1" : "items-start md:order-2"}`} >
					<h1 className={`text-right text-3xl lg:text-5xl`} >{title}</h1>
					<h1 className={`text-right mt-5 text-dish lg:text-2xl`} > {language ? "الوصف" : "description"} </h1>
					<h1 className={`text-right my-5`} >{desc === "" && language ? "لايوجد وصف" : "no discription"}</h1>
					<h1 dir={language ? "rtl" : ""} className={`text-right text-2xl lg:text-4xl`} >{price} {language ? "دينار" : "IQD"} </h1>
					<button onClick={handle} className={`lg:text-xl my-5 p-3 text-white bg-dish w-fit rounded-lg`} > {language ? "اضافة الى الطلبية" : "add to cart"} </button>
				</div>
				<img className={`xl:h-[40rem] size-fit sm:h-[30rem] md:px-0 px-5 order-1 ${language ? "lg:order-2" : "lg:order-1"} lg:h-[30rem] xl:mr-10 xl:mb-10`} src={image} alt={image} />
			</div>
		</div>
	)
}

export default DishPage
