import Image from "next/image";
import Login from '@/components/component/login'
import React from 'react'
import Footer from '@/components/component/footer'
import HeaderSection from '@/components/component/headersection'
import HeadNavBar from '@/components/component/headnavbar'

const login = () => {
  return (
    <>
    <HeadNavBar/>
    <HeaderSection/>
    <Login/>
    <Footer/>
    </>
    
  )
}
export default login