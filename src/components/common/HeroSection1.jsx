import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setByAESC, setByDESC, setByLatest } from "../../redux/slices/productSlice";

const SortOptions = [
  {
    id: "default",
    name: "Default Sorting",
  },
  {
    id: "latest",
    name: "Latest",
  },
  {
    id: "aesc",
    name: "Ascending",
  },
  {
    id: "desc",
    name: "Descending",
  },
];

const HeroSection1 = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState('default');
  const isShopRoute = location.pathname.includes("shop");
  const theme = useSelector((state) => state.theme);
  const sortChangeHandler = (e) => {
    setSortBy(e.target.value);
    console.log(sortBy);
    if(e.target.value === 'aesc'){
      dispatch(setByAESC())
    }else if(e.target.value === 'desc'){
      dispatch(setByDESC())
    }else if(e.target.value === 'latest'){
      dispatch(setByLatest())
    }
  }
  return (
    <div
      className={`relative w-[98%] rounded-3xl mx-auto min-h-[300px] pt-11 ${
        theme ? "bg-orange-600" : "bg-blue-500"
      }`}
    >
      {/* semi circles */}
      <div className="absolute top-0 w-[400px] h-[200px] left-[50%] -translate-x-[50%]">
        <div
          className={`absolute top-0 left-[50%] -translate-x-[50%] h-[100%] w-[100%] rounded-b-full border-b ${
            theme ? "border-ripple-border-white" : "border-blue-900"
          }`}
        ></div>
        <div
          className={`absolute top-0 left-[50%] -translate-x-[50%] h-[75%] w-[75%] rounded-b-full border-b ${
            theme ? "border-ripple-border-white" : "border-blue-900"
          }`}
        ></div>
        <div
          className={`absolute top-0 left-[50%] -translate-x-[50%] h-[50%] w-[50%] rounded-b-full border-b ${
            theme ? "border-ripple-border-white" : "border-blue-900"
          }`}
        ></div>
        <div
          className={`absolute blur-sm top-0 left-[50%] -translate-x-[50%] h-[25%] w-[25%] rounded-b-full border ${
            theme
              ? "border-ripple-border-white bg-small-ripple"
              : "border-blue-900 bg-blue-500"
          }`}
        ></div>
      </div>

      <div className="max-w-[1040px] mx-auto flex justify-between px-4">
        <div className="hidden md:flex">
          <span className="text-white">home</span> /{" "}
          {isShopRoute ? "Product Details" : "Shop"}
        </div>
        <div
          className={`text-2xl font-semibold z-10 ${
            theme ? "text-richblack-900" : "text-white"
          }`}
        >
          {isShopRoute ? "Product Details" : "Shop"}
        </div>
        <div>
          {isShopRoute ? (
            <div className="p-4 rounded-full">
            </div>
          ) : (
            <div className="flex flex-col gap-2 justify-center items-center">
              <p className="text-md hidden md:flex">
                Showing 1-4 of {} results
              </p>

              <div className="z-10">
                <label htmlFor="sortBy"></label>
                <select
                onChange={sortChangeHandler}
                  className="bg-[#F1D6C4] rounded-lg text-md"
                  value={sortBy}
                  // onChange={handleSortChange}
                  name="sortBy"
                  id="sortBy"
                >
                  {SortOptions.map((sortOption) => (
                    <option key={sortOption.id} value={sortOption.id}>
                      {sortOption.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
