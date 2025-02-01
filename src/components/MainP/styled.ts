import styled from "styled-components";

export const Main = styled.main<React.CSSProperties>`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    section.card-container {
        border-bottom: 1px solid #E6E6E6;
        margin-bottom: 15px;
    }

    section.tools {
        border-bottom: 1px solid #E6E6E6;
        padding: 20px;
    }
    

    @media (max-width: 575px) {
        padding: 7px;


       ul {
        list-style: none;
        padding: 13px;
       }
    
       p, li {
           margin-top: 15px;
           font-size: 13px;
           text-align: justify;
           padding: 10px;

       }
    
       p.opn-P, h1.opn-H1 {
           text-align: center;
       }
    
       p.txt-access {
           opacity: 0.85;
       }
    
       h1, h2 {
           font-size: 20px;
           margin-top: 10px;
           font-weight: bold;
           margin-right: 10px;
           text-align: center;
       }
    
       button {
           background-color: black;
           color: white;
           width: 120px;
           height: 50px;
           border-radius: 5px;
           font-size: 13px;
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
                           padding: 2px;
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
    
    @media (min-width: 576px) and (max-width: 1000px) {
        padding: 7px;

        ul {
        list-style: inside;
        padding: 20px;
       }

       img {
           width: 90%;
           display: block;
           margin: 20px auto;
           border-radius: 10px;
       }
    
       p, li {
           margin-top: 15px;
           margin-left: 2px;
           font-size: 100%;
           text-align: justify;
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
           text-align: center;
           
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

       .main-texts {
        p {
            padding: 0px 100px;
            text-align: center;
        }
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

    @media (min-width: 1000px) {
        padding: 10px;

        section.week-videos {
        border-bottom: 1px solid  #e6e6e6;

        p {
            padding: 0px 180px;
        }
    }

       .img {
           width: 100%;
           display: block;
           margin: 20px auto;
           border-radius: 10px;
       }
    
       p, li {
           margin-top: 15px;
           font-size: 20px;
           padding: 5px;
           text-align: justify;
       }

       .main-texts {
        p {
            padding: 0px 100px;
            text-align: center;
        }
       }

       ul {
        padding: 16px;
        list-style: inside;
       }
    
       p.opn-P, h1.opn-H1 {
           text-align: center;
       }

       h1.opn-H1 {
        margin-top: 40px;
       }

       p.opn-P {
        display: none;
       }
    
       p.txt-access {
           opacity: 0.85;
       }
       
       h1, h2 {
           font-size: 30px;
           font-weight: bold;
           margin: 20px 0px;
           text-align: center;
       }
    
       button {
           background-color: black;
           color: white;
           width: 130px;
           height: 60px;
           border-radius: 5px;
           font-size: 16px;
           border: none;
           margin-bottom: 25px;
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
    
                   p.txt-access {
                       font-size: 20px; 
                       font-family: inter, Arial, Helvetica, sans-serif;
                       font-weight: bold;
                       opacity: 1;
                   }
    
                   div {
                       display: flex;
                       flex-direction: column;
                       justify-content: space-evenly;
                       border-radius: 10px;
                       margin: 10px;
                       flex: 1;
                       gap: 80px;
                   

                       section.text-opn {
                        max-height: 20px;
                       }
                                   
                       p {
                           margin: 0px;
                           text-align: center;
                       }
    
                       section.photo-inv {
                           display: flex;
                           align-items: center;
                           justify-content: left;
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