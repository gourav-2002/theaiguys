import Image from "next/image";
import React from 'react'
import ServiceProvide from '@/components/component/serviceprovide'
import DescribedSection from '@/components/component/describedsection'
import Footer from '@/components/component/footer'
import HeaderSection from '@/components/component/headersection'
import HeadNavBar from '@/components/component/headnavbar'
import Pricing from '@/components/component/pricing'

const Service = () => {
  return (
    <>
    <HeadNavBar/>
    <HeaderSection/>
    <DescribedSection/>
    <ServiceProvide/>
    <Pricing/>
    <Footer/>
    </>
  )
}

export default Service