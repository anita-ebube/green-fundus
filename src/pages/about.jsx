import React from 'react'
import { Values } from '../components/Values/page'
import { Services } from '../components/Services/page'
import { Navbar } from '../components/Navbar/page'
import { Footer } from '../components/Footer/page'


export const About = () => {
  return (
    <div>
      <Navbar />
      <Values />
      <Services />
      <Footer />
    </div>
  )
}
