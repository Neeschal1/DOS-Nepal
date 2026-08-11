import React from 'react'
import SuccessStoriesHero from './hero'
import Resilience from './resilience'
import Stories from './successStories'
import Footer from '../../constants/footer'

const SuccessStories = () => {
  return (
    <div className="flex flex-1 w-full flex-col bg-[#F2F1FF]">
      <SuccessStoriesHero />
      <Resilience />
      <Stories />
      <Footer />
    </div>
  )
}

export default SuccessStories