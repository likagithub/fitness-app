import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

// media
import ArrowBack from "images/_elements/arrow-back.svg";

//components
import { TextSmall } from "components/base/styling";

const StyledElement = styled.button`
    margin-left: auto;
    float: right;
    cursor: pointer;
    background-color: transparent;
`

const StyledTextSmall = styled(TextSmall)`
    display: inline-block;
    vertical-align: super;
`

const Wrapper = styled.div`
    padding-left: 21px;
`


const WorkoutHead = (props) => {

    let history = useHistory();

    return (

                <Wrapper>
                    <StyledTextSmall>Titel des Programms</StyledTextSmall>

                    <StyledElement onClick={() => history.goBack()}>
                        <img src={ArrowBack} alt="Icon Close" />
                    </StyledElement>

                </Wrapper>

    );
};

export default WorkoutHead;