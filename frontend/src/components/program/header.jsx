import React from 'react';
import styled from 'styled-components';

// base styling
import { SectionWrapper, TextSmall } from 'components/base/styling'

// media
import IconDot from "images/_icons/dot.svg";
import IconClose from "images/_elements/close.svg";

const StyledProgramHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.lightPink};
`

const StyledSectionWrapper = styled(SectionWrapper)`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height: 70vh;
    text-align: center;
`

const StyledTextSmall = styled(TextSmall)`
    text-transform: uppercase;
    margin-top: 5px;
`

const ProgramSpecs = styled.div`
    display: flex;
    justify-content: space-between;
`

const SpecsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledIconClose = styled.img`
    height: 1.25rem;
    align-self: flex-end;
`

const ProgramHeader = (props) => {
    return (
        <StyledProgramHeader>
            <StyledSectionWrapper>
                <StyledIconClose src={IconClose} alt="Icon Close" />
                <h1>{props.programTitle}</h1>
                <ProgramSpecs>
                    <SpecsBox>
                        <img src={IconDot} alt="Icon Dot" />
                        <StyledTextSmall>abnehmen</StyledTextSmall>
                    </SpecsBox>
                    <SpecsBox>
                        <img src={IconDot} alt="Icon Dot" />
                        <StyledTextSmall>leicht</StyledTextSmall>
                    </SpecsBox>
                    <SpecsBox>
                        <img src={IconDot} alt="Icon Dot" />
                        <StyledTextSmall>6 Wochen</StyledTextSmall>
                    </SpecsBox>
                </ProgramSpecs>
            </StyledSectionWrapper>
        </StyledProgramHeader>
    );
};

export default ProgramHeader;