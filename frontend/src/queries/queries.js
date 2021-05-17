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
            title
            difficulty
            duration
            focus
            description
        }
    }
`