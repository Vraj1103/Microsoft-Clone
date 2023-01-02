import React from 'react'
import Navbar from './Navbar'
import Promo from './Promo'
import Slider from './Slider'

export default function App() {
    return (
        <div className="container mx-auto">
      <Navbar/>
      <Slider/>
      <Promo/>
      </div>
    )
  }