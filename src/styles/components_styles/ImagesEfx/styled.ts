import styled from "styled-components";

export const ParallaxStyle = styled.div<React.CSSProperties>`

/* Small screen */
@media (max-width: 575px) {
  
  .container {
    position: relative;
    width: 100%;
    height: 200px; 
    overflow: hidden; 
    border-radius: 10px;
    margin: 20px auto;
  }

  .image {
    position: absolute;
    top: 55%;
    left: 0;
    width: 100%;
    height: 200px; 
    will-change: transform; 
    border-radius: 10px;
    
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  }

@media (min-width: 576px) and (max-width: 767px) {

.container {
  height: 100px;
  position: relative;
  width: 100%;
  height: 260px;
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
    object-fit: contain;
    margin: auto;
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
      height: 550px;
      object-fit: contain;
  }
}


}
.container-2 {
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
    height: 100%;
    object-fit: cover;
    margin: auto
}
}


.container-3 {
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
      height: 600px;
      object-fit: cover;
      margin: auto;
  }
}

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
    top: -10px;
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
      top: -10px;
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