import ContactForm from '@/components/contactform'
import Hero from '@/components/hero'
import TeamSection from '@/components/ourteam'
import WorkingHours from '@/components/workingtime'
import React from 'react'

const contact = () => {
  return (
    <>
    <Hero heading="contact US" url="/contact_header.png" content="Get in touch with us today for appointments, inquiries, or personalized dental care assistance!"/>
    <ContactForm/>
    <TeamSection/>
    <WorkingHours/>
    </>
  )
}

export default contact
