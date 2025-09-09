import { CallToActionSection } from '@/components/ui/CallToActionSection'
import { HeroSection } from '@/components/features/Experience/HeroSection'
import {TestimonialsSection} from '@/components/features/Experience/TestimonialSection'
import { experiencesData, testimonialsData } from '@/constants/experiece'
import React from 'react'
import { ExperienceTimelineSection } from '@/components/features/Experience/ExperienceTimelineSection'

function ExperiencePage() {
  return (
    <>
      <HeroSection />
      <ExperienceTimelineSection experiences={experiencesData} />
      <TestimonialsSection testimonials={testimonialsData} />
      <CallToActionSection />
    </>
  )
}

export default ExperiencePage