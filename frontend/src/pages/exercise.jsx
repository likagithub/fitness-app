import React from 'react';
import styled from 'styled-components';

// base styling
import { SectionWrapper } from 'components/base/styling'

//components
import ExerciseHead from "components/exercise/exercise-head"
import ExerciseInformation from "components/exercise/exercise-information"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


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
                    
                    <CountdownCircleTimer
                        isPlaying
                        duration={30}
                        colors={[
                        ['#1D2A73'],
                        ]}
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>

                    <ExerciseInformation/>
                
                </StyledSectionWrapper>
            </Background>
    );
};

export default Exercise;