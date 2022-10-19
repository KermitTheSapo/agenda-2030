import styled from "styled-components"


export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 90vh;
    background-color: var(--infrastructure-color);
    @media screen and (max-width: 768px) {
        height: 160vh;
    }
    @media screen and (max-width: 325px) {
        height: 180vh;
    }
`

export const Img = styled.img`
    height: 5vh;    
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 80%;
    }
`
export const Nav = styled.nav`
    width:80%;
`

export const Ul = styled.ul`
    width:100%;
    list-style: none;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
    height: 15vh;
    @media screen and (max-width: 768px) {
        height: 30vh;
    }
    @media screen and (max-width: 375px) {
        height: 40vh;
    }
`

export const Article = styled.article`
    width:80%;
    list-style: none;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
    height: 15vh;
    @media screen and (max-width: 768px) {
        height: 30vh;
    }
    @media screen and (max-width: 375px) {
        height: 40vh;
    }
`