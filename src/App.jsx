import React from 'react'
import Header from './compos/Header'
import Home from './pages/Home'
import DishPage from './pages/DishPage'
import Category from "./compos/Category";
import DishCard from "./compos/DishCard";
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import { atomCategories, atomPlates, atomSelectedCategoryId } from './atoms/atom';
import { useAtom } from 'jotai'
import Categories from "./compos/Categories";
import Dishes from "./compos/Dishes";
import FloatingCard from './compos/FloatingCard';
import Footer from './compos/Footer';

const App = () => {
  // VARIABLES
  let [categories, setCategories] = useAtom(atomCategories);
  let [plates, setPlates] = useAtom(atomPlates);
  let [selectedCategoryId, setSelectedCategoryId] = useAtom(atomSelectedCategoryId);

  // DATA FETCHING
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://us-central1-faya-resturent.cloudfunctions.net/rest/departments/qcafe');
      const data = await response.json();
      const categoriesWithActive = data.map(category => ({ ...category, isActive: false }));
      setCategories(categoriesWithActive);
      
      // Set the default selected category to the first one (or any specific one)
      if (categoriesWithActive.length > 0) {
        const defaultCategoryId = categoriesWithActive[0].id; // Use the first category as default
        setSelectedCategoryId(defaultCategoryId);
        // Set the active state for the default category
        setCategories(prevCategories => prevCategories.map(category => ({
          ...category,
          isActive: category.id === defaultCategoryId,
        })));
      }
    };

    const fetchPlates = async () => {
      // Fetch menus from your API
      const response = await fetch('https://us-central1-faya-resturent.cloudfunctions.net/rest/offers/qcafe');
      const data = await response.json();
      setPlates(data);
    };

    fetchCategories();
    fetchPlates();
  }, []);

  const handleCategoryClick = (id) => {
    setSelectedCategoryId(id);
    setCategories(categories.map(category => ({
      ...category,
      isActive: category.id === id, // Set isActive to true for the selected category only
    })));
  };
  return (
    <div className={``} >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:title' element={<DishPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
