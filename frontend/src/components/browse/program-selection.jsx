import React from 'react';
import { useQuery } from "@apollo/client";

// components
import ProgramCard from './program-card'

//components
import Spinner from "components/spinner/spinner";

//queries
import {GET_PROGRAMS} from "queries/queries"

const ProgramSelection = () => {
    const { loading, error, data } = useQuery(GET_PROGRAMS);

    if (loading) return <Spinner />;
    if (error) return <p>Error</p>;
    
    console.log(data);

    return (
        <>
            {data.allProgram.map(program => 
                <ProgramCard title={program.title} id={program._id} key={program._id} />
            )}
        </>
    )
}

export default ProgramSelection;