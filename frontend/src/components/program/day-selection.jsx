import React from 'react';

// components
import DayCard from './day-card'

const DaySelection = () => {
    return (
        <>
            <DayCard 
                dayTitle="Tag 1"
                burningCalories="XXX kcal"
                workoutDuration="26 Min." 
                workoutCategory="Beweglichkeit"
                />
            <DayCard 
                dayTitle="Tag 2"
                burningCalories="XXX kcal"
                workoutDuration="26 Min." 
                workoutCategory="Beweglichkeit"
                />
            <DayCard 
                dayTitle="Tag 3"
                burningCalories="XXX kcal"
                workoutDuration="26 Min." 
                workoutCategory="Beweglichkeit"
                />
        </>
    )
}

export default DaySelection;