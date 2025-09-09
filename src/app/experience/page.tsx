import { CallToActionSection } from '@/components/features/AboutMe/CallToActionSection'
import { HeroSection } from '@/components/features/Experience/HeroSection'
import {TestimonialsSection} from '@/components/features/Experience/TestimonialSection'
import { testimonialsData } from '@/constants/experiece'
import React from 'react'

function ExperiencePage() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection testimonials={testimonialsData} />
      <CallToActionSection />
    </>
  )
}

export default ExperiencePage