import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../common/Pagination';
import ProductCard from './ProductCard';

const ProductSection = ({relatedProduct, classN=''}) => {
  let {currentPageProducts,relatedProducts} = useSelector((state) => state.products);
  const theme = useSelector((state) => state.theme);
  if(relatedProduct) {
    currentPageProducts = relatedProducts;
  }
  console.log("in porduct section", currentPageProducts)
  return (
    <div className={`${classN}`}>
      {relatedProduct && <p className={`${theme?'text-black':'text-black-25'} text-xl text-center font-semibold mb-8`}>Related Products</p>}
      {/* {!relatedProduct && <Pagination />} */}
      <div className='max-w-[1040px] w-[90%] grid gap-x-4 gap-y-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-auto relative '>
      {
        currentPageProducts.map((product, index) => (
          <div key={product.id} className='flex justify-center items-center'>
            <ProductCard product={product} index={index}/>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default ProductSection
