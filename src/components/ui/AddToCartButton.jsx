import React from "react";
import { addToCart } from "../../features/cart/Cart-Slice";
import { showToast } from "../../features/toast/Toast-Slice";
import { useDispatch, useSelector } from "react-redux";
import { addToCartInSupabase } from "../../features/cart/CartThunks";

function AddToCartButton({
  selectedProduct,
  quantity,
  fromDetails = false,
  className = "",
}) {
  const dispatch = useDispatch();
  const userId = useSelector((state) =>
    state.auth.user ? state.auth.user.id : null
  );
  // Handle adding to cart
  const handleAddToCart = (product) => {
    const productWithQuantity = {
      ...product,
      quantity: fromDetails ? quantity : 1,
    };
    if (userId) {
      dispatch(
        addToCartInSupabase({ product: productWithQuantity, userId: userId })
      );
    } else {
      dispatch(
        addToCart({
          ...product,
          quantity: fromDetails ? quantity : 1,
        })
      );
    }
    dispatch(
      showToast({
        message: "Added to Bag",
        type: "add",
        product: product,
        quantity: fromDetails ? quantity : 1,
      })
    );
  };

  return (
    <button
      className={`main-btn bg-pink
           ${className}`}
      onClick={(e) => {
        handleAddToCart(selectedProduct);
        e.stopPropagation();
      }}
    >
      <span className="z-10">Add To Bag</span>
    </button>
  );
}
export default AddToCartButton;
