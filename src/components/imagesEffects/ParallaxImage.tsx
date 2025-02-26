import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { ParallaxStyle } from "../../styles/components_styles/ImagesEfx/styled";

interface ParallaxImageProps {
  imageSrc: string;
  altText?: string;
  speed?: number;
  verticalOffset?: number;
  classNameProp?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  imageSrc,
  altText = "Imagem Parallax sobre a Grass",
  speed = 0.5,
  verticalOffset = 50, 
  classNameProp = '',
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setOffsetTop(rect.top + window.scrollY);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const props = useSpring({
    transform: `translateY(${(scrollY - offsetTop) * speed + verticalOffset}px)`,
  });

  return (
    <ParallaxStyle>
      <div className={`container ${classNameProp}`} ref={ref}>
        <animated.div className="image" style={props}>
          <img src={imageSrc} alt={altText} />
        </animated.div>
      </div>
    </ParallaxStyle>
  );
};

export default ParallaxImage;
