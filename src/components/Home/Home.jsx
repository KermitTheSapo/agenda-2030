import React from "react";
import * as S from "./HomeStyle"
import Ods from "../../assets/imgs/home/ODS.png"

export default function Home(){
    return(
        <S.Div>
            <h1>Home</h1>
            <p>Um site que mostra alguns exemplos de Objetivos de Desenvolvimento Sustentável que estão sendo realizados no bairro de Maranguape I, Paulista, Recife-PE</p>
            <img src={Ods} alt="" />
        </S.Div>
    )
}