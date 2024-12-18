import styled from "styled-components";

export const ParallaxStyle = styled.div<React.CSSProperties>`

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

/* Small screen */
@media (max-width: 575px) {
  section.container {
    overflow: hidden;
    margin: 20px auto;
    height: 240px;
    border-radius: 10px;
    width: 95%;

  }

  div.image {
    transform: translateY(55px);
    height: 100%;
    overflow: hidden;
    border-radius: 5px;
    
    img {
      width: 100%;
      border-radius: 5px;
      
    }
  }

}



`;