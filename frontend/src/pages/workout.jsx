import React from 'react';
import styled from 'styled-components';

// base styling
import { SectionWrapper } from 'components/base/styling'

//components
import Button from "components/elements/button";
import WorkoutHead from "components/workout/workout-head"
import WorkoutInformation from "components/workout/workout-information"
// import WorkoutSpecs from "components/workout/workout-specs"


const Background = styled.div`
    background: ${({ theme }) => theme.colors.gradient};
`

const StyledSectionWrapper = styled(SectionWrapper)`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height: calc(100vh - 2.75rem);
    text-align: center;
`

const StyledButtonBox = styled.div`
    margin-bottom: 4rem;
`


const Workout = () => {
    return (
            <Background>
                <StyledSectionWrapper>
                
                    <WorkoutHead />

                    < WorkoutInformation />

                    <StyledButtonBox>
                        < Button buttonText="los!" buttonLink={`/exercise/`} />
                    </StyledButtonBox>
                
                </StyledSectionWrapper>
            </Background>
    );
};

export default Workout;