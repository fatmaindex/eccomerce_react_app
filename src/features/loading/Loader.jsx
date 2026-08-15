import { useSelector } from "react-redux";
<<<<<<< HEAD
const Loader = () => {
  const loading = useSelector((state) => state.loading.loading);
=======

const Loader = () => {
  const loading = useSelector((state) => state.loading.loading);

>>>>>>> d52b604a71d230407eb944f2f0b296eebdc835a5
  return (
    loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
     <div className="w-12 h-12 border-4 rounded-full border-pink border-t-black animate-spin"></div>
    </div>
    )
  );
};

export default Loader;
