import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

// media
import IconHome from "../../images/_icons/home.svg";
import IconBrowse from "../../images/_icons/training.svg";
import IconProfile from "../../images/_icons/profile.svg";

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
    align-items: flex-end;
`

const StyledLinkBox = styled.li`
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
            <NavLink to="/browse">
                <StyledLinkBox className="navlink">
                    <img src={IconBrowse} alt="Icon Weights" />
                    Browse
                </StyledLinkBox>
            </NavLink>
            <NavLink to="/profile">
                <StyledLinkBox className="navlink">
                    <img src={IconProfile} alt="Icon Profile" />
                    Profil
                </StyledLinkBox>
            </NavLink>
        </StyledNav>
    </StyledNavbar>
);

export default Nav;