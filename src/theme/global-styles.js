import { createGlobalStyle } from  'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        outline: none;
        border: none;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        color: ${({ theme }) => theme.colors.navy};
    }

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.h1};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        line-height: ${({ theme }) => theme.lineHeights.h1};
    }

    h2 {
        font-size: ${({ theme }) => theme.fontSizes.h2};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        line-height: ${({ theme }) => theme.lineHeights.h2};
    }

    h3 {
        font-size: ${({ theme }) => theme.fontSizes.h3};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        line-height: ${({ theme }) => theme.lineHeights.h3};
    }

    p {
        font-size: ${({ theme }) => theme.fontSizes.p};
        font-weight: ${({ theme }) => theme.fontWeights.normal};
        line-height: ${({ theme }) => theme.lineHeights.p};
    }

    img {
        display: block;
    }
`

export default GlobalStyles;