import React from 'react'
import Hero from '../hero/Hero'
import ProductCard from '../../../components/productCard/ProductCard'
import ProductDataLoad from '../../product/ProductDataLoad'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ProductDataLoad></ProductDataLoad>
    </div>
  )
}

export default Home