import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsByCategory,
} from "../../products/Products-Slice";
import { fetchCategories } from "../CategoriesSlice";
import Container from "../../../components/common/Container";
import CategoryCard from "../components/CategoryCard";
import CategoryCarousel from "../components/CategoryCarousel";

function Categories() {
  const { categories} = useSelector(
    (state) => state.categories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  function getProductsByCategory(categoryName) {
    dispatch(fetchProductsByCategory(categoryName));
  }

  const filteredCategories = categories?.filter(
    (category) =>
      ![
        "groceries",
        "vehicle",
        "motorcycle",
        "mens-watches",
        "mens-shoes",
        "mens-shirts",
        "sports-accessories",
      ].includes(category)
  );

  return (
    <Container size="xl">
      <div className="my-8 overflow-hidden">
        {/* categories heading */}
        <div className="flex items-center justify-between ">
          <div>
            <h6 className="text-xl font-semibold text-pink">Top Categories</h6>
            <h1 className="text-3xl font-bold">Choose by Top Category</h1>
          </div>
        </div>

        {/* categories Carousel */}
        <CategoryCarousel filteredCategories={filteredCategories}>
          {filteredCategories.map((category) => (
            <CategoryCard
              key={category}
              category={category}
              getProductsByCategory={getProductsByCategory}
            />
          ))}
      
        </CategoryCarousel>
      </div>
    </Container>
  );
}

export default Categories;
