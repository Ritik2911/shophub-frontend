import React from 'react'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/slices/productSlice';

const Pagination = () => {
    const dispatch = useDispatch();
    const {currentPage,totalPage} = useSelector((state) => state.products);
  return (
    <div className='flex gap-4 mx-auto'>
        {
            currentPage > 0 && 
      <MdArrowBackIosNew onClick={() => dispatch(setPage(-1))} />
        }
        {
            currentPage < totalPage-1 && 
      <MdArrowForwardIos onClick={() => dispatch(setPage(1))} />
        }
      <p>{currentPage +1}</p>
    </div>
  )
}

export default Pagination
