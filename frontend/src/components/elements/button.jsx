import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

// const Container = styled.div`
//     height: 15rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `

const LinkButton = styled(Link)`
    background-color: ${({ theme }) => theme.colors.navy};
    border: none;
    border-radius: 50px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.p};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: 14px;
`

const Button = (props) => (
        <>
            <LinkButton to={props.buttonLink}>
                {props.buttonText}
            </LinkButton>
        </>
    )

export default Button;
