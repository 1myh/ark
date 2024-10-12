import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'

const Carousel = ({images, autoSlide = false, slideEvery}) => {
	let [index, setIndex] = useState(0)
	
	let next = () => {
		setIndex(index === images.length - 1 ? 0 : index + 1)
	}
	let prev = () => {
		setIndex(index === 0 ? images.length - 1 : index - 1)
	}

	useEffect(() => {
		if (!autoSlide) return
		let slideInterval = setInterval(next, slideEvery)

		return () => clearInterval(next, slideEvery)
	}, [])

	return (
		<div className={`relative overflow-hidden`} > 
			<div className={`flex transition-transform ease-out duration-500`} style={{transform: `translate(-${index * 100}%)`}} >
				{images.map((img) => (
					<img src={img} />
				))}
			</div>
			<div className={`absolute right-0 left-0 hidden md:flex top-0 justify-between items-center inset-0`} >
				<button onClick={prev} ><FontAwesomeIcon className={`text-black p-4 bg-white/80 hover:bg-white text-lg rounded-full mx-5`} icon={faArrowLeft} /></button>
				<button onClick={next} ><FontAwesomeIcon className={`text-black p-4 bg-white/80 hover:bg-white text-lg rounded-full mx-5`} icon={faArrowRight} /></button>
			</div>
			<div className={`absolute right-0 left-0 bottom-4`} >
				<div className={`flex justify-center items-center`} >
					{images.map((_, i) => (
						<div onClick={() => setIndex(i)} className={`${index === i ? "p-2" : "bg-opacity-50"} cursor-pointer transition-all w-3 h-3 mx-1 rounded-full bg-black/30 `} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Carousel
