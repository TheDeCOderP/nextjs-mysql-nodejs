import React from 'react'
import TreatmentSection from '@/components/TreatmentSection'
import Hero from '@/components/hero'
import ScrollImage from '@/components/ImageScroll'
import WorkingHours from '@/components/workingtime'
import PricingSection from '@/components/pricingSection'
const Treatment = () => {
  return (
    <>
    <Hero heading="Treatments" content="Experience top-notch dental care tailored to your needs. From preventive care to cosmetic enhancements,
      we ensure your smile is as healthy as it is radiant." url="./hero_header1.png"/>
    <TreatmentSection/>
    <ScrollImage/>
    <WorkingHours/>
    <PricingSection/>
    </>
  )
}
export default Treatment
