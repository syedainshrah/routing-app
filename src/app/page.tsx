import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Category from './Components/Category'
import Product from './Components/Product'
import ProductCard from './Components/ProductCard'
import Blog from './Components/Blog'
import Instagram from './Components/Instagram'



export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <Product />
     <ProductCard/>
      <Blog />
      <Instagram />
    </div>
  )
}
