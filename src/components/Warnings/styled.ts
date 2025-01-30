import styled from "styled-components";

export const WarningStyle = styled.div<React.CSSProperties>`

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    
    font-family: inter Arial, Helvetica, sans-serif;
    opacity: 0.6;
    margin: 10px auto;
    text-align: center;
    border-bottom: 2px solid #e6e6e6;
    
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