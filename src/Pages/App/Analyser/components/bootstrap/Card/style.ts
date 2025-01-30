import styled from "styled-components";

export const CardStyle = styled.div<React.CSSProperties>`
margin: 30px auto;

@media (max-width: 578px) {
    h1 {
        font-size: 15px;
        text-align: left;
    }
    
        p {
            text-align: left;
            font-size: 12px;
            color: black;
        }
    
        .card {
            margin: auto;
        }
        
        p.sub-tittle {
            background-color: white;
            border-radius: 10px;
        }
    
}

    
    @media (min-width: 700px) {
        width: 50%;
        margin: 30px auto;
          
        h5 {
            font-size: 35px;
            text-align: left;
        }
    
        p {
            text-align: left;
            font-size: 17px;
        }
    
        .card {
            margin: auto;
        }
    
        p.sub-tittle {
            background: rgb(255, 255, 255);
            border-radius: 10px;
            margin: 15px auto;
            height: 170px;
            border-radius: 15px;
            font-size: 19px;
            color: black;
            display: flex;
            padding: 14px;
            align-items: center;
            box-shadow: 0 5px 32px 0 rgba(127, 186, 143, 0.23);
        }
    }
`;