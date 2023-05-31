import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        line-height: 150%;
        text-align: start;

        box-sizing: border-box;

        -webkit-user-drag: none;
        -moz-user-drag: none;
        -ms-user-drag: none;
        -webkit-user-select: none;
        user-select: none;
    }

    html, body {
        max-width: 100vw;
        max-height: 100vh;

        overflow: hidden;
    }
`;

export default GlobalStyle;
