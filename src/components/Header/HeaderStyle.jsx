import styled from "styled-components";
import { Link } from "react-router-dom"

export const HeaderContainer = styled.div`
` 

export const Title = styled.h1`
    color: var(--font);
    @media screen and (max-width: 1024px) {
        display: none;
    }
`
export const TitleMobile = styled.h1`
    color: var(--font);
    @media screen and (min-width: 1025px) {
        display: none;
    }
`

export const Div = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    background-color: var(--secondary-color);
`

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Nav = styled.nav`
    width: 50%;
    @media screen and (min-width: 1439px) {
        width: 50%;
    }
    @media screen and (max-width: 1438px) {
        width: 80%;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
    color: var(--primary-color);
    font-size: 1.5rem;
`

export const Menu = styled.img`
    @media screen and (min-width: 769px) {
        display: none;
    }
`

export const NavMobile = styled.nav`
    position: absolute;
    top: 10vh;
    z-index: 1;
    height: 25vh;
    border: solid;
    background-color: black;
    opacity: 0.8;
    width: 100%;
    @media screen and (min-width: 769px) {
        display: none;
    }
`

export const UlMobile = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`