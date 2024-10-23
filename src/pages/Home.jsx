import React from "react";
import Hero from "../compos/Hero";
import Category from "../compos/Category";
import DishCard from "../compos/DishCard";
import { useEffect, useState } from "react";
import Footer from "../compos/Footer";
import FloatingCard from "../compos/FloatingCard";
import { atomCategories, atomPlates, atomSelectedCategoryId } from "../atoms/atom";
import { useAtom } from "jotai";
import Categories from "../compos/Categories";
import Dishes from "../compos/Dishes";
import { data } from "../atoms/data";


const Home = () => {
  // VARIABLES
  let [categories, setCategories] = useAtom(atomCategories);
  let [plates, setPlates] = useAtom(atomPlates);
  let [selectedCategoryId, setSelectedCategoryId] = useAtom(atomSelectedCategoryId);

  return (
    <div className={`flex flex-col justify-center items-center relative`}>
      <Hero />

      {/* CATEGORIES */}
      <Categories categoriess={categories} />

      <FloatingCard textColor={data.floatCardTextColor} textColorHover={data.floatCardTextColorHover} backgroundColor={data.floatCardBackgroundColor} backgroundColorHover={data.floatCardBackgroundColorHover} />

      {/* DISHES */}
      {categories.some(category => category.isActive) && (
        <Dishes platess={plates} />
      )}
    </div>
  );
};

export default Home;
