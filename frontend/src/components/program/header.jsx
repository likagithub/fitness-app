import React from 'react';
import styled from 'styled-components';
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// base styling
import { SectionWrapper } from 'components/base/styling'

// media
import IconClose from "images/_elements/close.svg";

//components
import Spinner from "components/elements/spinner";
import Button from "components/elements/button";
import SpecsBox from "./header-specs";

//queries
import {GET_PROGRAM_BY_ID} from "queries/queries"


const StyledProgramHeader = styled.header`
    background: ${({ theme }) => theme.colors.gradient};
`

const StyledSectionWrapper = styled(SectionWrapper)`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    height: 80vh;
    text-align: center;
`

const StyledClosingLink = styled(Link)`
    height: 1.25rem;
    align-self: flex-end;
`

const StyledH1 = styled.h1`
    padding-top: 6rem;
`

const ProgramSpecs = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3.5rem;
`


const ProgramHeader = () => {

    const {id} = useParams();

    console.log(id)

    const {loading, error, data} = useQuery(GET_PROGRAM_BY_ID, {variables:{id}});

    if (loading) return <Spinner />
    if (error) return <p>Error</p>


    return (
        <StyledProgramHeader>
            <StyledSectionWrapper>

                <StyledClosingLink to="/browse">
                    <img src={IconClose} alt="Icon Close" />
                </StyledClosingLink>

                <StyledH1>{data.Program.title}</StyledH1>

                <div>
                    < Button buttonText="jetzt starten" buttonLink={`/program/${data.Program._id}/workout/${data.Program.workouts[0].Workout._id}`}/>

                    <ProgramSpecs>
                        <SpecsBox spec={data.Program.focus} />
                        <SpecsBox spec={data.Program.difficulty} />
                        <SpecsBox spec={data.Program.duration} weeks="Wochen" />
                    </ProgramSpecs>
                </div>

            </StyledSectionWrapper>
        </StyledProgramHeader>
    );
};

export default ProgramHeader;