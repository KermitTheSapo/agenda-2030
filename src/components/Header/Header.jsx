import React, {useState} from "react";
import * as S from "./HeaderStyle.jsx";
import * as R from "react-router-dom";
import Home from "../Home/Home.jsx"
import Health from "../Health/Health.jsx"
import Infrastructure from "../Infrastructure/Infrastructure.jsx"
import Education from "../education/education.jsx"
import TerrestrialLife from "../Terrestrial-Life/TerrestrialLife.jsx"
import Menu from "../../assets/imgs/header/menu.svg"

export default function Header(){
    const [open, setOpen] = useState(false);

    const Modal = () => {
        setOpen(!open)
      }
    return(
        <S.HeaderContainer>
            <R.BrowserRouter>
                <S.Div>
                    <S.Title>Objetivos de Desenvolvimento Sustentável</S.Title>
                    <S.TitleMobile>ODS</S.TitleMobile>
                    <S.Nav>
                        <S.Ul>
                            <S.LinkStyle to="/">Home</S.LinkStyle>
                            <S.LinkStyle to="/health">Saúde</S.LinkStyle>
                            <S.LinkStyle to="/infrastructure">Indústria</S.LinkStyle>
                            <S.LinkStyle to="/education">Educação de qualidade</S.LinkStyle>
                            <S.LinkStyle to="/terrestrialLife">Vida terrestre</S.LinkStyle>
                        </S.Ul>
                    </S.Nav>
                    <S.Menu src={Menu} alt="" onClick={() => {Modal()}} />
                    {open && 
                    <S.NavMobile>
                        <S.UlMobile>
                            <S.LinkStyle to="/">Home</S.LinkStyle>
                            <S.LinkStyle to="/health">Saúde e Bem-Estar</S.LinkStyle>
                            <S.LinkStyle to="/infrastructure">Indústria, inovação e etc.</S.LinkStyle>
                            <S.LinkStyle to="/education">Educação de qualidade</S.LinkStyle>
                            <S.LinkStyle to="/terrestrialLife">Vida terrestre</S.LinkStyle>
                        </S.UlMobile>    
                    </S.NavMobile>}
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