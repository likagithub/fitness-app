import React from 'react';

//components
import Nav from '../nav/nav';
import WorkoutPreview from './workout-preview';
import DashboardHeader from './header';

const Dashboard = () => {
    return (
        <>
            <section className="content">
                <DashboardHeader userName="Name"/>
                <WorkoutPreview 
                    workoutTitle="Titel des Workouts" 
                    programTitle="Titel des Programms"
                    burningCalories="XXX kcal"
                    workoutDuration="26 Min." 
                    workoutCategory="Beweglichkeit"/>
            </section>
            <Nav />
        </>
    );
};

export default Dashboard;