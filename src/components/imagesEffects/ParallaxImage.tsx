import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web"; // Importando react-spring
import { ParallaxStyle } from "./styled";

interface ParallaxImageProps {
  imageSrc: string;
  altText?: string;
  speed?: number;
  verticalOffset?: number; // Novo prop para controle de deslocamento
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  imageSrc,
  altText = "Imagem Parallax",
  speed = 0.5,
  verticalOffset = 50, // Valor padrão para deslocar a imagem para baixo
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  // Atualiza a posição inicial do contêiner
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setOffsetTop(rect.top + window.scrollY);
    }
  }, []);

  // Atualiza o valor de scroll dinamicamente
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animação controlada pelo react-spring
  const props = useSpring({
    transform: `translateY(${(scrollY - offsetTop) * speed + verticalOffset}px)`,
  });

  return (
    <ParallaxStyle>
      <div className="container" ref={ref}>
        <animated.div className="image" style={props}>
          <img src={imageSrc} alt={altText} />
        </animated.div>
      </div>
    </ParallaxStyle>
  );
};

export default ParallaxImage;
