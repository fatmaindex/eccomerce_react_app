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

