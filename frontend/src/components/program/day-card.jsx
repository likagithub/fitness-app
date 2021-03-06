import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

// base styling
import { TextSmall } from 'components/base/styling';

// media
import IconFavorite from "images/_elements/favorite.svg";


const StyledDayCard = styled.article`
    background-color: ${({ theme }) => theme.colors.white};
    height: 13vh;
    border-radius: 5px;
    margin: 20px 0;
    padding: 15px 20px 15px 20px;
    display: flex;
    flex-direction: column;
`

const StyledIconFavorite = styled.img`
    height: 1rem; 
    align-self: baseline;
    margin-top: auto;
`

const DayCard = (props) => {
    return (
        <StyledDayCard>
            <Link to={{
                    pathname: `/program/${props.programId}/workout/${props.workoutId}`,
                    key: `${props.workoutId}`
                    }}>
                <p> Tag {props.day} · {props.workoutTitle} </p>
            </Link>
            <TextSmall>{props.calories} kcal · {props.duration} Min. · {props.categories}</TextSmall>
            <StyledIconFavorite src={IconFavorite} alt="Icon Weights" />
        </StyledDayCard>
    )
}

export default DayCard;