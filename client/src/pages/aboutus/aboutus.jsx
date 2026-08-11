import React from 'react'
import AboutUsHero from './aboutUsHero'
import Statistics from './statistics'
import Footer from '../../constants/footer'
import OurPeople from '../landing/ourPeople'
import OurMission from './ourMission'
import OurVision from './ourVision'
import HowWeDo from './howWeDo'

const Aboutus = () => {
  return (
    <div className="flex flex-1 w-full flex-col bg-[#F2F1FF]">
      <AboutUsHero />
      <Statistics />
      <OurMission />
      <OurVision />
      <HowWeDo />
      <OurPeople />
      <Footer />
    </div>
  )
}

export default Aboutus