import React from 'react'
import Hero from '../hero/Hero'
import ProductCard from '../../../components/productCard/ProductCard'
import ProductDataLoad from '../../product/ProductDataLoad'
import Subscribe from '../subscribe/Subscribe'
import Offer from '../offer/Offer'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ProductDataLoad></ProductDataLoad>
      <Offer></Offer>
      <Subscribe></Subscribe>
    </div>
  )
}

export default Home