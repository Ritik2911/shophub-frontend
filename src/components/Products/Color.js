import React from 'react'

const Color = ({color}) => {
  return (
    <div>
      <button className='w-10 h-10 rounded-full p-1 border border-slate-400 flex justify-center items-center'>
        <p className='bg-white rounded-full w-7 h-7 p-1 flex justify-center items-center'>
        <p className={`${color} w-4 h-4 rounded-full`}></p>
        </p>
      </button>
    </div>
  )
}

export default Color
