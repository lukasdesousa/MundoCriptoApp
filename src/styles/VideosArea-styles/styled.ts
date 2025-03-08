import styled from "styled-components";
export const VideoStyle = styled.section<React.CSSProperties>`
    section.container {
        background-size: cover;
        width: 100%;
        padding: 8px;
        border-radius: 10px;

        iframe {
            width: 100%;
            height: 200px;
            border-radius: 10px;
        }
    }
`;

export const ContentStyle = styled.div<React.CSSProperties>`
    div.box {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 100px;
    }
`;