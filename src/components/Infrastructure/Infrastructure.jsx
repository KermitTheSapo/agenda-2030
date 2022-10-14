import React from "react"
import * as S from "./InfrastructureStyle.jsx"
import InfrastructureImg from "../../assets/imgs/infrastructure.svg"

export default function Infrastructure() {
    return(
        <S.Div>
            <S.Top>
                <picture>
                    <S.Img src={InfrastructureImg} alt="" />
                </picture>
                <div>
                    <h1>Indústria, inovação e infraestrutura</h1>
                    <p>Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação</p>                  
                </div>
            </S.Top>
            <S.Nav>
                <S.Ul>
                    <li>9.1 Desenvolver infraestrutura de qualidade, confiável, sustentável e resiliente, incluindo infraestrutura regional e transfronteiriça, para apoiar o desenvolvimento econômico e o bem-estar humano, com foco no acesso equitativo e a preços acessíveis para todos</li>
                    <li>9.2 Promover a industrialização inclusiva e sustentável e, até 2030, aumentar significativamente a participação da indústria no setor de emprego e no PIB, de acordo com as circunstâncias nacionais, e dobrar sua participação nos países menos desenvolvidos</li>
                    <li>9.3 Aumentar o acesso das pequenas indústrias e outras empresas, particularmente em países em desenvolvimento, aos serviços financeiros, incluindo crédito acessível e sua integração em cadeias de valor e mercados</li>
                    <a href="">Clique mais para saber!</a>
                </S.Ul>
            </S.Nav>                      
            <S.Article>
                <h2>Paulista instala pontilhão para facilitar o acesso entre Maranguape II e Jaguarana</h2>
                <p>A Secretaria de Obras e Serviços Públicos do Paulista está realizando a instalação de um novo pontilhão na Rua 33, em Maranguape II, sobre o canal que liga o bairro à PE-22. A estrutura vai facilitar a conexão com a comunidade de Jaguarana.</p>
                <p>O equipamento irá encurtar a distância entre os dois lugares, permitindo que o público possa efetuar a travessia pela PE-22, onde foi colocado um semáforo de pedestre.</p>
                <a href="">Clique mais para saber!</a>
            </S.Article>
        </S.Div>
    )
}