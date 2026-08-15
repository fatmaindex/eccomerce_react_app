import React from 'react'
import ProductImagePlaceholder from "../../../Assets/ImagePlaceholder.jpg";

function ProductImage({ imageUrl, discount, title }) {
  return (
    <div className="relative flex items-center md:h-[420px] h-[350px] justify-center border-2 border-nude rounded-md w-[90%] md:w-[40%] bg-white overflow-hidden p-4">
      
      {/* Discount Badge */}
      {discount > 0 && (
        <small className="absolute top-2 left-2 z-10 px-2 py-1 text-[14px] font-semibold text-center text-white rounded-sm bg-pink">
          <h6>{`- ${Math.ceil(discount)}% `}</h6>
        </small>
      )}

      {/* Product Image */}
      <img
        className="object-contain w-full h-full max-h-[380px] p-2 transition-transform duration-300 hover:scale-105"
        src={imageUrl || ProductImagePlaceholder}
        alt={title || "Product Image"}
      />
    </div>
  )
}

export default ProductImage