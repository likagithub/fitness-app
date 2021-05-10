import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

// base styling
import { TextSmall } from 'components/base/styling';

// media
import IconFavorite from "images/_elements/favorite.svg";

const StyledProgramCard = styled.article`
    background-color: ${({ theme }) => theme.colors.beige};
    height: 25vh;
    border-radius: 5px;
    margin: 20px 0;
    padding: 15px 20px 15px 20px;
    text-align: center;
`

const TopBox = styled.div`
    display: flex;
    justify-content: space-between;
`

const TitleBox = styled.div`
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const ProgramCard = (props) => {
    return (
        <StyledProgramCard>
            <TopBox>
                <img src={IconFavorite} alt="Icon Weights" />
                <TextSmall>Neu</TextSmall>
            </TopBox>
            <TitleBox>
                <Link to="/program">
                    <h2>{props.programTitle}</h2>
                </Link>
            </TitleBox>
        </StyledProgramCard>
    )
}

export default ProgramCard;