import React from "react";
import * as S from "./HeaderStyle.jsx";
import * as R from "react-router-dom";
import Gender from "../Gender/Gender.jsx"
import Health from "../Health/Health.jsx"
import Infrastructure from "../Infrastructure/Infrastructure.jsx"

export default function Header(){
    return(
        <S.HeaderContainer>
            <R.BrowserRouter>
                <S.Title>Objetivos de Desenvolvimento Sustentável</S.Title>
                <nav>
                    <ul>
                        <R.Link to="/">Igualdade de gênero</R.Link>
                        <R.Link to="/health">Saúde e Bem-Estar</R.Link>
                        <R.Link to="/infrastructure">Indústria, inovação e infraestrutura</R.Link>
                    </ul>
                </nav>
                <R.Routes>
                    <R.Route path="/" element={<Gender/>}/>
                    <R.Route path="/health" element={<Health/>}/>
                    <R.Route path="/infrastructure" element={<Infrastructure/>}/>
                </R.Routes>
            </R.BrowserRouter>
        </S.HeaderContainer>
    )
}