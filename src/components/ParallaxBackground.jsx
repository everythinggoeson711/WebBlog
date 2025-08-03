import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const ParallaxBackground = ({ 
  children, 
  backgroundImage, 
  height = '100vh',
  speed = 0.5,
  offset = 0,
  factor = 1,
  className = ''
}) => {
  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      factor={factor}
      className={className}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="parallax-content">
        {children}
      </div>
    </ParallaxLayer>
  );
};

export default ParallaxBackground;
