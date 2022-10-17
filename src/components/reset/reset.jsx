import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

    }
    &:root{
        --primary-color: #009EDB;
        --secondary-color: #D9E5D6;
        --third-color: #EDDEA4;
        --health-color: #E4FDE1;
        --infrastructure-color: #C2CFB2;
        --font: black;
    }
`

