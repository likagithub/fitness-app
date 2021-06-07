import { gql } from "@apollo/client";

export const GET_PROGRAMS = gql`
    query allProgramsQuery {
        allProgram {
            _id
            title
            workouts {
                Workout {
                    title
                }
            }
        }
    }
`

export const GET_PROGRAM_BY_ID = gql`
    query programByIdQuery ($id: ID!){
        Program (id: $id) {
            _id
            title
            difficulty
            duration
            focus
            description
            workouts { 
                _key 
                day
                Workout {
                    _id
                    title
                    duration
                    calories
                    categories
                    description
                    exercises {
                        __typename
                    }
                }
            }
        }
    }
`

export const GET_WORKOUTS_BY_PROGRAM_ID = gql`
    query workoutByProgramIdQuery ($id: ID!){
        Program (id: $id) {
            _id
            slug {
                current
            }
            workouts { 
                _key 
                day
                Workout {
                    _id
                    title
                    duration
                    calories
                    categories
                    description
                    exercises {
                        __typename
                    }
                }
            }
        }
    }
`

export const GET_WORKOUT_BY_ID = gql`
    query WorkoutByIdQuery ($id: ID!) {
        Workout (id: $id) {
            _id
            title
            calories
            duration
            categories
            exercises {
            ... on ExerciseWithDuration {
                duration
                exercise {
                    _id
                    title
                    }
                }
            ... on ExerciseWithReps {
                reps
                exercise {
                    _id
                    title
                    }
                }
            }
            image {
                asset {
                url
                altText
                }
            }
        }
    }
`