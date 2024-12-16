import styled from "styled-components";

export const Main = styled.div<React.CSSProperties>`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    @media (max-width: 575px) {
        padding: 7px;

       img {
           width: 90%;
           display: block;
           margin: 20px auto;
           border-radius: 10px;
       }
    
       p, li {
           margin-top: 15px;
           margin-left: 2px;
           font-size: 15px;
       }
    
       p.opn-P, h1.opn-H1 {
           text-align: center;
       }
    
       p.txt-access {
           opacity: 0.85;
       }
    
       h1, h2 {
           font-size: 25px;
           margin-top: 10px;
           font-weight: bold;
           margin-right: 10px;
           
       }
    
       button {
           background-color: black;
           color: white;
           width: 120px;
           height: 50px;
           border-radius: 5px;
           font-size: 15px;
           border: none;
       }
    
       section.opn-inv {
               display: flex;
               flex-direction: column;
               overflow: scroll;
               scrollbar-width: none;
               margin-bottom: 40px;
    
               section.opn-cards {
                   display: flex;
                   gap: 10px;
                   width: 100%;
               } 
    
               section.opn {
                   width: 100%;
                   border-radius: 5px;
                   border: 1px solid #E6E6E6;
    
                   p.txt-access {
                       margin-bottom: 50px;
                       font-size: 17px;
                       font-family: inter, Arial, Helvetica, sans-serif;
                       font-weight: bold;
                       opacity: 1;
                   }
    
                   div {
                       display: flex;
                       flex-direction: column;
                       border-radius: 10px;
                       margin: 10px;
                       width: 300px;
    
                       p {
                           margin: 0px;
                           text-align: center;
                       }
    
                       section.photo-inv {
                           display: flex;
                           gap: 10px;
    
                           img {
                               width: 35px;
                               height: 35px;
                               margin: 0px;
                               border-radius: 100%;
                           }
    
                           section.details {
                               display: flex;
                               flex-direction: column;
                               align-items: start;
                               justify-content: center;
    
                               .details-name {
                                   font-family: inter, Arial, Helvetica, sans-serif;
                                   font-size: 12px;
                               }
    
                               .details-desc {
                                   font-family: inter, Arial, Helvetica, sans-serif;
                                   font-size: 12px;
                               }
                           }
                       }
                   }
               }
    
           }
    }
    
    @media (min-width: 576px) and (max-width: 767px) {
        padding: 7px;

       img {
           width: 90%;
           display: block;
           margin: 20px auto;
           border-radius: 10px;
       }
    
       p, li {
           margin-top: 15px;
           margin-left: 2px;
           font-size: 15px;
       }
    
       p.opn-P, h1.opn-H1 {
           text-align: center;
       }
    
       p.txt-access {
           opacity: 0.85;
       }
    
       h1, h2 {
           font-size: 25px;
           margin-top: 10px;
           font-weight: bold;
           margin-right: 10px;
           
       }
    
       button {
           background-color: black;
           color: white;
           width: 120px;
           height: 50px;
           border-radius: 5px;
           font-size: 15px;
           border: none;
       }
    
       section.opn-inv {
               display: flex;
               flex-direction: column;
               overflow: scroll;
               scrollbar-width: none;
               margin-bottom: 40px;
    
               section.opn-cards {
                   display: flex;
                   gap: 10px;
                   width: 100%;
               } 
    
               section.opn {
                   width: 100%;
                   border-radius: 5px;
                   border: 1px solid #E6E6E6;
    
                   p.txt-access {
                       margin-bottom: 50px;
                       font-size: 17px;
                       font-family: inter, Arial, Helvetica, sans-serif;
                       font-weight: bold;
                       opacity: 1;
                   }
    
                   div {
                       display: flex;
                       flex-direction: column;
                       border-radius: 10px;
                       margin: 10px;
                       width: 300px;
    
                       p {
                           margin: 0px;
                           text-align: center;
                       }
    
                       section.photo-inv {
                           display: flex;
                           gap: 10px;
    
                           img {
                               width: 35px;
                               height: 35px;
                               margin: 0px;
                               border-radius: 100%;
                           }
    
                           section.details {
                               display: flex;
                               flex-direction: column;
                               align-items: start;
                               justify-content: center;
    
                               .details-name {
                                   font-family: inter, Arial, Helvetica, sans-serif;
                                   font-size: 12px;
                               }
    
                               .details-desc {
                                   font-family: inter, Arial, Helvetica, sans-serif;
                                   font-size: 12px;
                               }
                           }
                       }
                   }
               }
    
           }
    }

    @media (min-width: 768px) {
        padding: 10px;

       .img {
           width: 100%;
           display: block;
           margin: 20px auto;
           border-radius: 10px;
       }
    
       p, li {
           margin-top: 15px;
           margin-left: 2px;
           font-size: 20px;
       }
    
       p.opn-P, h1.opn-H1 {
           text-align: center;
       }

       h1.opn-H1 {
        margin-top: 40px;
       }

       p.opn-P {

       }

    
       p.txt-access {
           opacity: 0.85;
       }
    
       h1, h2 {
           font-size: 30px;
           margin-top: 10px;
           font-weight: bold;
           
       }
    
       button {
           background-color: black;
           color: white;
           width: 130px;
           height: 60px;
           border-radius: 5px;
           font-size: 16px;
           border: none;
       }
    
       section.opn-inv {
               display: flex;
               flex-direction: column;
               overflow: scroll;
               scrollbar-width: none;
               margin-bottom: 40px;
    
               section.opn-cards {
                   display: flex;
                   gap: 10px;
                   width: 100%;
               } 
    
               section.opn {
                   width: 100%;
                   border-radius: 5px;
                   border: 1px solid #E6E6E6;
                   display: flex;
                   flex-direction: column;

                   section.text-opn {
                    width: 100%;
                    height: 50%;
                   }
    
                   p.txt-access {
                       font-size: 20px; 
                       font-family: inter, Arial, Helvetica, sans-serif;
                       font-weight: bold;
                       opacity: 1;
                       box-sizing: border-box;
                   }
    
                   div {
                       display: flex;
                       flex-direction: column;
                       justify-content: space-around;
                       border-radius: 10px;
                       margin: 10px;
                       width: 300px;
                    flex: 1;
                    gap: 50px;
        
                       p {
                           margin: 0px;
                           text-align: center;
                       }
    
                       section.photo-inv {
                           display: flex;
                           gap: 10px;
                            
                           img {
                               width: 35px;
                               height: 35px;
                               margin: 0px;
                               border-radius: 100%;
                           }
    
                           section.details {
                               display: flex;
                               flex-direction: column;
                               align-items: start;
                               justify-content: center;
    
                               .details-name {
                                   font-family: inter, Arial, Helvetica, sans-serif;
                                   font-size: 12px;
                               }
    
                               .details-desc {
                                   font-family: inter, Arial, Helvetica, sans-serif;
                                   font-size: 12px;
                               }
                           }
                       }
                   }
               }
    
           }
    }
`;