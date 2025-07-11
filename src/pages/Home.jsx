import React from 'react'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import ProcessSection from '../sections/ProcessSection'
import Pricing from '../sections/Pricing'
import BookACall from '../sections/BookACall'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'
import CompaniesStrip from '../components/CompaniesStrip'
import { Fa0 } from 'react-icons/fa6'
import Faq from '../sections/Faq'
import ProcessSection2 from '../sections/ProcessSection2'
import ProcessSection3 from '../sections/ProcessSection3'

const Home = () => {
  return (
    <div className='pt-14 md:pt-0'>
        <Hero/>
        <CompaniesStrip />
<div id='services'>
          <Services/>

</div>
        <ProcessSection/>
        
        <ProcessSection2/>
        <ProcessSection3/>
        <Pricing/>
        <BookACall/>
        <Testimonials/>
        <Faq/>
        <Contact/>
    </div>
  )
}

export default Home