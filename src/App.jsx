import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Middle from './components/Middle'
import Cards from './components/Cards'
import Glosory from './components/Glosory'
import Products from './components/Products'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Middle/>
    <Cards/>
    <Glosory/>
    <Products/>
    </div>
  )
}

export default App