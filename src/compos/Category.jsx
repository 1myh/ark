import React, { useState } from "react";
import { Link } from "react-router-dom";

const FoodType = ({
  image,
  title,
  onClick,
  id,
  isSelected,
  backgroundColor,
  backgroundColorHover,
	textColor,
	textColorHover,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={"/"}>
      <div
        key={id}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`rounded-full h-[14rem] w-[9rem] mx-3 scale-90 group cursor-pointer transition-all duration-200 grid justify-items-center align-middle`}
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: isSelected || isHovered ? backgroundColorHover : backgroundColor,
        }}
      >
        <img
          className={`rounded-full text-red-500 filter ${isSelected ? "invert-0" : ""} invert group-hover:invert-0 transition-all duration-200 w-[10rem] h-[10rem] p-5`}
          src={image}
          alt=""
        />
        <h1
          className={`mb-10 whitespace-pre-wrap px-5 text-center group-hover:text-white transition-all duration-200`}
					style={{color: isSelected || isHovered ? textColorHover : textColor}}
        >
          {title}
        </h1>
      </div>
    </Link>
  );
};

export default FoodType;
