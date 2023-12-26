import React from 'react'
import Hero from '../hero/Hero';
import Offer from '../offer/Offer';
import Brand from '../brand/Brand';
import Blogs from '../../blogs/Blogs';
import Subscribe from '../subscribe/Subscribe';
import TopProduct from '../../topProduct/TopProduct';
import Testimonial from '../testimonial/Testimonial';
import ProductDataLoad from '../../product/ProductDataLoad';
import SpecialProduct from '../specialProduct/SpecialProduct';
import Categories from '../../../components/categories/Categories';

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <Categories></Categories>
        <ProductDataLoad></ProductDataLoad>
        <Offer></Offer>
        <TopProduct></TopProduct>
        <SpecialProduct></SpecialProduct>
        <Testimonial></Testimonial>
        <Blogs></Blogs>
        <Brand></Brand>
        <Subscribe></Subscribe>
    </div>
  )
}

export default Home