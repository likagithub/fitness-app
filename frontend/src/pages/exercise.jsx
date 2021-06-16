import React from 'react';
import styled from 'styled-components';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'

// base styling
import { SectionWrapper } from 'components/base/styling'

//components
import ExerciseHead from "components/exercise/exercise-head"
import ExerciseInformation from "components/exercise/exercise-information"
import CountdownTimer from "components/elements/countdown-timer"



const Background = styled.div`
    background: ${({ theme }) => theme.colors.green25};
`

const StyledSectionWrapper = styled(SectionWrapper)`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height: calc(100vh - 2.75rem);
    align-items: center;
`


const Exercise = () => {
    return (
            <Background>
                <StyledSectionWrapper>
                
                    <ExerciseHead />
                    
                    <CountdownTimer />

                    <ExerciseInformation />
                
                </StyledSectionWrapper>
            </Background>
    );
};

export default Exercise;