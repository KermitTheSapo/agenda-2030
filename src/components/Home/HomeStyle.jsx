import styled from "styled-components"

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: var(--third-color);
    height: 90vh;
`

export const Img = styled.img`
    width: 90%;
    @media screen and (min-width: 1000px) {
        width: 60%;
    }
`