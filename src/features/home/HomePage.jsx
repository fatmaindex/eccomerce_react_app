import React, { useState, useEffect, useMemo } from "react";
import ProductsList from "../products/components/ProductsList";
import Categories from "../categories/components/Categories";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setActiveCategory } from "../products/Products-Slice";
import Hero from "./components/Hero";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  // Selectors
  const activeCategory = useSelector((state) => state.products.activeCategory);
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // function for filtration by category
  const filteredProducts = useMemo(() => {
    if (!activeCategory) return products;
    return products.filter((product) => product.category === activeCategory);
  }, [products, activeCategory]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Hero />
      <Categories setCurrentPage={setCurrentPage} />
      
      {/* Header Aligned Exactly with Products Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => {
              dispatch(setActiveCategory(false));
              setCurrentPage(1);
            }}
            className="text-3xl font-bold underline underline-offset-4 text-pink hover:opacity-80 transition-opacity cursor-pointer"
          >
            ALL
          </button>
          <span className="text-3xl font-bold">/</span>
          <h1 className="text-3xl font-bold">
            NEW ARRIVALS
          </h1>
        </div>
      </div>

      <ProductsList
        products={filteredProducts}
        productsPerPage={12}
        loading={loading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </React.Fragment>
  );
}

export default HomePage;