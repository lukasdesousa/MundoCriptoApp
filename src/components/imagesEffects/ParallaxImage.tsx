import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { ParallaxStyle } from './styled';

interface ParallaxImageProps {
  imageSrc: string; 
  altText?: string; 
  speed?: number; 
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ imageSrc, altText = 'Imagem Grass', speed = -20 }) => {
  return (
    <ParallaxProvider>
      <ParallaxStyle>
          <Parallax speed={speed}> 
            <div className='image'>
              <img
                src={imageSrc}
                alt={altText}
              />
            </div>
          </Parallax>
      </ParallaxStyle>
    </ParallaxProvider>
  );
};

export default ParallaxImage;
