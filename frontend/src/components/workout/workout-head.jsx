import React from 'react';
import styled from 'styled-components';
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

// media
import ArrowBack from "images/_elements/arrow-back.svg";

//components
import { TextSmall } from "components/base/styling";
import Spinner from "components/elements/spinner";

//queries
import {GET_PROGRAM_BY_ID} from "queries/queries"

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


const WorkoutHead = () => {

    let history = useHistory();

    const {programId} = useParams();

    const { loading, error, data } = useQuery(GET_PROGRAM_BY_ID, {variables:{id:programId}});

    console.log(programId)
    console.log(error)

    if (loading) return <Spinner />;
    if (error) return <p>Error</p>;
    
    

    return (

                <Wrapper>
                    <StyledTextSmall>{data.Program.title}</StyledTextSmall>

                    <StyledElement onClick={() => history.goBack()}>
                        <img src={ArrowBack} alt="Icon Close" />
                    </StyledElement>

                </Wrapper>

    );
};

export default WorkoutHead;