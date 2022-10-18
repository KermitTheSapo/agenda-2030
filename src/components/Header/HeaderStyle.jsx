import styled from "styled-components";
import { Link } from "react-router-dom"

export const HeaderContainer = styled.div`
` 

export const Title = styled.h1`
    color: var(--font);
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
    width: 70%;
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
    color: var(--primary-color);
    font-size: 1.5rem;
`