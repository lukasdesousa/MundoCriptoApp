import styled from "styled-components";

export const Section = styled.section<React.CSSProperties>`
  position: relative; /* Necessário para colocar a camada branca por cima */
  margin: 10px auto;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background: linear-gradient(45deg, rgba(255, 0, 0, 0.5), rgba(0, 0, 255, 0.3), rgba(0, 255, 0, 0.5));
  background-size: 300% 300%;  /* Expande o gradiente para mais cobertura */
  animation: backgroundAnimation 10s ease infinite; /* Animação que altera o fundo */
  border: 2px solid #e6e6e6;

  /* Camada branca semi-transparente */
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.3); /* Camada branca transparente */
    z-index: 1; /* Coloca a camada branca acima do fundo, mas abaixo do conteúdo */
    mix-blend-mode: overlay; /* Faz a camada branca interagir com o gradiente */
    border-radius: 9px;
  }

  /* Animação do fundo */
  @keyframes backgroundAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

