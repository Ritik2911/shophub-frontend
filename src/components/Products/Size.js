import React from 'react'

const Size = ({size}) => {
  return (
    <button className='flex justify-center items-center px-8 py-2 bg-pink-600 shadow-inner-sm rounded-md text-black'>
      <p className='font-bold'>{size}</p>
    </button>
  )
}

export default Size
