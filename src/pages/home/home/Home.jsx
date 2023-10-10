import React from 'react'
import Hero from '../hero/Hero'
import ProductCard from '../../../components/productCard/ProductCard'
import ProductDataLoad from '../../product/ProductDataLoad'
import Subscribe from '../subscribe/Subscribe'
import Offer from '../offer/Offer'
import Categories from '../../../components/categories/Categories'
import TopProduct from '../../topProduct/TopProduct'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <ProductDataLoad></ProductDataLoad>
      <Offer></Offer>
      <TopProduct></TopProduct>
      <Subscribe></Subscribe>
    </div>
  )
}

export default Home