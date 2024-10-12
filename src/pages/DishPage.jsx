import React from 'react'
import Categories from '../compos/Categories'
import { useAtom } from 'jotai'
import { atomCategories, atomSelectedCategoryId, atomCartCounter } from "../atoms/atom";
import { useLocation } from 'react-router-dom';
import FloatingCard from '../compos/FloatingCard';


const DishPage = () => {
	const location = useLocation();
  const { image, title, price, desc } = location.state || {};
	let [categories, setCategories] = useAtom(atomCategories);
	let [cartCounter, setCartCounter] = useAtom(atomCartCounter)
	return (
		<div className={`flex flex-col items-center`} >
			<Categories categoriess={categories} />
			<FloatingCard />
			<div className={`flex flex-col md:flex-row justify-center items-center md:items-start w-full`} >
				<div className={`flex order-2 md:order-1 flex-col max-w-[30rem] md:w-fit w-full px-10 py-5 my-5 items-end`} >
					<h1 className={`text-right text-3xl lg:text-5xl`} >{title}</h1>
					<h1 className={`text-right mt-5 text-dish lg:text-2xl`} >الوصف</h1>
					<h1 className={`text-right my-5`} >{desc === "" ? "لايوجد وصف" : desc}</h1>
					<h1 dir='rtl' className={`text-right text-2xl lg:text-4xl`} >{price} دينار</h1>
					<button onClick={() => setCartCounter(cartCounter + 1)}  className={`lg:text-xl my-5 p-3 text-white bg-dish w-fit rounded-lg`} >اضافة الى الطلبية</button>
				</div>
				<img className={`xl:h-[40rem] size-fit sm:h-[30rem] md:px-0 px-5 order-1 lg:order-2 lg:h-[30rem] xl:mr-10 xl:mb-10`} src={image} alt={image} />
			</div>
		</div>
	)
}

export default DishPage
