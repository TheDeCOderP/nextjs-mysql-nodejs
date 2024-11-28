import React from 'react'
import TreatmentSection from '@/components/TreatmentSection'
import Heroheader from '@/components/hero_header'
import ScrollImage from '@/components/ImageSlide'
import WorkingHours from '@/components/workingtime'
import PricingSection from '@/components/pricingSection'
const Treatment = () => {
  return (
    <>
    <Heroheader heading="Treatments" content="Experience Top-notch Dental care tailored to your needs. From preventive care to Cosmetic Enhancements,
      we ensure your smile is as healthy as it is radiant." url="\treatment_header.jpg"/>
    <TreatmentSection/>
    <ScrollImage/>
    <WorkingHours/>
    <PricingSection/>
    </>
  )
}
export default Treatment
