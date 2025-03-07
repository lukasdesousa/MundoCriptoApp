"use client";

import styled, { CSSProperties } from "styled-components";

export const DevcommStyle = styled.section<CSSProperties>`
    display: flex;
    justify-content: center;
    padding: 15px;
    border-bottom: 1px solid #E6E6E6;
    border-top: 1px solid #E6E6E6;

    section.dev-comm {
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.15);
        backdrop-filter: blur( 2.5px );
        -webkit-backdrop-filter: blur( 2.5px );
        border-radius: 0px 0px 10px 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        position: relative;
        top: -20px;
        width: 100%;
        display: flex;
        justify-content: center;

    p {
        height: 30px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        opacity: 0.7;
    }

    p.dev-comment-warning {
        font-size: 15px;
    }
}
`;