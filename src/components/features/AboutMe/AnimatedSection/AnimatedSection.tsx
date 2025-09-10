'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './AnimatedSection.module.sass'
import { FloatingElement } from '../../../ui/FloatingElement'
import { TechLogo } from '@/components/ui/TechLogo/TechLogo'

gsap.registerPlugin(ScrollTrigger)

interface FloatingElementRef {
    element: HTMLDivElement | null
    stopFloating: () => void
    startFloating: () => void
}

interface Element {
    id: number
    content?: string
    delay: number
    name?: string
    logo?: string
}

interface Props {
    title: string
    elements: Element[]
    isOdd: boolean
}

export const AnimatedSection: React.FC<Props> = ({ title, elements, isOdd }) => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const elementsRef = useRef<(FloatingElementRef | null)[]>([])

    useEffect(() => {
        const section = sectionRef.current
        const titleEl = titleRef.current
        const els = elementsRef.current

        if (!section || !titleEl) return

        const containers = els.map(ref => ref?.element).filter(Boolean)

        gsap.set(containers, { y: 200, opacity: 0, scale: 0.8 })
        gsap.set(titleEl, { x: isOdd ? -300 : 300, opacity: 0 })

        ScrollTrigger.create({
            trigger: section,
            start: "top 50%",
            end: "bottom 20%",
            onEnter: () => {
                gsap.to(titleEl, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
                
                containers.forEach((container, i) => {
                    const ref = els[i]
                    if (container && ref) {
                        gsap.to(container, {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            delay: elements[i]?.delay || 0,
                            ease: "back.out(1.7)",
                            onComplete: () => {
                                ref.startFloating()
                            }
                        })
                    }
                })
            },
            onLeave: () => {
                gsap.to(titleEl, {
                    x: isOdd ? 300 : -300,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.in"
                })
                els.forEach(ref => ref?.stopFloating())
            },
            onLeaveBack: () => {
                gsap.to(titleEl, {
                    x: isOdd ? -300 : 300,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.in"
                })
                
                els.forEach(ref => ref?.stopFloating())
                gsap.set(containers, { y: 200, opacity: 0, scale: 0.8 })
            },
            onEnterBack: () => {
                gsap.to(titleEl, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
                
                containers.forEach((container, i) => {
                    const ref = els[i]
                    if (container && ref) {
                        gsap.to(container, {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            delay: elements[i]?.delay || 0,
                            ease: "back.out(1.7)",
                            onComplete: () => {
                                ref.startFloating()
                            }
                        })
                    }
                })
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === section) {
                    trigger.kill()
                }
            })
            els.forEach(ref => ref?.stopFloating())
        }
    }, [isOdd, elements])

    return (
        <div ref={sectionRef} className={styles['section']}>
            <h2
                ref={titleRef}
                className={`${styles['section__title']} ${isOdd ? styles['section__title--odd'] : styles['section__title--even']}`}
            >
                {title}
            </h2>
            <div
                className={`${styles['section__elements']}`}
            >
                {elements.map((el, i) => (
                    <FloatingElement
                        key={el.id}
                        ref={(node) => {
                            elementsRef.current[i] = node
                        }}
                        name={el.name}
                    >
                        {el.logo ? (
                            <TechLogo
                                url={el.logo}
                                name={el.name || 'logo'}
                            />
                        ) : (
                            <span className={styles['section__text']}>{el.content}</span>
                        )}
                    </FloatingElement>
                ))}
            </div>
        </div>
    )
}