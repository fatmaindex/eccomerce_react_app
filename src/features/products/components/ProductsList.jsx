import React, { useMemo } from "react";
import ProductCard from "./ProductCard";
import Pagination from "../../../components/ui/Pagination ";
import Container from "../../../components/ui/Container";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useDispatch } from "react-redux";
import { setActiveCategory } from "../Products-Slice";
import { useLocation } from "react-router-dom";

function ProductsList({ products, productsPerPage, loading, currentPage, setCurrentPage, showTitle = true }) {
  const dispatch = useDispatch();
  const location = useLocation();
  
  const isProductDetailsPage = location.pathname.includes("/product/");
  const shouldShowTitle = showTitle && !isProductDetailsPage;
  
  let totalPages = useMemo(
    () => Math.ceil(products.length / productsPerPage),
    [products, productsPerPage]
  );
  
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  return (
    <Container size="xl" id="products">
      {shouldShowTitle && (
        <div className="flex items-center gap-2 flex-wrap mb-6 mt-24">
          <button
            onClick={() => {
              dispatch(setActiveCategory(false));
              setCurrentPage(1);
            }}
            className="text-3xl font-bold underline underline-offset-4 text-pink hover:opacity-85 transition-opacity cursor-pointer"
          >
            ALL
          </button>
          <span className="text-3xl font-bold">/</span>
          <h1 className="text-3xl font-bold">
            NEW ARRIVALS
          </h1>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array.from({ length: productsPerPage }).map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))
          : products.slice(startIndex, endIndex).map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
      </div>

      <div className="mt-8">
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </Container>
  );
}

export default ProductsList;