import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    max-width: 245px;
    margin: 70px 0 50px 0;
`;

const DashboardHeader = (props) => {
    return (
        <StyledH1>Guten Morgen, {props.userName}</StyledH1>
    )
}

export default DashboardHeader;