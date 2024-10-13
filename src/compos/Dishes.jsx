import React from 'react'
import DishCard from './DishCard'
import { useAtom } from 'jotai'
import { atomCategories, atomPlates, atomSelectedCategoryId } from "../atoms/atom";

const Dishes = ({platess}) => {
  let [selectedCategoryId, setSelectedCategoryId] = useAtom(atomSelectedCategoryId);
	return (
		<div className={`grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 sm:justify-items-end`}>
			{platess
				.filter((plate) => plate.departmentID === selectedCategoryId)
				.map((plate) => (
					<DishCard key={plate.name} image={plate.img} title={plate.name} price={plate.price} desc={plate.desc} id={plate.id} />
			))}
		</div>
	)
}

export default Dishes
