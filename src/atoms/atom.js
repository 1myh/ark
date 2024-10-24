
import { atom } from "jotai";

export let atomCategories = atom([])
export let atomPlates = atom([])
export let atomSelectedCategoryId = atom([])
export let atomCartCounter = atom(0)
export let atomLanguage = atom(true)

{/* CATEGORY */}
export let atomBackgroundColor = atom("")
export let atomBackgroundColorHover = atom("")
export let atomTextColor = atom("")
export let atomTextColorHover = atom("")

{/* DISH CARD */}
export let atomTitleColor = atom("")
export let atomPriceColor = atom("")
export let atomButtonBackgroundColor = atom("")
export let atomButtonTextColor = atom("")

export let atomLoading = atom(false)

export let style = atom({
	appBackgroundColor: "white",

	categoryBackgroundColor: "",
	categoryBackgroundColorHover: "#f74a26",
	categoryTextColor: "",
	categoryTextColorHover: "white",

	dishCardBackgroundColor: "",
	dishCardBackgroundColorHover: "",
	dishCardTitleColor: "",
	dishCardTitleColorHover: "",
	dishCardPriceColor: "",
	dishCardPriceColorHover: "",
	dishCardButtonBackgroundColor: "#f74a26",
	dishCardButtonBackgroundColorHover: "#f74a26",
	dishCardButtonTextColor: "white",
	dishCardButtonTextColorHover: "white",
	
	dishPageBackgroundColor: "",
	dishPageTitleColor: "",
	dishPagePriceColor: "",
	dishPageButtonBackgroundColor: "",
	dishPageButtonBackgroundColorHover: "",
	dishPageButtonTextColor: "",
	dishPageButtonTextColorHover: "",
})