import React from 'react';
import styled from 'styled-components';

// base styling
import { TextSmall } from '../base/styling';

// media
import IconFavorite from "../../images/_elements/favorite.svg";

const StyledProgramCard = styled.article`
    background-color: ${({ theme }) => theme.colors.beige};
    height: 25vh;
    border-radius: 5px;
    margin: 20px 0;
    padding: 15px 20px 15px 20px;
    text-align: center;
`

const ContentBox = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProgramCard = () => {
    return (
        <>
            <StyledProgramCard>
                <ContentBox>
                    <img src={IconFavorite} alt="Icon Weights" />
                    <TextSmall>Neu</TextSmall>
                </ContentBox>
                <h2>Titel des Programms</h2>
            </StyledProgramCard>
        </>
    )
}

export default ProgramCard;