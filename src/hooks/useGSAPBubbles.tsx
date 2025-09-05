import { useEffect } from "react";
import styles from './useGSAPBubbles.module.sass'

export const useGSAPBubbles = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createBubble = (): void => {
      const bubble = document.createElement('div');
      bubble.className = `${styles.bubble}`;
      
      // Random size
      const size = Math.random() * 100 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random position
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      
      // Random opacity and color
      const opacity = Math.random() * 0.3 + 0.1;
      const hue = Math.random() * 60 + 240; // Purple range
      bubble.style.background = `hsla(${hue}, 70%, 80%, ${opacity})`;
      bubble.style.borderRadius = '50%';
      bubble.style.position = 'absolute';
      bubble.style.pointerEvents = 'none';
      bubble.style.zIndex = '0';
      
      // Animation
      const duration = Math.random() * 10 + 5;
      const delay = Math.random() * 5;
      bubble.style.animation = `${styles.float} ${duration}s ease-in-out infinite`;
      bubble.style.animationDelay = `${delay}s`;
      
      container.appendChild(bubble);
      
      // Remove bubble after animation
      setTimeout(() => {
        if (bubble.parentNode) {
          bubble.parentNode.removeChild(bubble);
        }
      }, 15000);
    };

    // Create initial bubbles
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createBubble(), i * 500);
    }

    // Create new bubbles periodically
    const interval = setInterval(createBubble, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
};