import React from 'react'
import styles from './IntroSection.module.sass'

export const IntroSection: React.FC = () => (
  <div className={styles['intro']}>
    <div>
      <h1 className={styles['intro__title']}>Mi Portafolio</h1>
      <p className={styles['intro__subtitle']}>Scroll para explorar mis habilidades</p>
    </div>
  </div>
)

