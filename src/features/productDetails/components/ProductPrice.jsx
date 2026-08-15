import React from "react";

function ProductPrice({ price, discountPercentage }) {
  return (
<<<<<<< HEAD
    <div className="flex flex-col items-start justify-start md:flex-row ">
=======
    <div className="flex flex-col items-center justify-start md:flex-row">
>>>>>>> d52b604a71d230407eb944f2f0b296eebdc835a5
      <p className="mr-2 text-gray-600 line-through md:mr-4 text-md md:text-lg ">
        ${(price + (price * discountPercentage) / 100).toFixed(2)}
      </p>
      <p className="font-bold text-md md:text-lg">${price}</p>
    </div>
  );
}
export default ProductPrice;
