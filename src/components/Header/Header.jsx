import React from "react";
import * as S from "./HeaderStyle.jsx";
import * as R from "react-router-dom";
import Home from "../Home/Home.jsx"
import Health from "../Health/Health.jsx"
import Infrastructure from "../Infrastructure/Infrastructure.jsx"
import Education from "../education/education.jsx"
import TerrestrialLife from "../Terrestrial-Life/TerrestrialLife.jsx"

export default function Header(){
    return(
        <S.HeaderContainer>
            <R.BrowserRouter>
                <S.Div>
                    <S.Title>Objetivos de Desenvolvimento Sustentável</S.Title>
                    <S.Nav>
                        <S.Ul>
                            <S.LinkStyle to="/">Home</S.LinkStyle>
                            <S.LinkStyle to="/health">Saúde e Bem-Estar</S.LinkStyle>
                            <S.LinkStyle to="/infrastructure">Indústria, inovação e infraestrutura</S.LinkStyle>
                            <S.LinkStyle to="/education">Educação de qualidade</S.LinkStyle>
                            <S.LinkStyle to="/terrestrialLife">Vida terrestre</S.LinkStyle>
                        </S.Ul>
                    </S.Nav>
                </S.Div>
                <R.Routes>
                    <R.Route path="/" element={<Home/>}/>
                    <R.Route path="/health" element={<Health/>}/>
                    <R.Route path="/infrastructure" element={<Infrastructure/>}/>
                    <R.Route path="/education" element={<Education/>}/>
                    <R.Route path="/terrestrialLife" element={<TerrestrialLife/>}/>
                </R.Routes>
            </R.BrowserRouter>
        </S.HeaderContainer>
    )
}