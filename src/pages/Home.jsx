import React from 'react'
import Nav from '../Components/Nav'
import CarouselleHome from '../Components/CarouselleHome'
import Items from '../Components/Items'
import Products from '../Components/Products'
import Catalogue from '../Components/Catalogue'
import Follow from '../Components/Follow'
import Footer from '../Components/Footer'
import ComBlog from '../Components/ComBlog'

export default function Home() {
  return (
    <>
        <Nav />
        <CarouselleHome />
        <Items />
        <Products />
        <Catalogue />
        <ComBlog />
        <Follow />
        <Footer />
    </>
  )
}
