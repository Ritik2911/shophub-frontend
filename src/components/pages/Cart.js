import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../Products/CartItem";

const Cart = () => {
  const theme = useSelector((state) => state.theme);
  const { cartItems, totalCartValue } = useSelector((state) => state.cart);
  console.log("cart value", totalCartValue);
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(totalCartValue);
  return (
    <div
      className={`flex flex-col p-4 rounded-3xl w-[95%] mx-auto gap-4 ${
        theme ? "dotted-light" : "dotted-dark"
      }`}
    >
      <p className="text-lg font-bold text-center dark:text-richblack-5">
        Shopping Cart New
      </p>

      {cartItems.length > 0 ? (
        <div className="flex flex-col gap-4">
          {cartItems.map((item, index) => (
            <div key={index}>
              <CartItem item={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 text-3xl font-bold text-black dark:text-white mx-auto">
          Your Cart is Empty
        </div>
      )}

      <p className="text-xl font-bold text-center dark:text-richblack-25">
        Total: <span className="text-xl font-semibold">{formattedPrice}</span>
      </p>
      <p className="text-xl font-bold text-center dark:text-richblack-25">
        Shipping: <span className="text-xl font-semibold">Free Shipping</span>
      </p>
      <button disabled={cartItems.length <= 0} className="bg-black text-orange-600 px-6 py-2 font-semibold rounded-lg w-fit mx-auto">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
