import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        text-align: start;

        box-sizing: border-box;

        -webkit-user-drag: none;
        -moz-user-drag: none;
        -ms-user-drag: none;
        -webkit-user-select: none;
        user-select: none;
    }

    html, body {
        background-color: ${theme.colors.gray1};

        max-width: 100vw;

        overflow-x: hidden;
    }
`;

export default GlobalStyle;
