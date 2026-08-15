import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setActiveCategory } from "../../products/Products-Slice";
import ProductsList from "../components/ProductsList";
import CategoriesGrid from "../../../features/categories/components/CategoriesGrid"; 
import Container from "../../../components/ui/Container";

function CatalogPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const { products, loading } = useSelector((state) => state.products);
  const activeCategory = useSelector((state) => state.products.activeCategory);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return products;
    return products.filter((product) => product.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <div className="bg-gray-50/50 min-h-screen py-2">
      
      <CategoriesGrid setCurrentPage={setCurrentPage} />

      <Container size="xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-gray-200 mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => {
                dispatch(setActiveCategory(false));
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                !activeCategory 
                  ? "bg-[#e31870] text-white shadow-md shadow-pink-500/20" 
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              All Products
            </button>
            
            {activeCategory && (
              <div className="flex items-center gap-2 text-sm bg-pink-50 text-[#e31870] px-4 py-2 rounded-full font-medium border border-pink-100">
                <span>Filtered by:</span>
                <span className="capitalize font-bold">{activeCategory}</span>
                <button 
                  onClick={() => {
                    dispatch(setActiveCategory(false));
                    setCurrentPage(1);
                  }}
                  className="ml-1 hover:opacity-75 font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          <div className="text-sm text-gray-500 font-medium">
            Showing <span className="text-gray-900 font-bold">{filteredProducts.length}</span> products
          </div>
        </div>
      </Container>

      <ProductsList
        products={filteredProducts}
        productsPerPage={12}
        loading={loading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        showTitle={false} 
      />
    </div>
  );
}

export default CatalogPage;