import Image from "next/image";
import React from 'react'
import Footer from '@/components/component/footer'
import HeaderSection from '@/components/component/headersection'
import HeadNavBar from '@/components/component/headnavbar'
import Contact from '@/components/component/contact'

const ContactForm = () => {
  return (
    <>
    <HeadNavBar/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default ContactForm