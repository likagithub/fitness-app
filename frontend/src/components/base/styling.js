import styled from 'styled-components';


const TextSmall = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.pSmall};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: ${({ theme }) => theme.lineHeights.pSmall};
`;

const HeadingBox = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

const ContentWrapper = styled.section`
    width: 90vw;
    max-width: 1500px;
    margin: 0 auto 100px auto;
`

const SectionWrapper = styled.section`
    width: 90vw;
    max-width: 1500px;
    padding: 1.5rem 0 1.25rem 0;
    margin: 0 auto;
`

const BackgroundBeige = styled.div`
    background-color: ${({ theme }) => theme.colors.beige};
`

export { TextSmall };
export { HeadingBox };
export { ContentWrapper };
export { SectionWrapper };
export { BackgroundBeige };
