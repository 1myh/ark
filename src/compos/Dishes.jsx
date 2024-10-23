import React from "react";
import DishCard from "./DishCard";
import { useAtom } from "jotai";
import { data } from "../atoms/data"
import {
  atomCartCounter,
  atomLanguage,
  atomTitleColor,
  atomPriceColor,
  atomButtonBackgroundColor,
  atomButtonTextColor,
  atomCategories,
  atomPlates,
  atomSelectedCategoryId,
} from "../atoms/atom";

const Dishes = ({ platess }) => {
  let [selectedCategoryId, setSelectedCategoryId] = useAtom(atomSelectedCategoryId);
  let [language, setLanguage] = useAtom(atomLanguage);
  return (
    <div
      dir={language ? "rtl" : ""}
      className={`grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 sm:justify-items-end`}>
      {platess
        .filter((plate) => plate.departmentID === selectedCategoryId)
        .map((plate) => (
          <DishCard
            key={plate.name}
            image={plate.img}
            title={language ? plate.name : plate.enName}
            price={plate.price}
            desc={language ? plate.desc : plate.enDesc}
            id={plate.id}
            titleColor={data.dishCardTitleColor}
            priceColor={data.dishCardPriceColor}
            buttonBackgroundColor={data.dishCardButtonBackgroundColor}
            buttonTextColor={data.dishCardButtonTextColor}
            buttonTextColorHover={data.dishCardButtonTextColorHover}
            buttonBackgroundColorHover={data.dishCardButtonBackgroundColorHover}
            backgroundColorHover={data.dishCardBackgroundColorHover}
            backgroundColor={data.dishCardBackgroundColor}
          />
        ))}
    </div>
  );
};

export default Dishes;

/* DISH CARD
	let [titleColorr, setTitleColor] = useAtom(atomTitleColor)
	let [priceColorr, setPriceColor] = useAtom(atomPriceColor)
	let [buttonBackgroundColorr, setButtonBackgroundColor] = useAtom(atomButtonBackgroundColor)
	let [buttonTextColorr, setButtonTextColor] = useAtom(atomButtonTextColor) */
