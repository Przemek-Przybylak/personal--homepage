import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
    };
    *, ::after, ::before {
        box-sizing: inherit;
    };

    body {
        background-color: ${({ theme }) => theme.colors.background};
        font-family: Inter;
        overflow-y: scroll;
        font-family: 'Inter', sans-serif;
        transition: 300ms;
        
        @media (max-width: ${({ theme }) => theme.breakPoints.mobileMax}px) {
            margin: 0 auto ;
        }
        
    };
`;
