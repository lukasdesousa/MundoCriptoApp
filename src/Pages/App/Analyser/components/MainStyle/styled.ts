import styled from "styled-components";

export const Section = styled.section<React.CSSProperties>`
  position: relative;
  margin: 10px auto;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background: linear-gradient(45deg, rgba(255, 0, 0, 0.5), rgba(0, 0, 255, 0.3), rgba(0, 255, 0, 0.5));
  background-size: 300% 300%; 
  animation: backgroundAnimation 10s ease infinite; 
  border: 2px solid #e6e6e6;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.3); 
    z-index: 1; 
    mix-blend-mode: overlay; 
    border-radius: 9px;
  }

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