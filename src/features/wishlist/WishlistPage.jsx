<<<<<<< HEAD
=======
import React from "react";
>>>>>>> d52b604a71d230407eb944f2f0b296eebdc835a5
import { useSelector } from "react-redux";
import CartProducts from "../cart/components/CartProducts";
import { showToast } from "../toast/Toast-Slice";
import Container from "../../components/ui/Container";
<<<<<<< HEAD
import WishlistEmpty from "./WishlistEmpty";
const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);
  if (wishlistItems.length > 0) {
=======

const WishlistPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);
>>>>>>> d52b604a71d230407eb944f2f0b296eebdc835a5
  return (
    <section className="flex flex-col items-center py-8 mx-auto h-max bg-lightPink">
      <Container className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4  mt-0 mb-4 ml-[18px] ">
          {wishlistItems.length > 0 ? " My Wishlist" : "wish list is empty "}
        </h1>
        <CartProducts
          cartProducts={wishlistItems}
          isWishlist={true}
          showToast={showToast}
        />
      </Container>
    </section>
  );
<<<<<<< HEAD
   } else {
    return <WishlistEmpty />;
  }
=======
>>>>>>> d52b604a71d230407eb944f2f0b296eebdc835a5
};
export default WishlistPage;
