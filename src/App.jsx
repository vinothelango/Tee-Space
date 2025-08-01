import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Middle from './components/Middle'
import Cards from './components/Cards'
import Glosory from './components/Glosory'
import Products from './components/Products'
import Resources from './components/Resources'
import Testmonial from './components/Testmonial'
import Vacation from './components/Vacation'
import Social from './components/Social'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Middle/>
    <Cards/>
    <Glosory/>
    <Products/>
    <Resources/>
    <Testmonial/>
    <Vacation/>
    <Social/>
    <Footer/>
    </div>
  )
}

export default App