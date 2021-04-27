import React from 'react';
import styled from 'styled-components';

// media
import WorkoutIllustration from '../../images/workout-illustration.svg';

// base styling
import { TextSmall } from '../base/styling'

const StyledIllustration = styled.img`
    width: 100%;
    height: auto;
    margin: 10px auto;
`;

const HeadingBox = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

const WorkoutPreview = (props) => {
    return (
        <>
            <HeadingBox>
                <h2>Dein Workout heute</h2>
                <TextSmall>Trainingsplan</TextSmall>
            </HeadingBox>
            <StyledIllustration src={WorkoutIllustration}/>
            <div>
                <p>{props.workoutTitle}</p>
                <p>{props.programTitle}</p>
                <TextSmall>{props.burningCalories} · {props.workoutDuration} · {props.workoutCategory}</TextSmall>
            </div>
        </>
    );
};

export default WorkoutPreview;