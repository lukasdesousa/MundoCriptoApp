import styled from "styled-components";

export const FooterStyle = styled.footer<React.CSSProperties>`
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

/* Small Screen CSS */
@media (max-width: 575px) {

        padding: 15px;
        background: transparent;
        padding: 20px;
        backdrop-filter: blur(30px);
        box-shadow: 0px 0px 20px rgba(227, 228, 237, 0.37);
        border: 1px solid rgba(255, 255, 255, 0.18);
        color: black;
    
        p.footer-tittle {
            font-size: 18px;
            font-family: inter, Arial, Helvetica, sans-serif;
            opacity: 0.8;
        }
    
        p.information {
            font-size: 12px;
            overflow-wrap: break-word;
            margin: 12px 0px;
        }
    
        section.social-media {
            display: flex;
            gap: 22px;
            
            img {
                width: 25px;
                opacity: 0.45;
                transition: all 0.3s ease;
            }
    
            img:hover {
                opacity: 0.8;
            }
        }
    
        section.details-footer {
            display: flex;
            justify-content: space-between;
    
            p {
                margin-right: 6px;
                text-align: left;
            }
        }
    
        section.links {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 12px;
            width: 100%;
            border-left: 1px solid #E6E6E6;
            
            a, p {
                color: black;
                position: relative;
                left: 5px;
                opacity: 0.75;
                transition: all 0.3s;
                margin: 10px 0px;
                text-align: center;
            }
    
            a:hover {
                opacity: 1;
            }
            
        } 
}

/* Medium Screen CSS */
@media (min-width: 576px) and (max-width: 767px) {

padding: 15px;
background: transparent;
padding: 20px;
backdrop-filter: blur(30px);
box-shadow: 0px 0px 20px rgba(227, 228, 237, 0.37);
border: 1px solid rgba(255, 255, 255, 0.18);
color: black;

p.footer-tittle {
    font-size: 18px;
    font-family: inter, Arial, Helvetica, sans-serif;
    opacity: 0.8;
}

p.information {
    font-size: 12px;
    overflow-wrap: break-word;
    margin: 12px 0px;
}

section.social-media {
    img {
        width: 25px;
        margin-right: 35px;
        opacity: 0.45;
        transition: all 0.3s ease;
    }

    img:hover {
        opacity: 0.8;
    }
}

section.details-footer {
    display: flex;
    justify-content: space-between;

    p {
        margin-right: 6px;
        text-align: left;
    }
}

section.links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    width: 100%;
    border-left: 1px solid #E6E6E6;
    
    a, p {
        color: black;
        position: relative;
        left: 5px;
        opacity: 0.75;
        transition: all 0.3s;
        margin: 10px 0px;
    }

    a:hover {
        opacity: 1;
    }
    
} 
}

/* Big Screen CSS */
@media (min-width: 768px) {

padding: 15px;
background: transparent;
padding: 20px;
backdrop-filter: blur(30px);
box-shadow: 0px 0px 20px rgba(227, 228, 237, 0.37);
border: 1px solid rgba(255, 255, 255, 0.18);
color: black;

p.footer-tittle {
    font-size: 18px;
    font-family: inter, Arial, Helvetica, sans-serif;
    opacity: 0.8;
}

p.information {
    font-size: 12px;
    overflow-wrap: break-word;
    margin: 12px 0px;
}

section.social-media {
    
    
    img {
        width: 25px;
        margin-right: 35px;
        opacity: 0.45;
        transition: all 0.3s ease;
    }

    img:hover {
        opacity: 0.8;
    }
}

section.details-footer {
    display: flex;
    justify-content: space-between;

    p {
        margin-right: 6px;
        text-align: left;
        
    }
}

section.links {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
   
    width: 50%;
    border-left: 1px solid #E6E6E6;
    
    
    a, p {
        color: black;
        opacity: 0.75;
        transition: all 0.3s;
        margin: 10px 0px;
        font-size: 15px;
    }

    a:hover {
        opacity: 1;
    }
    
} 
}

`;