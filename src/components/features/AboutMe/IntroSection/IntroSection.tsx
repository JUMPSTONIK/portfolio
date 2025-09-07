import React from 'react'
import styles from './IntroSection.module.sass'

export const IntroSection: React.FC = () => (
  <div className={styles['intro']}>
    <div>
      <h1 className={styles['intro__title']}>Technology Mastery</h1>
      <p className={styles['intro__subtitle']}>Scroll to know from frontend frameworks to backend solutions, here's my technical arsenal. Tap the icon to see the name.</p>
    </div>
  </div>
)

