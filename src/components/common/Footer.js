import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <footer className='w-full py-4'>
      <p className={`text-center text-sm font-semibold ${theme?'text-black':'text-richblack-5'}`}>&copy; Ritik2911 2023. All rights reserved.</p>
    </footer>
  )
}

export default Footer
