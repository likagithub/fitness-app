import React from 'react';

import { useQuery, gql } from '@apollo/client';
// import program from '../../../backend/fitness-sanity-backend/schemas/program';


const ALL_PROGRAMS = gql`
    query {
        allProgram {
            title
            workouts {
                Workout {
                    title
                }
            }
        }
    }
`;


const Test = () => {
    const { loading, error, data } = useQuery(ALL_PROGRAMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : </p>;

    console.log(data);

    return (
        <>
            <p>Success!</p>
            <div>{data.allProgram.map(program => 
                <h1 key={program}>{program.title}</h1>
            )}</div>
            <div>{data.allProgram.map(program => 
                <p key={program}>{program.title.workouts.Workout.title}</p>
            )}</div>
        </>
    )
};

// const WORKOUT_QUERY = gql`
//     {
//         allProgram {
//             title
//             workouts {
//                 Workout {
//                 title
//                 }
//             }
//         }
//     }
// `

// const Test = () => {
//     return (
//     <h1 query={WORKOUT_QUERY}> {({loading, data}) => {
//                 if (loading) return "loading...";
//                 const { allProgram } = data;
//                 allProgram.map(Program => <h1>{program.title}</h1>)
//             }}
//             </h1>

//     );
// };

export default Test;

