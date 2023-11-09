import React from 'react'
import ProductSection from '../Products/ProductSection'

const Blog = () => {
  return (
    <div className='border-y pb-12 min-h-[calc(100vh-20rem)]'>
      <ProductSection relatedProduct={false} classN='mt-16'/>
    </div>
  )
}

export default Blog
