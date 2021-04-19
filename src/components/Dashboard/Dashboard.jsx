import React from 'react';
import styled from 'styled-components';
import WorkoutIllustration from '../../images/workout-illustration.svg';

const ContentWrapper = styled.section`
    margin-top: 70px;
`;

const StyledIllustration = styled.img`
    width: 100%;
    height: auto;
`;

const Dashboard = () => {
    return (
        <ContentWrapper>
            <h1>Guten Morgen, user Name</h1>
            <h2>Dein Workout heute</h2>
            <StyledIllustration src={WorkoutIllustration}/>
            <p>Titel des Workouts</p>
            <p>Titel des Programms</p>
            <p className="small">XXX kcal · 26 Min. · Beweglichkeit</p>
        </ContentWrapper>
    );
};

export default Dashboard;