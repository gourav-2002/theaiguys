import Image from "next/image";
import ServiceProvide from '@/components/component/serviceprovide'
import Subscribe from '@/components/component/subscribe'
import Bloginfo from '@/components/component/bloginfo'
import DescribedSection from '@/components/component/describedsection'
import Footer from '@/components/component/footer'
import HeaderSection from '@/components/component/headersection'
import HeadNavBar from '@/components/component/headnavbar'

export default function Home() {
  return (
    <>
    <HeadNavBar/>
    <HeaderSection/>
    <DescribedSection/>
    <ServiceProvide/>
    <Bloginfo/>
    <Subscribe/>  
    <Footer/> 
    </>
    
  );
}
