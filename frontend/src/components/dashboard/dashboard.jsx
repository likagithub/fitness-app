import React from 'react';

// base styling
import { ContentWrapper } from 'components/base/styling';

//components
import Nav from 'components/nav/nav';
import WorkoutPreview from './workout-preview';
import DashboardHeader from './header';

const Dashboard = () => {
    return (
        <>
            <ContentWrapper>
                <DashboardHeader userName="Name"/>
                <WorkoutPreview 
                    workoutTitle="Titel des Workouts" 
                    programTitle="Titel des Programms"
                    burningCalories="XXX kcal"
                    workoutDuration="26 Min." 
                    workoutCategory="Beweglichkeit"/>
            </ContentWrapper>
            <Nav />
        </>
    );
};

export default Dashboard;