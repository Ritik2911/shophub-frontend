import React from "react";
import {BsStar, BsStarFill, BsStarHalf} from 'react-icons/bs'
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import Color from "../Products/Color";
import ProductSection from "../Products/ProductSection";
import Size from "../Products/Size";
import HeroSection1 from '../common/HeroSection1'
import { addToCart } from "../../redux/slices/cartSlice";
import toast from "react-hot-toast";

const colors = [
    {color:'bg-pink-600'},
    {color:'bg-red-600'},
    {color:'bg-black'},
    {color:'bg-gray-500'},
];

const sizes = [
    36,38,40,42,44
];


const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.products);
  const theme = useSelector((state) => state.theme);

  const addQuantity = () => {
    dispatch(addToCart(productDetail));
    toast.success("Added to Cart");
  }

  return (
    <div className="flex flex-col gap-8">
      <HeroSection1 />
      <div className={`flex flex-col md:flex-row max-w-[1040px] w-[98%] mx-auto rounded-3xl dotted-white p-12 -translate-y-[14rem] ${theme?"dotted-light":"dotted-dark"}`}>
        <div className="md:w-[35%] flex flex-col justify-between gap-8">
          <div>
            <p className={`text-3xl font-semibold ${theme?'text-blue':'text-richblack-25'}`}>{productDetail.title}</p>
          </div>
          <div>
            <p className={`text-md font-semibold ${theme?'text-gray-500':'text-orange-300'}`}>{productDetail.description}</p>
          </div>
          <div className="flex flex-row md:flex-col gap-4 mx-auto pb-4">
            <p className="w-fit px-6 font-bold py-6 bg-white text-blue-300 rounded-md">color 1</p>
            <p className="w-fit px-6 font-bold py-6 bg-white text-orange-600 rounded-md">color 2</p>
            <p className="w-fit px-6 font-bold py-6 bg-white text-gray-700 rounded-md">color 3</p>
          </div>
        </div>
        <div className="md:w-[65%] flex flex-col gap-8 p-4">
          <div className={`"w-[250px] mx-auto rounded-full p-4 border ${theme?"border-pink-300 shadow-inner-md bg-pink-600":"bg-richblue-500 shadow-inner-d-md border-blue-300"}`}>
            <img
              src={productDetail.image}
              alt="product"
              width={"250px"}
              className="rounded-full aspect-square object-contain"
            />
          </div>

          <div className={`${theme?"text-black":"text-richblack-25"}`}>
            <p className='font-semibold'>
              Reviews:
            </p>
            <p className="flex gap-x-4 items-center">
                <ReactStars
                  count={5}
                  size={50}
                  value={4.5}
                  edit={false}
                  isHalf={true}
                  activeColor="#FA8907"
                  emptyIcon={<BsStar />}
                  halfIcon={<BsStarHalf />}
                  fullIcon={<BsStarFill />}
                />
                <p>4.5</p>
              </p>
          </div>

          <div className={`${theme?"text-black":"text-richblack-25"}`}>
            <p className='font-semibold'>Select Color</p>
            <div className="flex gap-2">
                {
                    colors.map((color, index) => (<div key={index}>
                        <Color color={color.color}/>
                    </div>))
                }
            </div>
          </div>

          <div className={`${theme?"text-black":"text-richblack-25"}`}>
            <p className='font-semibold'>Select size:</p>
            <div className="flex gap-4 flex-wrap">
                {
                    sizes.map((size, index) => (<div key={index}>
                        <Size size={size}/>
                    </div>))
                }
            </div>
          </div>

          <div className="w-fit mx-auto">
            <button onClick={addQuantity} className="px-6 py-2 text-orange-500 bg-black rounded-md mx-auto font-semibold">Add to Cart</button>
          </div>
        </div>
      </div>

      <ProductSection relatedProduct={true} classN='-translate-y-[25%]' />
    </div>
  );
};

export default ProductDetails;
