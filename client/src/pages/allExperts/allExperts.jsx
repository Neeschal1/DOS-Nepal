import React from 'react'
import Navbar from '../../constants/navbar'
import OurExperts from './ourExperts'
import Footer from '../../constants/footer'

const AllExperts = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#F2F1FF] gap-20">
      <div className='flex p-4'>
        <Navbar textColor="black" bordercolor="white/30" />
      </div>
      <OurExperts />
      <Footer />
    </div>
  )
}

export default AllExperts