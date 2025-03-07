import styled, { CSSProperties } from "styled-components";

export const KofiStyles = styled.section<CSSProperties>`
    text-align: center;
    border-bottom: 1px solid #e6e6e6;
    margin-top: 20px;
    margin: auto;
    width: 100%;
    
    @media (min-width: 700px) {
        font-size: 100%;
    }
    @media (max-width: 500px) {
        font-size: 80%;
    }
    
    p {
        display: block;
        margin: auto;
        padding: 10px;
    }

    a {
        color:rgb(218, 75, 120)
    }
`;