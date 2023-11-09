import React from "react";
import toast from "react-hot-toast";
import { BiPlus, BiMinus } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const product = item.product;
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(product.price * item.quantity);

  const addQuantity = () => {
    dispatch(addToCart(product));
    toast.success("Added to Cart");
  }

  const deleteProduct = () => {
    dispatch(removeFromCart(product));
    toast.error("Removed from Cart")
  }
  return (
    <div className="grid md:grid-cols-4 border-b border-gray-400 dark:border-blue-300 pb-2 grid-cols-2">
      <div className="w-full h-full flex justify-center items-center">
        <div className="px-8 py-4 shadow-inner-sm dark:shadow-inner-d-sm rounded-lg">
          <img src={product.image} width="40px" alt="Cart Item" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <p className="text-lg font-medium text-black dark:text-richblack-25">
          {product.title.split(" ").slice(0, 3).join(" ")}
        </p>
      </div>
      <div className="w-full flex justify-center gap-3 items-center">
        {item.quantity > 1 ? (
          <button onClick={deleteProduct} className="px-1 py-1 shadow-inner-sm dark:shadow-inner-d-sm rounded-full text-3xl font-bold dark:text-richblack-25">
            <BiMinus />
          </button>
        ) : (
          <button onClick={deleteProduct} className="px-2 py-2 shadow-inner-sm dark:shadow-inner-d-sm rounded-full text-2xl font-bold text-red-500 dark:text-blue-300">
            <RiDeleteBin6Line />
          </button>
        )}
        <p className="px-6 py-1 shadow-inner-sm dark:shadow-inner-d-sm rounded-md text-xl font-bold dark:text-richblack-25">
          {item.quantity}
        </p>
        <button onClick={addQuantity} className="px-1 py-1 shadow-inner-sm dark:shadow-inner-d-sm rounded-full text-3xl font-bold dark:text-richblack-25">
          <BiPlus />
        </button>
      </div>
      <div className="w-full flex justify-center items-center dark:text-richblack-25">
        <p className="text-lg font-medium">{formattedPrice}</p>
      </div>
    </div>
  );
};

export default CartItem;
