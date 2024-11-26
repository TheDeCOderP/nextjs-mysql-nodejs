import React from 'react'
import TreatmentSection from '@/components/TreatmentSection'
import Hero from '@/components/hero'
import ScrollImage from '@/components/ImageScroll'
import WorkingHours from '@/components/workingtime'
import PricingSection from '@/components/pricingSection'
const Treatment = () => {
  return (
    <>
    <Hero heading="Treatments" content="Experience Top-notch Dental care tailored to your needs. From preventive care to Cosmetic Enhancements,
      we ensure your smile is as healthy as it is radiant." url="./hero_header1.png"/>
    <TreatmentSection/>
    <ScrollImage/>
    <WorkingHours/>
    <PricingSection/>
    </>
  )
}
export default Treatment
