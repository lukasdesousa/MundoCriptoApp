import styled from "styled-components";

export const HeadStyle = styled.div<React.CSSProperties>`

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

@media (max-width: 575px) {
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        color: black;
        padding: 15px;
        height: 140px;
        
    }
    
    ul {
        list-style: none;
        display: flex; 
        align-items: center;
        gap: 10px;

        li {
            button {
                background-color: black;
                color: white;
                width: 90px;
                height: 35px;
                border-radius: 5px;
                font-size: 15px;
                border: none;
            }
        }
    }

    h1 {
        font-size: 22px;
        font-family: inter, Arial, Helvetica, sans-serif;
        position: relative;
        font-weight: bold;
        bottom: 5px;
    }
}

@media (min-width: 576px) and (max-width: 767px) {
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        color: black;
        padding: 15px;
        height: 140px;
        
    }
    
    ul {
        list-style: none;
        display: flex; 
        align-items: center;
        gap: 10px;

        li {
            button {
                background-color: black;
                color: white;
                width: 90px;
                height: 35px;
                border-radius: 5px;
                font-size: 15px;
                border: none;
            }
        }
    }

    h1 {
        font-size: 18px;
        font-family: inter, Arial, Helvetica, sans-serif;
        position: relative;
        font-weight: bold;
        bottom: 5px;
    }
}

@media (min-width: 768px) {
    section {
        display: flex;
        align-items: center;
        justify-content: right;
        gap: 10px;
        color: black;
        padding: 15px;
        height: 140px;
        
    }

    ul {
        list-style: none;
        display: flex; 
        align-items: center;
        gap: 10px;

        li {
            button {
                background-color: black;
                color: white;
                width: 90px;
                height: 35px;
                border-radius: 5px;
                font-size: 15px;
                border: none;
            }
        }
    }

    h1 {
        font-size: 35px;
        font-family: inter, Arial, Helvetica, sans-serif;
        position: relative;
        bottom: 5px;
        right: 35%;
        font-weight: bold;
    }
}
`;