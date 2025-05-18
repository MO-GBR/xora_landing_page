import React from 'react'
import Header from './Sections/Header'
import Hero from './Sections/Hero'
import Features from './Sections/Features'
import Pricing from './Sections/Pricing'
import Faq from './Sections/Faq'
import Testimonial from './Sections/Testimonial'
import Download from './Sections/Download'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonial />
      <Download />
      <Footer />
    </div>
  )
}

export default App