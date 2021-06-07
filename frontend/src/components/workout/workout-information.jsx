import React from 'react';
import styled from 'styled-components';
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

//components
import { TextSmall } from "components/base/styling";
import Spinner from "components/elements/spinner";

//queries
import {GET_WORKOUT_BY_ID} from "queries/queries"


const StyledH1 = styled.h1`
    margin-top: 4rem;
    margin-bottom: 1rem;
`


const WorkoutInformation = () => {

    const {id} = useParams();

    const { loading, error, data } = useQuery(GET_WORKOUT_BY_ID, {variables:{id}});

    if (loading) return <Spinner />;
    if (error) return <p>Error</p>;
    
    console.log(data)

    return (
            <div>
                <StyledH1> {data.Workout.title} </StyledH1>
                <TextSmall>{data.Workout.calories} kcal · {data.Workout.duration} Min. · {data.Workout.categories}</TextSmall>
            </div>
    )
}

export default WorkoutInformation;