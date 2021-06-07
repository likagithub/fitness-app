import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

//components
import { TextSmall } from "components/base/styling";

const StyledTextSmall = styled(TextSmall)`
    display: inline-block;
    vertical-align: super;
`


const ExerciseHead = () => {

    let history = useHistory();

    return (

                <div>
                    <StyledTextSmall onClick={() => history.goBack()}>beenden</StyledTextSmall>
                </div>

    );
};

export default ExerciseHead;