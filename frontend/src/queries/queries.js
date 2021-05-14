
import { gql } from "@apollo/client";

const GET_PROGRAMS = gql`
    query allProgramQuery {
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