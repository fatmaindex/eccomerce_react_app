import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../../products/Products-Slice";
import { fetchCategories } from "../CategoriesSlice";
import Container from "../../../components/ui/Container";
import CategoryCard from "../components/CategoryCard";
import { ChevronDown, ChevronUp } from "lucide-react";

function CategoriesGrid({ setCurrentPage }) {
  const { categories, loading } = useSelector((state) => state.categories);
  const activeCategory = useSelector((state) => state.products.activeCategory);
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  function getProductsByCategory(categoryName) {
    dispatch(setActiveCategory(categoryName));
    setCurrentPage(1);
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
        "smartphones",
        "sports-accessories",
      ].includes(category)
  );

  return (
    <Container size="xl">
      <div className="mt-8 mb-6">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h6 className="text-sm font-semibold text-[#e31870] uppercase tracking-wider">Top Categories</h6>
            <h2 className="text-2xl font-bold text-gray-900">Choose by Top Category</h2>
          </div>

          {/* زرار Show More / Show Less للموبايل */}
          {filteredCategories && filteredCategories.length > 4 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#e31870] hover:text-pink-700 transition-colors sm:hidden cursor-pointer"
            >
              <span>{showAll ? "Show Less" : "Show More"}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredCategories?.map((category, index) => {
            // logic الإخفاء على الموبايل
            const isHiddenOnMobile = !showAll && index >= 4;

            return (
              <div 
                key={category} 
                className={`transition-all duration-200 ${
                  isHiddenOnMobile ? "hidden sm:block" : "block"
                }`}
              >
                <CategoryCard
                  category={category}
                  getProductsByCategory={getProductsByCategory}
                  layout="grid"
                />
              </div>
            );
          })}
        </div>

        {filteredCategories && filteredCategories.length > 4 && (
          <div className="mt-4 text-center sm:hidden">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-full border border-pink-200 bg-pink-50 text-[#e31870] text-sm font-semibold shadow-sm hover:bg-pink-100 transition-all cursor-pointer"
            >
              {showAll ? "Show Less Categories" : `Show All Categories (${filteredCategories.length})`}
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}

export default CategoriesGrid;