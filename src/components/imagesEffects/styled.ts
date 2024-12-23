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

/* Big screen */
@media (min-width: 768px) {

  .container {
    height: 300px;
    position: relative;
    width: 100%;
    height: 330px;
    overflow: hidden;
    border-radius: 10px;
    margin: 20px auto;
  }
  
  .image {
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: transform; 
    
    img {
      border-radius: 12px;
      width: 100%;
      height: 500px;
      object-fit: contain;
      margin: auto;
      border: 10px;
      image-rendering: smooth;
      mix-blend-mode: multiply;
    }
  }
  
  .container-1 {
    .image {
      height: 100px;
      img {
        border-radius: 12px;
        width: 100%;
        height: 750px;
        object-fit: cover;
    }
  }

  
}
.container-2 {
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: transform; 
    
    img {
      border-radius: 12px;
      width: 100%;
      height: 700px;
      object-fit: cover;
      margin: auto
  }
}
}

.container-3 {
  .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      will-change: transform; 
      
      img {
        border-radius: 12px;
        width: 100%;
        height: 600px;
        object-fit: cover;
        margin: auto;
    }
  }
  
}
}

`;