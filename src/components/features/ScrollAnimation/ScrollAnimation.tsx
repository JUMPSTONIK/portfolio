'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import styles from './ScrollAnimation.module.sass'
import { AnimatedSection } from '../AnimatedSection'
import { IntroSection } from '../IntroSection'
import { animatedSections } from '@/constants/animatedSections'

gsap.registerPlugin(ScrollTrigger)

export const ScrollAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)



  return (
    <div ref={containerRef} className={styles['scroll-container']}>
      <IntroSection />
      {animatedSections.map((section, idx) => (
        <AnimatedSection
          key={section.id}
          title={section.title}
          elements={section.elements}
          isOdd={idx % 2 === 0}
        />
      ))}
      {/* <div className={styles['scroll-container__spacer']} /> */}
    </div>
  )
}

