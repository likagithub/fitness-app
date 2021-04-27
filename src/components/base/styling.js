import styled from 'styled-components';


const TextSmall = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.pSmall};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: ${({ theme }) => theme.lineHeights.pSmall};
`;

const ContentWrapper = styled.section`
    width: 90vw;
    max-width: 1500px;
    margin: 0 auto 100px auto;
`

export { TextSmall };
export { ContentWrapper };
