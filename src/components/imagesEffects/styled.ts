import styled from "styled-components";

export const ParallaxStyle = styled.div<React.CSSProperties>`

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

/* Small screen */
@media (max-width: 575px) {
  
  .container {
    position: relative;
    width: 100%;
    height: 200px; /* Altura ajustada para mobile */
    overflow: hidden; /* Garante que o filho não ultrapasse */
    border-radius: 10px;
    margin: 20px auto;
  }

  .image {
    position: absolute;
    top: 55%;
    left: 0;
    width: 100%;
    height: 200px; /* Altura maior que o contêiner para o efeito */
    will-change: transform; /* Otimização */
    border-radius: 10px;
    
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  }



@media (min-width: 768px) {
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