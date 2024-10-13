import React from 'react'
import Category from "./Category"
import { useAtom } from 'jotai'
import { atomCategories, atomPlates, atomSelectedCategoryId, atomLanguage } from "../atoms/atom";

const Categories = ({categoriess}) => {
	let [language, setLanguage] = useAtom(atomLanguage)
	let [categories, setCategories] = useAtom(atomCategories);
  let [selectedCategoryId, setSelectedCategoryId] = useAtom(atomSelectedCategoryId);
	const handleCategoryClick = (id) => {
    setSelectedCategoryId(id);
    setCategories(categories.map(category => ({
      ...category,
      isActive: category.id === id, // Set isActive to true for the selected category only
    })));
  };
	return (
		<div className={`xl:w-[75rem] lg:w-[63rem] md:w-[48rem] sm:w-[40rem] my-10 overflow-scroll flex ${language ? "justify-start flex-row-reverse" : ""} slider-menu items-center`}>
			{categoriess.map((category) => (
				<Category
					key={category.id}
					onClick={() => handleCategoryClick(category.id)}
					image={category.img}
					title={category.name}
					isSelected={category.isActive}
				/>
			))}
      </div>
	)
}

export default Categories
