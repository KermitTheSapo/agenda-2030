import React from "react"
import * as S from "./TerrestrialLifeStyle.jsx"
import TerrestrialLifeImg from "../../assets/imgs/terrestrialLife/TerrestrialLifeImg.png"

export default function TerrestrialLife() {
    return(
        <S.Div>
            <S.Top>
                <picture>
                    <S.Img src={TerrestrialLifeImg} alt="" />
                </picture>
                <div>
                    <h1>Vida terrestre</h1>
                    <p>Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, travar e reverter a degradação dos solos e travar a perda da biodiversidade</p>                  
                </div>
            </S.Top>
            <S.Nav>
                <S.Ul>
                    <li>15.1 Até 2020, assegurar a conservação, recuperação e uso sustentável de ecossistemas terrestres e de água doce interiores e seus serviços, em especial florestas, zonas úmidas, montanhas e terras áridas, em conformidade com as obrigações decorrentes dos acordos internacionais</li>
                    <li>15.2 Até 2020, promover a implementação da gestão sustentável de todos os tipos de florestas, deter o desmatamento, restaurar florestas degradadas e aumentar substancialmente o florestamento e o reflorestamento globalmente</li>
                    <li>15.3 Até 2030, combater a desertificação, restaurar a terra e o solo degradado, incluindo terrenos afetados pela desertificação, secas e inundações, e lutar para alcançar um mundo neutro em termos de degradação do solo</li>
                    <a href="https://brasil.un.org/pt-br/sdgs/15" target="_blank">Clique mais para saber!</a>
                </S.Ul>
            </S.Nav>                      
            <S.Article>
                <h2>Meio Ambiente do Paulista coíbe ações irregulares no Parque Natural da Mata do Frio</h2>
                <p>A Secretaria de Desenvolvimento Urbano, Tecnologia e Meio Ambiente do Paulista (SEDURTMA) fechou nesta sexta-feira (14.10) o acesso ao Parque Natural da Mata do Frio pela Estrada da Mirueira, dando sequência às ações de preservação da fauna e flora existentes na unidade de conservação.</p>
                <p>Na ocasião, as equipes realizaram a retirada de cercas clandestinas. Foi executada, também, a remoção de plantios de espécies invasoras e que caracterizavam o uso da terra, bem como construções irregulares e apreensão de cavalos, através da Vigilância Ambiental.</p>
                <a href="https://www.paulista.pe.gov.br/site/noticias/detalhes/10001" target="_blank">Clique mais para saber!</a>
            </S.Article>
        </S.Div>
    )
}