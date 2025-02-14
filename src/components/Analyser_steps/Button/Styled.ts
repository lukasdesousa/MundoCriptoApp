import styled, { CSSProperties } from "styled-components";

export const NextButtonStyle = styled.section<CSSProperties>`
    @import url('https://fonts.googleapis.com/css?family=Poppins:900i');

    padding-bottom: 20px;

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta {
    display: flex;
    padding: 10px 35px;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    color: white;
    background:rgb(0, 0, 0);
    transition: 1s;
    box-shadow: 6px 6px 0 rgba(246, 188, 246, 0.58);
    transform: skewX(-15deg);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}


.cta:focus {
   outline: none; 
}

.cta:hover {
    transition: 0.5s;
    box-shadow: 10px 10px 0 #FBC638;
}

.cta span:nth-child(2) {
    transition: 0.5s;
    margin-right: 0px;
}

.cta:hover  span:nth-child(2) {
    transition: 0.5s;
    margin-right: 45px;
}

  span {
    transform: skewX(15deg) 
  }

  span:nth-child(2) {
    width: 20px;
    margin-left: 30px;
    position: relative;
    top: 12%;
  }
  
/**************SVG****************/

path.one {
    transition: 0.4s;
    transform: translateX(-60%);
}

path.two {
    transition: 0.5s;
    transform: translateX(-30%);
}

.cta:hover path.three {
    animation: color_anim 1s infinite 0.2s;
}

.cta:hover path.one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
}

.cta:hover path.two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
}

/* SVG animations */

@keyframes color_anim {
    0% {
        fill: white;
    }
    50% {
        fill: #FBC638;
    }
    100% {
        fill: white;
    }
}
`;