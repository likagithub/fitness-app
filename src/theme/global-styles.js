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

    p.small {
        font-size: ${({ theme }) => theme.fontSizes.pSmall};
        font-weight: ${({ theme }) => theme.fontWeights.normal};
        line-height: ${({ theme }) => theme.lineHeights.pSmall};
    }

    li.navlink {
        font-size: ${({ theme }) => theme.fontSizes.navLink};
        font-weight: ${({ theme }) => theme.fontWeights.normal};
        line-height: ${({ theme }) => theme.lineHeights.navLink};        color: ${({ theme }) => theme.colors.navy};
        text-transform: uppercase;
        letter-spacing: 2px;
        cursor: pointer;
    }

    img {
        display: block;
    }

    section.content {
        width: 90vw;
        max-width: 1500px;
        margin: 0 auto;
    }
`

export default GlobalStyles;