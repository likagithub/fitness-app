import React from 'react';

import styled from 'styled-components';


const Wrapper = styled.div`
    padding: 0;
    margin: 0 auto 10rem;
    text-align: center;
    max-width: 40rem;
`
const Container = styled.div`
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Loading= styled.span`
    position: relative;
    display: inline-block;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    border-top: 3px solid #1D2A73;
        animation: spin 1.2s infinite linear;
    @keyframes spin {
    to {
        transform: rotate(360deg);
    }
}`

const Spinner = () => (
    <Wrapper>
        <Container>
            <Loading />
        </Container>
    </Wrapper>
    )

export default Spinner;
