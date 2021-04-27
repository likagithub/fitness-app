import React from 'react';
import styled from 'styled-components';

// base styling
import { TextSmall } from '../base/styling'
import { ContentWrapper } from '../base/styling'

// components
import Nav from '../nav/nav';
import ProgramSelection from './program-selection';


const StyledH2 = styled.h2`
    margin: 70px 0 25px 0;
`;

const StyledTextSmall = styled(TextSmall)`
    margin-bottom: 30px;
`

const Browse = () => {
    return (
        <>
        <ContentWrapper>
            <StyledH2>Browse</StyledH2>
            <StyledTextSmall>Filter</StyledTextSmall>
            <ProgramSelection />
        </ContentWrapper>
        <Nav />
        </>
    );
};

export default Browse;