import ContactForm from '@/components/contactform'
<<<<<<< HEAD
import Heroheader from '@/components/hero_header'
=======
import Hero from '@/components/hero'
>>>>>>> 1babbaf397ecd6178406a5266289f438a86705a1
import TeamSection from '@/components/ourteam'
import WorkingHours from '@/components/workingtime'
import React from 'react'

const contact = () => {
  return (
    <>
<<<<<<< HEAD
    <Heroheader heading="contact US" url="/contact_header.png" content="Get in touch with us today for appointments, inquiries, or personalized dental care assistance!"/>
=======
    <Hero heading="contact US" url="/contact_header.png" content="Get in touch with us today for appointments, inquiries, or personalized dental care assistance!"/>
>>>>>>> 1babbaf397ecd6178406a5266289f438a86705a1
    <ContactForm/>
    <TeamSection/>
    <WorkingHours/>
    </>
  )
}

export default contact
