import React from 'react';
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

// base styling
import { SectionWrapper, BackgroundBeige } from 'components/base/styling';

//components
import Spinner from "components/elements/spinner";

//queries
import {GET_PROGRAM_BY_ID} from "queries/queries"

const ProgramDescription = () => {

    const {id} = useParams();

    console.log(id)

    const {loading, error, data} = useQuery(GET_PROGRAM_BY_ID, {variables:{id}});

    if (loading) return <Spinner />
    if (error) return <p>Error</p>


    return (
        <BackgroundBeige>
            <SectionWrapper>
                <p>{data.Program.description}</p>
            </SectionWrapper>
        </BackgroundBeige>
    );
};

export default ProgramDescription;