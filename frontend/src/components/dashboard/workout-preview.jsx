import React from 'react';
import styled from 'styled-components';
import { useQuery } from "@apollo/client";

// media
import WorkoutIllustration from 'images/workout-illustration.svg';

// base styling
import { TextSmall, HeadingBox } from 'components/base/styling'

//components
import Spinner from "components/elements/spinner";

//queries
import {GET_WORKOUT_BY_ID} from "queries/queries"
import {GET_PROGRAM_BY_ID} from "queries/queries"

const StyledIllustration = styled.img`
    width: 100%;
    height: auto;
    margin: 10px auto;
`;

const WorkoutPreview = (props) => {

    const todaysWorkoutId = "7d586325-703d-4215-bdef-4ca753564bf3";
    const todaysWorkoutProgramId = "bc9e4626-7876-4a1b-9329-11eb088f7735";

    const {loading, error, data} = useQuery(GET_WORKOUT_BY_ID, {
        variables: { id: todaysWorkoutId }});
    
    const {loading: loadingP, error: errorP, data: dataP} = useQuery(GET_PROGRAM_BY_ID, {
        variables: { id: todaysWorkoutProgramId }});

        if (loading || loadingP) return <Spinner />
        if (error || errorP) return <p>Error</p>


    return (
        <>
            <HeadingBox>
                <h2>Dein Workout heute</h2>
                <TextSmall>Trainingsplan</TextSmall>
            </HeadingBox>
            <StyledIllustration src={WorkoutIllustration}/>
            <div>
                <p>{data.Workout.title}</p>
                <p>{dataP.Program.title}</p>
                <TextSmall>{data.Workout.calories} kcal · {data.Workout.duration} Min. · {data.Workout.categories}</TextSmall>
            </div>
        </>
    );
};

export default WorkoutPreview;