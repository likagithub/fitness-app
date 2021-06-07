import React from 'react';
import styled from 'styled-components';

// base styling
import { TextSmall } from 'components/base/styling'

// media
import IconDot from "images/_icons/dot.svg";

const StyledTextSmall = styled(TextSmall)`
    text-transform: uppercase;
    margin-top: 5px;
`

const StyledSpecsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SpecsBox = (props) => {
    return (
        <StyledSpecsBox>
            <img src={IconDot} alt="Icon Dot" />
            <StyledTextSmall>{props.spec} {props.weeks}</StyledTextSmall>
        </StyledSpecsBox>
    );
};

export default SpecsBox;