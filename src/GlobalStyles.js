import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
    };
    *, ::after, ::before {
        box-sizing: inherit;
    };

    body {
        background-color: #E5E5E5;
        font-family: Inter;
        overflow-y: scroll;
    }
`;
