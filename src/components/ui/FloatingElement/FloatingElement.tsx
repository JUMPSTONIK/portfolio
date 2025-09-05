import React, { forwardRef, useRef, useEffect, useImperativeHandle } from 'react'
import { gsap } from 'gsap'
import styles from './FloatingElement.module.sass'
import { Text } from '@chakra-ui/react'

interface FloatingElementRef {
  element: HTMLDivElement | null
  stopFloating: () => void
  startFloating: () => void
}

export const FloatingElement = forwardRef<FloatingElementRef, { children: React.ReactNode, name?: string; }>(
  ({ children, name }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)
    const floatingTween = useRef<gsap.core.Tween | null>(null)
    
    useImperativeHandle(ref, () => ({
      element: containerRef.current,
      stopFloating: () => {
        if (floatingTween.current) {
          floatingTween.current.kill()
          floatingTween.current = null
        }
      },
      startFloating: () => {
        const card = cardRef.current
        if (!card || floatingTween.current) return
        
        floatingTween.current = gsap.to(card, {
          y: "+=40",
          duration: 2 + (Math.random() * 2),
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          // delay: Math.random() * 0.1
        })
      }
    }))
    
    useEffect(() => {
      const container = containerRef.current
      const card = cardRef.current
      if (!container || !card) return

      let hoverTl: gsap.core.Timeline

      const handleMouseEnter = () => {
        hoverTl = gsap.timeline()
        hoverTl
          .to(card, { 
            rotationY: 180, 
            duration: 0.8, 
            ease: "back.out(1.7)" 
          })
          .to(card.querySelector(`.${styles['floating-element__face']}:not(.${styles['floating-element__face--back']})`), {
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            duration: 0.3
          }, 0)
      }

      const handleMouseLeave = () => {
        if (hoverTl) hoverTl.kill()
        gsap.to(card, { 
          rotationY: 0, 
          duration: 0.8, 
          ease: "back.out(1.7)" 
        })
        gsap.to(card.querySelector(`.${styles['floating-element__face']}:not(.${styles['floating-element__face--back']})`), {
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          duration: 0.3
        })
      }

      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
        if (hoverTl) hoverTl.kill()
        if (floatingTween.current) floatingTween.current.kill()
      }
    }, [])

    return (
      <div ref={containerRef} className={styles['floating-element']}>
        <div ref={cardRef} className={styles['floating-element__card']}>
          <div className={styles['floating-element__face']}>
            {children}
          </div>
          <div className={`${styles['floating-element__face']} ${styles['floating-element__face--back']}`}>
            <div className={styles['floating-element__glass']}>
              {name && <Text className={styles['floating-element__glass__name']}>{name}</Text>}
            </div>
          </div>
        </div>
      </div>
    )
  }
)