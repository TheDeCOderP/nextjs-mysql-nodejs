import DentalCard from '@/components/banner'
import TestimonialCarousel from '@/components/carousel'
import DentalFAQ from '@/components/faqsection'
import Hero from '@/components/hero'
import WorkingHours from '@/components/workingtime'
import React from 'react'

const Testimonials = () => {
  return (
    <>
      <Hero heading="Testamonials" content="Discover why our patients choose us for their Dental care." url="/testamonial_header.png"/>
      <TestimonialCarousel/>
      <DentalFAQ/>
      <DentalCard/>
      <WorkingHours/>
    
     
    </>
  )
}

export default Testimonials
