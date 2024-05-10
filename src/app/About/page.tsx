import Image from "next/image";
import React from 'react'
import ServiceProvide from '@/components/component/serviceprovide'
import DescribedSection from '@/components/component/describedsection'
import Footer from '@/components/component/footer'
import Bloginfo from '@/components/component/bloginfo'
import HeaderSection from '@/components/component/headersection'
import HeadNavBar from '@/components/component/headnavbar'

const About = () => {
  return (
    <>
    <HeadNavBar/>
    <HeaderSection/>
    <DescribedSection/>
    <ServiceProvide/>
    <Bloginfo/>
    <Footer/>
    </>   
  )
}

export default About