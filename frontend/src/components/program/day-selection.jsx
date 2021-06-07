import React from 'react';
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

// components
import DayCard from './day-card'
import Spinner from "components/elements/spinner";

//queries
import {GET_WORKOUTS_BY_PROGRAM_ID} from "queries/queries"

const DaySelection = () => {

    const {id} = useParams();

    const { loading, error, data } = useQuery(GET_WORKOUTS_BY_PROGRAM_ID, {variables:{id}});

    if (loading) return <Spinner />;
    if (error) return <p>Error</p>;
    
    console.log(data);

    return (
        <>
            {data.Program.workouts.map(workout => 
                <DayCard 
                    key={workout.Workout._id}
                    workoutId={workout.Workout._id} 
                    day={workout.day}
                    workoutTitle={workout.Workout.title}
                    calories={workout.Workout.calories}
                    duration={workout.Workout.duration}
                    categories={workout.Workout.categories} />
            )}
        </>
    )
}

export default DaySelection;