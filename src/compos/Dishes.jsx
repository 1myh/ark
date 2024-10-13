import React from 'react'
import DishCard from './DishCard'
import { useAtom } from 'jotai'
import { atomCategories, atomPlates, atomSelectedCategoryId, atomLanguage } from "../atoms/atom";

const Dishes = ({platess}) => {
  let [selectedCategoryId, setSelectedCategoryId] = useAtom(atomSelectedCategoryId);
	let [language, setLanguage] = useAtom(atomLanguage)
	return (
		<div dir={language ? "rtl" : ""} className={`grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 sm:justify-items-end`}>
			{platess
				.filter((plate) => plate.departmentID === selectedCategoryId)
				.map((plate) => (
					<DishCard key={plate.name} image={plate.img} title={plate.name} price={plate.price} desc={plate.desc} id={plate.id} />
			))}
		</div>
	)
}

export default Dishes
