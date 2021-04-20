import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

// media
import IconHome from "../../images/_icons/home.svg";

const StyledNavbar = styled.nav`
    background-color: ${({ theme }) => theme.colors.beige};
    bottom: 0;
    position: fixed;
    width: 100vw;
`

const StyledNav = styled.ul`
    list-style-type: none;
    width: 90vw;
    margin: 10px auto;
    display: flex;
    justify-content: space-around;
`

const StyledLinkBox = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Nav = () => (
    <StyledNavbar>
        <StyledNav>
            <NavLink to="/">
                <StyledLinkBox className="navlink">
                    <img src={IconHome} alt="Icon Home" />
                    Home
                </StyledLinkBox>
            </NavLink>
        </StyledNav>
    </StyledNavbar>
);

export default Nav;