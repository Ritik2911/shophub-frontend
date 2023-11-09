import React, {useState} from "react";
import {AiFillInfoCircle,AiFillDelete} from 'react-icons/ai';
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const LoginAPI = 'https://shophub-sy21.onrender.com/api/auth/changepassword';

const Profile = () => {
  const theme = useSelector((state) => state.theme);
  const [userData, setUserData] = useState({email:"", oldPassword:"",newPassword:"",confirmPassword:""});

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

  async function signupRequest() {
    const toastId = toast.loading("Loading...");
    try {
      const response = await axios.post(LoginAPI,userData);
      setUserData({email:"", oldPassword:"",newPassword:"",confirmPassword:""})
      console.log(response);
    } catch (error) {
      console.log("Error in Post");
    }
    toast.dismiss(toastId);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    signupRequest();
  }
  return (
    <div className={`py-8 w-[95%] mx-auto rounded-3xl ${theme?"dotted-light":"dotted-dark"}`} >
      <div className="flex md:flex-row flex-col gap-4 ">
        <div className="md:w-[50%]">
        <form  onSubmit={submitHandler} className="flex flex-col w-fit gap-4 mx-auto p-8  rounded-3xl">
          <h2 className="text-xl font-bold text-center dark:text-white text-black">Update Password</h2>
          <label className="font-semibold text-center dark:text-richblack-25 text-black" htmlFor="email">
            Email
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-richblack-900 dark:border-richblack-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light opacity-90"
            name="email"
            id="email"
            onChange={handleOnChange}
            placeholder="abc@pyx.com"
            value={userData.email}
          />
          <label className="font-semibold text-center dark:text-richblack-25 text-black" htmlFor="curPassword">
            Current Password
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-richblack-900 dark:border-richblack-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            name="oldPassword"
            id="oldPassword"
            onChange={handleOnChange}
            value={userData.oldPassword}
          />
          <label className="font-semibold text-center dark:text-richblack-25 text-black" htmlFor="newPassword">
            New Password
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-richblack-900 dark:border-richblack-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            name="newPassword"
            id="newPassword"
            onChange={handleOnChange}
            value={userData.newPassword}
          />
          <label className="font-semibold text-center dark:text-richblack-25 text-black" htmlFor="cnfPassword">
            Confirm Password
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-richblack-900 dark:border-richblack-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleOnChange}
            value={userData.confirmPassword}
          />
          <button type="submit" className="bg-black text-orange-600 px-6 py-2 font-semibold rounded-lg">
            Update Password
          </button>
        </form></div>
        <div className="md:w-[50%]">
          <p className="font-semibold text-center py-4 text-xl dark:text-white text-black">Order Details</p>
          <table className="w-fit mx-auto dark:text-richblack-25 text-black border-collapse border-2 border-orange-500 dark:border-blue-300">
            <thead>
              <tr>
                <th className="border border-orange-500 p-[8px] text-left dark:border-blue-300">Order ID</th>
                <th className="border border-orange-500 p-[8px] text-left dark:border-blue-300">Timestamp</th>
                <th className="border border-orange-500 p-[8px] text-left dark:border-blue-300">Total</th>
                <th className="border border-orange-500 p-[8px] text-left dark:border-blue-300">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-orange-500 p-[8px] text-left dark:border-blue-300">12345</td>
                <td className="border border-orange-500 p-[8px] text-left dark:border-blue-300">2023-11-08 10:30:00</td>
                <td className="border border-orange-500 p-[8px] text-left dark:border-blue-300">$100.00</td>
                <td className="flex gap-2 justify-center items-center border border-orange-500 p-[8px] text-left dark:border-blue-300">
                  <button className="text-orange-600 text-2xl"><AiFillInfoCircle /></button>
                  <button  className="text-red-600 text-2xl"><AiFillDelete /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
