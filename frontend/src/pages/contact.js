import ContactForm from '@/components/contactform.js'
import Heroheader from '@/components/hero_header.js'
import TeamSection from '@/components/ourteam.js'
import WorkingHours from '@/components/workingtime.js'
import React from 'react'

const ContactPage = () => {
  return (
    <>
    <Heroheader heading="contact US" url="/contact_header.png" content="Get in touch with us today for appointments, inquiries, or personalized dental care assistance!"/>
    <ContactForm/>
    <TeamSection/>
    <WorkingHours/>
    </>
  )
}

export default ContactPage;
