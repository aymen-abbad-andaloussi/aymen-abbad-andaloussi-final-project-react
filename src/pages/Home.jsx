import React from 'react'
import Nav from '../Components/Nav'
import CarouselleHome from '../Components/CarouselleHome'
import Items from '../Components/Items'
import Products from '../Components/Products'
import Catalogue from '../Components/Catalogue'
import Blog from '../Components/Blog'

export default function Home() {
  return (
    <>
        <Nav />
        <CarouselleHome />
        <Items />
        <Products />
        <Catalogue />
        <Blog />
    </>
  )
}
