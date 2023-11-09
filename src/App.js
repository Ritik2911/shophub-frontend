import "./App.css";
import axios from "axios";
import Navbar from "./components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setPageProducts,
  setProductDetail,
  setProducts,
  setRelatedProducts,
} from "./redux/slices/productSlice";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Profile from "./components/pages/Profile";
import ProductDetails from "./components/pages/ProductDetails";
import Footer from "./components/common/Footer";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import ThemeToggle from "./components/common/ThemeToggle";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const theme = useSelector((state) => state.theme);
  const API_URL = "https://fakestoreapi.com/products";
  const dispatch = useDispatch();

  async function fetchProductData() {
    const toastId = toast.loading("Loading...");
    try {
      const response = await axios.get(API_URL);
      console.log(response);
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log("eooro in fetching");
    }
    toast.dismiss(toastId);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  const { totalProducts, currentPage } = useSelector((state) => state.products);

  useEffect(() => {
    console.log("state data", totalProducts);
    dispatch(setPageProducts(0));
    dispatch(setProductDetail(0));
    dispatch(setRelatedProducts());
  }, [totalProducts]);

  useEffect(() => {
    dispatch(setPageProducts(currentPage));
  }, [currentPage]);

  return (
    <div
      className={`App min-h-screen ${
        theme ? "bg-pink-600" : "bg-richblue-700"
      }`}
    >
      <Navbar />
      <div className="fixed top-[90vh] right-[5vw] z-10">
        <ThemeToggle />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
