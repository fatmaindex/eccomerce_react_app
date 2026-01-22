import wishlist from "../../Assets/favorite_15844575.png";
import { useNavigate } from "react-router-dom";

function WishlistEmpty() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-[70vh] text-center">
      <img
        src={wishlist}
        alt="Wishlist Icon"
        className="object-contain mb-4 w-60 h-60"
      />

      <h1 className="mt-1 text-2xl font-medium text-gray-500">
        Your Wishlist is Empty
      </h1>

      <p className="mt-2 text-gray-400">
        Save your favorite items here to keep an eye on them!
      </p>

      <button className="w-40 mt-8 main-btn" onClick={() => navigate("/")}>
        <span className="z-10"> SHOP NOW</span>
      </button>
    </div>
  );
}

export default WishlistEmpty;
