import React from "react";
import categoryImages from "../../../utils/categoryImages";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../../products/Products-Slice";

function CategoryCard({ category, getProductsByCategory }) {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.products.activeCategory);
  const isActive = activeCategory === category;

  return (
    <div
      key={category}
      className="relative flex items-center mt-8 h-24 p-6 rounded-sm cursor-pointer bg-lightPink lg:min-w-[14.5rem] md:min-w-[13rem] "
      onClick={() => {
        getProductsByCategory(category);
        dispatch(setActiveCategory(category));
      }}
    >
      <p
        className={`text-xl font-semibold capitalize w-[120px] hover:text-pink ${
          isActive ? "text-pink" : "text-gray-700"
        }`}
      >
        {category.replaceAll("-", " ")}
      </p>
      <div className="absolute flex content-center w-20 bg-white border border-gray-200 rounded-md h-28 bottom-3 right-3 align-center">
        <img src={categoryImages[category]} alt={category} />
      </div>
    </div>
  );
}

export default CategoryCard;
