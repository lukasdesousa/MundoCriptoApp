import styled from "styled-components";

export const StylePost = styled.div<React.CSSProperties>`

@media (min-width: 568px) {
    @keyframes holographic-animation {
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
        width: 90%;
        display: flex;
        justify-content: center;
        margin: 20px auto;
        background-color: #e6e6e6;
        background: linear-gradient(
        120deg,
        rgba(99, 99, 99, 0.3),
        rgba(182, 182, 182, 0.3),
        rgba(254, 254, 254, 0.3),
        rgba(99, 99, 99, 0.3)
      );
        background-size: 400% 400%;
        border-radius: 10px; /* Arredondado opcional */
        animation: holographic-animation 8s ease infinite;
        backdrop-filter: blur(30px);
        opacity: 0.8;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
        
        section {
            border-radius: 10px;
            position: relative;
            width: 300px;
            height: 100%;
            border-radius: 20px; /* Opcional */
            z-index: 1;
        }
    
    .gradient-shadow::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.5),
        rgba(99, 99, 99, 0.3),
        rgba(255, 255, 255, 0.5)
      );
      z-index: -1;
      filter: blur(15px); /* Suaviza a sombra */
      border-radius: 20px; /* Combina com o elemento principal */
    }
    
}

`;