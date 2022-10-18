import React from "react"
import * as S from "./educationStyle"
import EducationImg from "../../assets/imgs/education/educationIcon.png"

export default function Education() {
    return(
        <S.Div>
            <S.Top>
                <picture>
                    <S.Img src={EducationImg} alt="" />
                </picture>
                <div>
                    <h1>Educação de qualidade</h1>
                    <p>Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos</p>                  
                </div>
            </S.Top>
            <S.Nav>
                <S.Ul>
                    <li>4.1 Até 2030, garantir que todas as meninas e meninos completem o ensino primário e secundário livre, equitativo e de qualidade, que conduza a resultados de aprendizagem relevantes e eficazes</li>
                    <li>4.2 Até 2030, garantir que todos as meninas e meninos tenham acesso a um desenvolvimento de qualidade na primeira infância, cuidados e educação pré-escolar, de modo que eles estejam prontos para o ensino primário</li>
                    <li>4.3 Até 2030, assegurar a igualdade de acesso para todos os homens e mulheres à educação técnica, profissional e superior de qualidade, a preços acessíveis, incluindo universidade</li>
                    <a href="https://brasil.un.org/pt-br/sdgs/4" target="_blank">Clique mais para saber!</a>
                </S.Ul>
            </S.Nav>                      
            <S.Article>
                <h2>Alunos de escola com melhor IDEB, em Paulista, são presenteados com sessão de cinema</h2>
                <p>Estudantes da educação infantil e ensino fundamental da Escola Alga Marina, que ficou em primeiro lugar no Índice de Desenvolvimento da Educação Básica (IDEB), de 2021, com 6.0, na Rede Municipal do Paulista, foram presentados com uma sessão de cinema. O grupo assistiu aos filmes Patrulha Canina - o Filme, Sonic 2 e Homem Aranha de Volta para Casa, nas salas de cinema do Shopping Paulista North Way.</p>
                <p>A gestora da escola, Jussara Benevides, comentou que a princípio, o cinema foi pensado como uma aula extraclasse e como culminância da semana da criança. A adesão e a alegria experimentada pelas crianças, a confiança dos pais e a oportunidade oferecida aos alunos que nunca foram ao cinema, foi encantador. E finalizou, "A equipe gestora junto com professores, estagiárias e funcionários que participaram e colaboraram com o  evento, sendo  o marco para o sucesso dessa ação".</p>
                <a href="https://www.paulista.pe.gov.br/site/noticias/detalhes/10008" target="_blank">Clique mais para saber!</a>
            </S.Article>
        </S.Div>
    )
}