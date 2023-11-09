import React from 'react'
import HeroSection1 from '../common/HeroSection1'
import ProductSection from '../Products/ProductSection'

const Home = () => {
  return (
    <div className='flex flex-col gap-8'>
      <HeroSection1 />
      <ProductSection relatedProduct={false} classN='-translate-y-[13rem]' />
      <ProductSection relatedProduct={true} classN='-translate-y-[10rem]' />
    </div>
  )
}

export default Home
