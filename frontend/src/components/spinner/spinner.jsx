import React from 'react';

import styled from 'styled-components';


// const Wrapper = styled.div`
//     padding: 0;
//     margin: 0 auto 10rem;
//     text-align: center;
//     max-width: 40rem;
// `

const Container = styled.div`
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Loading= styled.span`
    pointer-events: none;
	width: 2.5em;
	height: 2.5em;
	border: 0.4em solid transparent;
	border-top-color: #1D2A73;
	border-radius: 50%;
	animation: spin .8s linear infinite;
    
    @keyframes spin {
    to {
        transform: rotate(360deg);
    }
}`

const Spinner = () => (
    // <Wrapper>
        <Container>
            <Loading />
        </Container>
    // </Wrapper>
    )

export default Spinner;
