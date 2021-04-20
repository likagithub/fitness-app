import React from 'react';
import styled from 'styled-components';

// media
import WorkoutIllustration from '../../images/workout-illustration.svg';

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
                <p className="small">Trainingsplan</p>
            </HeadingBox>
            <StyledIllustration src={WorkoutIllustration}/>
            <div>
                <p>{props.workoutTitle}</p>
                <p>{props.programTitle}</p>
                <p className="small">XXX kcal · 26 Min. · Beweglichkeit</p>
            </div>
        </>
    );
};

export default WorkoutPreview;