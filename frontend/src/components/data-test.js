// import React from 'react';

// import { useQuery, gql } from '@apollo/client';


// const ALL_PROGRAMS = gql`
//     query {
//         allProgram {
//             title
//             workouts {
//                 Workout {
//                     title
//                 }
//             }
//         }
//     }
// `;


// const Test = () => {
//     const { loading, error, data } = useQuery(ALL_PROGRAMS);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error : </p>;

//     console.log(data);

//     return (
//         <>
//             <p>Success!</p>
//             <div>{data.allProgram.map(program => 
//                 <h1 key={program}>{program.title}</h1>
//             )}</div>
//         </>
//     )
// };

// export default Test;

