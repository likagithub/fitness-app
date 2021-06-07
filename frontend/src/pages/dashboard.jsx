import React from 'react';

// base styling
import { ContentWrapper } from 'components/base/styling';

//components
import Nav from 'components/nav/nav';
import WorkoutPreview from 'components/dashboard/workout-preview';
import DashboardHeader from 'components/dashboard/header';

const Dashboard = () => {
    return (
        <>
            <ContentWrapper>
                <DashboardHeader userName="Name"/>
                <WorkoutPreview />
            </ContentWrapper>
            <Nav />
        </>
    );
};

export default Dashboard;