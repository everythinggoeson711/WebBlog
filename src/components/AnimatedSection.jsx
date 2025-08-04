import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 1000, 
  threshold = 0.1,
  rootMargin = '-10% 0%',
  animationType = 'fadeInUp'
}) => {
  const [ref, inView] = useInView({ 
    triggerOnce: false, 
    rootMargin,
    threshold 
  });

  const getAnimationProps = () => {
    switch (animationType) {
      case 'fadeInUp':
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0px)' : 'translateY(50px)',
        };
      case 'fadeInLeft':
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0px)' : 'translateX(-50px)',
        };
      case 'fadeInRight':
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0px)' : 'translateX(50px)',
        };
      case 'scale':
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? 'scale(1)' : 'scale(0.8)',
        };
      case 'rotate':
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? 'rotate(0deg)' : 'rotate(10deg)',
        };
      default:
        return {
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0px)' : 'translateY(50px)',
        };
    }
  };

  const springs = useSpring({
    ...getAnimationProps(),
    config: { duration },
    delay: inView ? delay : 0,
  });

  return (
    <animated.div ref={ref} style={springs} className={className}>
      {children}
    </animated.div>
  );
};

export default AnimatedSection;
