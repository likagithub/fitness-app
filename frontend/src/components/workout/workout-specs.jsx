// import React from 'react';
// import { useQuery } from "@apollo/client";
// import { useParams } from "react-router-dom";


// // components
// import Spinner from "components/elements/spinner";
// import WorkoutInformation from "components/workout/workout-information";

// //queries
// import {GET_WORKOUTS_BY_PROGRAM_ID} from "queries/queries"


// const WorkoutSpecs = () => {

//     const {id} = useParams();

//     console.log(id)

//     const {loading, error, data} = useQuery(GET_WORKOUTS_BY_PROGRAM_ID, {variables:{id}});

//     if (loading) return <Spinner />
//     if (error) return <p>Error</p>

//     return (
//         <>
//             {data.Program.workouts.map(workout => 
//                 <WorkoutInformation 
//                     key={workout.Workout._id}
//                     workoutId={workout.Workout._id} 
//                     day={workout.day}
//                     workoutTitle={workout.Workout.title}
//                     calories={workout.Workout.calories}
//                     duration={workout.Workout.duration}
//                     categories={workout.Workout.categories} />
//             )}
//         </>
//     )
// }

// export default WorkoutSpecs;