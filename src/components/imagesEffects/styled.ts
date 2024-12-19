import styled from "styled-components";

export const ParallaxStyle = styled.div<React.CSSProperties>`

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

/* Small screen */
@media (max-width: 575px) {
  section.container {
    overflow: hidden;
    margin: 20px auto;
    height: 100%;
    border-radius: 10px;
    width: 95%;

  }

  div.image {
    transform: translateY(55px);
    height: 100%;
    border-radius: 5px;
    
    img {
      width: 100%;
      border-radius: 10px;
      height: 100%;
    }
  }

}

@media (min-width: 768px) {
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  section.container {
    overflow: hidden;
    margin: 20px auto;
    border-radius: 10px;
    width: 95%;
    height: 500px;
  }

  div.image {
    //transform: translateY(160px);
    height: 100%;
    border-radius: 5px;
    position: sticky;
    top: 0%;
    
    img {
      width: 100%;
      border-radius: 10px;
      height: 100%;
    }
  }

}


`;