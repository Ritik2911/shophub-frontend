import React from "react";
import toast from "react-hot-toast";
import { MdOutlineZoomOutMap, MdShoppingBag } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
import { setProductDetail } from "../../redux/slices/productSlice";

const ProductCard = ({ product, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme);

  const zoomClickHandler = () => {
    console.log(product);
    dispatch(setProductDetail(index));
    navigate("/shop");
  };

  const cartClickHandler = () => {
    dispatch(addToCart(product));
    toast.success("Added to Cart");
  };

  return (
    <div
      className={`w-fit flex flex-col items-center hover:scale-105 transition-all duration-300 ease-in  gap-4 py-4 px-8 rounded-3xl ${
        theme ? "dotted-light" : "dotted-dark"
      }`}
    >
      {/* porduct and cart icon */}

      <div className="flex justify-between items-center w-full">
        <div
          className={`flex justify-between items-center text-2xl p-2 rounded-full ${
            theme ? "bg-white" : "bg-black"
          } `}
          onClick={zoomClickHandler}
        >
          <MdOutlineZoomOutMap
            className={`${theme ? "text-black" : "text-richblack-25"}`}
          />
        </div>
        <div
          onClick={cartClickHandler}
          className={`flex justify-between items-center text-2xl p-2 rounded-full  ${
            theme ? "bg-white" : "bg-black"
          }`}
        >
          <MdShoppingBag
            className={`${theme ? "text-black" : "text-richblack-25"}`}
          />
        </div>
      </div>

      {/* Product Image  */}
      <div className="h-[200px]">
        <img
          src={product.image}
          alt="product"
          width={"150px"}
          height={"180px"}
          className="aspect-w-9 aspect-h-13 "
        />
      </div>

      <div>
        <p
          className={` text-xl font-semibold truncate text-center w-40 ${
            theme ? "text-text-blue-300" : "text-orange-300"
          }`}
        >
          {product.title}
        </p>
      </div>

      <div>
        <p
          className={` text-xl font-semibold truncate w-40 text-center ${
            theme ? "text-text-blue-300" : "text-orange-300"
          }`}
        >
          {product.price}
        </p>
      </div>
      <div>
        <p
          className={` text-xl font-semibold truncate w-40 text-center ${
            theme ? "text-text-blue-300" : "text-orange-300"
          }`}
        >
          {product.id}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
