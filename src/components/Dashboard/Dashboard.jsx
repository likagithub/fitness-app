import React from 'react';
import styled from 'styled-components';
import { Route } from "react-router-dom";

//components
import Nav from '../nav/nav';
import WorkoutPreview from './workout-preview';
import DashboardHeader from './header';

const ContentWrapper = styled.section`
    width: 90vw;
    margin: 0 auto;
`;

const Dashboard = () => {
    return (
        <>
            <ContentWrapper>
                <DashboardHeader userName="Name"/>
                <WorkoutPreview workoutTitle="Titel des Workouts" programTitle="Titel des Programms" />
            </ContentWrapper>
            <Nav>
                <Route path="/" component={Nav} />
            </Nav>
        </>
    );
};

export default Dashboard;