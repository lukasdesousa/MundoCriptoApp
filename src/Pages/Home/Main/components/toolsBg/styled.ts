import styled from "styled-components";
import toolsBg from '../../assets/img/toolsBg.png';

export const ContainerTools = styled.section<React.CSSProperties>`

@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');


    width: 100%;
    height: 200px;
    display: block;
    margin: auto;
    background-image: url(${toolsBg});
    background-size: cover;
    border-radius: 10px;
    

    section.warning {
        background-color: rgba(255, 255, 255, 0.3);
        height: 25px;
        
        p {
            text-align: center;
            position: relative;
            bottom: 5px;
            font-size: 12px;
            padding: 10px;
        }
    }

    section.infos {
        padding: 10px;
        display: flex;

        
        div {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: left;
            color: white;
            
            p {
                font-size: 15px;
                text-align: left;
                font-family: 'Source Code Pro', poppins, Arial, Helvetica, sans-serif;
                padding: 10px;
            }

            h2 {
                font-size: 20px;
                text-align: left;
                font-family: 'Source Code Pro', poppins, Arial, Helvetica, sans-serif;
            }
            
            
        }
    }

    @media (min-width: 768px) {
        width: 85%;
        height: 240px;
        

        section.warning {
            display: flex;
            align-items: center;
            justify-content: center;

            p {
                position: relative;
                bottom: 0;
                font-size: 15px;
            }
        }

       section.infos {
        div {
            p {
                font-size: 20px;
                ;
            }
            h2 {
                font-size: 25px;
            }
        }
       }
    }
`;