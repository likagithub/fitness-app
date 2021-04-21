import React from 'react';
import styled from 'styled-components';

// components
import Nav from '../nav/nav';
import ProgramSelection from './program-selection';


const StyledH2 = styled.h2`
    margin: 70px 0 25px 0;
`;

const Browse = () => {
    return (
        <>
        <section className="content">
            <StyledH2>Browse</StyledH2>
            <p className="small">Filter</p>
            <ProgramSelection />
        </section>
        <Nav />
        </>
    );
};

export default Browse;