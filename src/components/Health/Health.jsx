import React from "react"
import * as S from "./HealthStyle.jsx"
import HealthImg from "../../assets/imgs/health.svg"

export default function Health() {
    return(
        <S.Div>
            <S.Top>
                <figure>
                    <S.Img src={HealthImg} alt="" />
                </figure>
                <div>
                    <h1>Saúde e Bem-Estar</h1>
                    <p>Garantir o acesso à saúde de qualidade e promover o bem-estar para todos, em todas as idades</p>
                </div>
            </S.Top>
            <S.Ul>
                <li>3.1 Até 2030, reduzir a taxa de mortalidade materna global para menos de 70 mortes por 100.000 nascidos vivos</li>
                <li>3.2 Até 2030, acabar com as mortes evitáveis de recém-nascidos e crianças menores de 5 anos, com todos os países objetivando reduzir a mortalidade neonatal para pelo menos 12 por 1.000 nascidos vivos e a mortalidade de crianças menores de 5 anos para pelo menos 25 por 1.000 nascidos vivos</li>
                <li>3.3 Até 2030, acabar com as epidemias de AIDS, tuberculose, malária e doenças tropicais negligenciadas, e combater a hepatite, doenças transmitidas pela água, e outras doenças transmissíveis</li>
                <a href="">Clique mais para saber!</a>
            </S.Ul>
            <S.Article>
                <h2>Saúde do Paulista incentiva procura por vacina contra a poliomielite</h2>
                <p>Em Paulista, a Secretaria Municipal de Saúde irá realizar, de 17 a 21 de outubro, uma programação de vacinação contra a poliomielite, no Paulista North Way Shopping, no Centro, das 9h às 16h. A iniciativa tem como objetivo incentivar a procura pela vacina, que tem sido baixa desde quando começou a campanha nacional de vacinação contra a pólio. Na ocasião, a gestão também aplicará outras vacinas de rotina, como parte da campanha de atualização do cartão das crianças.</p>
                <p>Em Paulista, a Secretaria Municipal de Saúde irá realizar, de 17 a 21 de outubro, uma programação de vacinação contra a poliomielite, no Paulista North Way Shopping, no Centro, das 9h às 16h. A iniciativa tem como objetivo incentivar a procura pela vacina, que tem sido baixa desde quando começou a campanha nacional de vacinação contra a pólio. Na ocasião, a gestão também aplicará outras vacinas de rotina, como parte da campanha de atualização do cartão das crianças.</p>
                <a href="">Clique mais para saber!</a>
            </S.Article>
        </S.Div>

    )
}