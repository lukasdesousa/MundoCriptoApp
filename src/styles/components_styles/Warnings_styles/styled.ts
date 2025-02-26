import styled from "styled-components";

export const WarningStyle = styled.div<React.CSSProperties>`
    
    font-family: inter Arial, Helvetica, sans-serif;
    opacity: 0.6;
    margin: 10px auto;
    text-align: center;
    border-bottom: 2px solid #e6e6e6;
    width: 100%;
    
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        div {
            position: relative;
            bottom: 10px;
        }
    }
`;

/*
export const ProblemsStyle = styled.div<React.CSSProperties>`
    
    font-family: inter Arial, Helvetica, sans-serif;
    opacity: 0.6;
    margin: 10px auto;
    text-align: center;
    border-bottom: 2px solid #e6e6e6;
    width: 90%;
    font-size: 12px;
    
    
    section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        div {
            position: relative;
            bottom: 8px;
            transform: scale(1.5);
        }
    }
    @media (min-width: 580px) {
        font-size: 100%;
    }
`;
*/