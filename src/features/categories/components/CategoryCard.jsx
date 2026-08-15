import React from "react";
import categoryImages from "../../../utils/categoryImages";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../../products/Products-Slice";

function CategoryCard({ category, getProductsByCategory, layout }) {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.products.activeCategory);
  const isActive = activeCategory === category;

  const isCatalogGrid = layout === "grid";

  return (
    <div
      key={category}
      className={`relative flex items-center p-4 rounded-lg cursor-pointer bg-lightPink transition-all duration-200 
        ${isCatalogGrid ? "h-24 w-full" : "h-24 lg:min-w-[14.5rem] md:min-w-[13rem] mt-8"} 
      `}
      onClick={() => {
        getProductsByCategory(category);
        dispatch(setActiveCategory(category));
      }}
    >
      <div className={`flex-1 ${isCatalogGrid ? "pr-16" : "w-[120px]"}`}>
        <p
          className={`font-semibold capitalize leading-snug ${
            isCatalogGrid ? "text-sm sm:text-base" : "text-xl"
          } ${isActive ? "text-pink" : "text-gray-800"}`}
        >
          {category.replaceAll("-", " ")}
        </p>
      </div>

      <div className={`absolute bg-white border border-gray-200 rounded-md overflow-hidden ${
        isCatalogGrid 
          ? "w-16 h-20 bottom-2 right-2" 
          : "w-20 h-28 bottom-3 right-3"
      }`}>
        <img 
          src={categoryImages[category]} 
          alt={category} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default CategoryCard;