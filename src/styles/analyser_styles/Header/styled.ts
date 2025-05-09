"use client";

import styled from "styled-components";

export const HeadAnalyserStyle = styled.div<React.CSSProperties>`

/* Small screen */
@media (max-width: 575px) {
    background-color: white !important; 

    section {
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: black;
        padding: 15px;
        height: 80px;
        margin-top: 10px;
    }

    section.title {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        
        h1 {
            margin: -0.5px 0px;
            font-size: 14px;
            width: 103px;
        }
    }

    .sub-title {
        opacity: 0.5;
        font-family: 'fira code', monospace, Arial, Helvetica, sans-serif;
        font-size: 13px;
    }
    
    ul {
        list-style: none;
        display: flex; 
        align-items: center;
        gap: 12px;
        position: relative;
        
        li {
            button {
                background-color: black;
                color: white;
                width: 90px;
                height: 40px;
                border-radius: 5px;
                font-size: 15px;
                border: none;
            }

            a {
                color: unset;
                text-decoration: none;
                
            }
        }
    }

    h1 {
        font-size: 20px;
        font-family: inter, Arial, Helvetica, sans-serif;
        font-weight: bold;
        border-bottom: 1px solid #E6E6E6;
        
    }

}

/* Medium Screen */
@media (min-width: 576px) and (max-width: 767px) {
    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
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

            a {
                color: unset;
                text-decoration: none;
            }
        }
    }

    h1 {
        font-size: 200%;
        font-family: inter, Arial, Helvetica, sans-serif;
        font-weight: bold;
        position: relative;
        left: 15px;
    }
}

/* Big Screen */
@media (min-width: 768px) {
    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        color: black;
        padding: 15px;
        height: 100px;
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

            a {
                color: unset;
                text-decoration: none;
            }
        }
    }

    h1 {
        font-size: 200%;
        font-family: inter, Arial, Helvetica, sans-serif;
        position: relative;
        bottom: 5px;
      
        font-weight: bold;
        border-bottom: 1px solid #E6E6E6;
    }
}
`;