import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginAPI = 'https://shophub-sy21.onrender.com/api/auth/login'

const Login = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme);

  const [userData, setUserData] = useState({email:"", password:""});

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setUserData(prevFormData => {
      return {
        ...prevFormData,
        [name]:value
      }
    })

    console.log(userData)
  }

  async function loginRequest() {
    const toastId = toast.loading("Loading...");
    try {
      const response = await axios.post(LoginAPI,userData);
      setUserData({email:"", password:""});
      toast.success("Logged IN");
      navigate('/');
      console.log(response);
    } catch (error) {
      toast.error("Login Failed");
      console.log("Error in Post");
    }
    toast.dismiss(toastId);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    loginRequest();
  }

  return (
    <div className="mt-8">
      <form className={`flex flex-col gap-4 w-fit mx-auto py-8 px-12 rounded-3xl ${
          theme ? "dotted-light" : "dotted-dark"
        }`} onSubmit={submitHandler}>
        <h2 className="text-2xl font-bold text-center dark:text-white text-black">Login</h2>
        <label className="font-semibold text-center dark:text-richblack-25 text-black" htmlFor="email">
          Enter Email
        </label>
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-richblack-900 dark:border-richblack-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          name="email"
          id="email"
          value={userData.email}
          onChange={handleOnChange}
          placeholder="abc@pyx.com"
        />
        <label className="font-semibold text-center dark:text-richblack-25 text-black" htmlFor="password">
          Password
        </label>
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-richblack-900 dark:border-richblack-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          name="password"
          value={userData.password}
          onChange={handleOnChange}
          id="password"
        />
        <button type="submit" className="bg-black text-orange-600 px-6 py-2 font-semibold rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
