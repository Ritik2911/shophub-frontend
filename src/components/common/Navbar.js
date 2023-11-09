import React, { useState } from "react";
import { navData } from "../../data/navdata";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingBag } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiCircleRemove } from "react-icons/ci";

const Navbar = () => {
  const theme = useSelector((state) => state.theme);
  const [isScaled, setIsScaled] = useState(false);
  const [hamIcon, setHamIcon] = useState(false);
  const handleCartClick = () => {
    setIsScaled(!isScaled);

    // After a brief delay (0.5 seconds), reset the scaling back to normal
    setTimeout(() => {
      setIsScaled(false);
    }, 400);
  };

  const handleHamburgerClick = () => {
    setHamIcon(!hamIcon);
  };

  return (
    <header>
      <nav className="flex justify-between text-xl font-semibold items-center px-4 py-5">
        <NavLink
          to={"/"}
          className="flex gap-4 justify-center items-center group"
        >
          <div
            class={`w-[40px] h-[40px] rounded-full shadow-sm shadow-gray-700 flex items-center justify-center ${
              theme ? "bg-white" : "bg-black"
            }`}
          >
            <div class="grid grid-cols-2 grid-rows-2 gap-1">
              <div class="w-[4px] h-[4px] bg-gray-700 "></div>
              <div
                class={`w-[4px] h-[4px] ${theme ? "bg-black" : "bg-white"}`}
              ></div>
              <div
                class={`w-[4px] h-[4px] ${theme ? "bg-black" : "bg-white"}`}
              ></div>
              <div
                class={`w-[4px] h-[4px] ${theme ? "bg-black" : "bg-white"}`}
              ></div>
            </div>
          </div>
          <p
            className={`${
              theme
                ? "hover:text-orange-700 text-black"
                : "hover:text-blue-300 text-white"
            } transition duration-200`}
          >
            shophub
          </p>
        </NavLink>

        <GiHamburgerMenu
          className="flex md:hidden dark:text-richblack-5"
          onClick={handleHamburgerClick}
        />
        {hamIcon && (
          <div className="fixed py-4 top-0 right-0 w-[50%] bg-pink-600 z-30 dark:bg-richblue-700 flex justify-center items-center">
            <ul
              className={` flex flex-col gap-4 ${
                theme ? " text-black" : "text-black-25"
              }`}
            >
              {hamIcon && <li className={`${
                  theme
                    ? "hover:text-orange-700 text-black"
                    : "hover:text-blue-300 text-white"
                } transition duration-200 text-2xl`} onClick={handleHamburgerClick}>
                <CiCircleRemove />
              </li>}
              {navData.map((navEle, index) => (
                <li onClick={handleHamburgerClick}
                  key={index}
                  className={`${
                    theme
                      ? "hover:text-orange-700 text-black"
                      : "hover:text-blue-300 text-white"
                  } transition duration-200`}
                >
                  <NavLink
                    to={navEle.path}
                    className={({ isActive }) =>
                      isActive
                        ? theme
                          ? "text-orange-700"
                          : "text-blue-300"
                        : ""
                    }
                  >
                    {navEle.name}
                  </NavLink>
                </li>
              ))}

              <li onClick={handleHamburgerClick}
                className={`${
                  theme
                    ? "hover:text-orange-700 text-black"
                    : "hover:text-blue-300 text-white"
                } transition duration-200`}
              >
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive
                      ? theme
                        ? "text-orange-700"
                        : "text-blue-300"
                      : ""
                  }
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        {
          hamIcon && <div onClick={handleHamburgerClick} className="fixed top-0 right-0 left-0 bottom-0 w-[100vw] h-[100vh] z-20 bg-richblack-300">
          </div>
        }

        <div className="hidden md:flex">
          <ul
            className={`hidden md:flex gap-4 ${
              theme ? " text-black" : "text-black-25"
            }`}
          >
            {navData.map((navEle, index) => (
              <li
                key={index}
                className={`${
                  theme
                    ? "hover:text-orange-700 text-black"
                    : "hover:text-blue-300 text-white"
                } transition duration-200`}
              >
                <NavLink
                  to={navEle.path}
                  className={({ isActive }) =>
                    isActive
                      ? theme
                        ? "text-orange-700"
                        : "text-blue-300"
                      : ""
                  }
                >
                  {navEle.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <NavLink to={"cart"} className="hidden md:flex">
          <div
            onClick={handleCartClick}
            class={`w-[40px] h-[40px] group rounded-full shadow-sm shadow-gray-700 flex items-center justify-center transition duration-200 ${
              theme ? "bg-white " : "bg-black "
            } ${isScaled ? "scale-90" : ""}`}
          >
            <FaShoppingBag
              className={`${
                theme
                  ? "text-gray-800 group-hover:text-orange-700"
                  : "text-gray-100 group-hover:text-blue-300"
              }`}
            />
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
