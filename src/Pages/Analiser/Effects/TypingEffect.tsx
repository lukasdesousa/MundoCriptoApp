import React, { useEffect, useRef } from 'react';
import { Typed } from 'react-typed'; 
import { TypingStyle } from './styled';

export const TypedDescription: React.FC = () => {
  const typedElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: [
          'Uma ferramenta capaz de prever golpes (RUG-PULLS) em criptomoedas.',
          'Com uma análise complexa, essa ferramenta é capaz de identificar projetos fraudulentos.'
        ],
        typeSpeed: 20,
        backSpeed: 10,
        loop: true,
        backDelay: 2000,
        showCursor: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div>
      <h1>
        <TypingStyle>
            <p ref={typedElement}></p>
        </TypingStyle>
      </h1>
    </div>
  );
};

export default TypedDescription;