import React from 'react'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import ProcessSection from '../sections/ProcessSection'
import Pricing from '../sections/Pricing'
import BookACall from '../sections/BookACall'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'
import CompaniesStrip from '../components/CompaniesStrip'

const Home = () => {
  return (
    <div>
        <Hero/>
        <CompaniesStrip />

        <Services/>
        {/* <ProcessSection/> */}
        <Pricing/>
        {/* <BookACall/> */}
        <Testimonials/>
        <Contact/>
    </div>
  )
}

export default Home