import styled from "styled-components";
import toolsBg from '../../assets/img/toolsBg.png';

export const ContainerTools = styled.section<React.CSSProperties>`


    width: 100%;
    height: 80%;
    display: block;
    margin: auto;
    background-image: url(${toolsBg});
    background-size: cover;
    border-radius: 10px;

    a {
        text-decoration: none;
    }
    

    section.warning {
        background-color: rgba(255, 255, 255, 0.3);
        height: 25px;
         
        color: black;
        
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
                background: rgba(16, 165, 246, 0.25);
        box-shadow: 0 8px 32px 0 rgba(248, 248, 248, 0.37);
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
                font-size: 15px;
                text-align: left;
                font-family: 'fira code', poppins, Arial, Helvetica, sans-serif;
                padding: 10px;
                
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
        }
       }
    }
`;