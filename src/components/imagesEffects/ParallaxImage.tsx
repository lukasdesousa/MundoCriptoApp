import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { ParallaxStyle } from './styled';

interface ParallaxImageProps {
  imageSrc: string; // Caminho para a imagem
  altText?: string; // Texto alternativo para a imagem
  speed?: number; // Velocidade do efeito parallax
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ imageSrc, altText = 'Imagem Grass', speed = -50 }) => {
  return (
    <ParallaxProvider>
      <ParallaxStyle>
        <section className='container'>
          <Parallax speed={speed}>
            <div className='image'>
              <img
                src={imageSrc}
                alt={altText}
              />
            </div>
          </Parallax>
        </section>
      </ParallaxStyle>
    </ParallaxProvider>
  );
};

export default ParallaxImage;
