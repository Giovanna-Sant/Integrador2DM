import "./home.css"
import Brands from "../../components/Brands/Brands"

const Home = () => {
    return (
        <div className="home">
            <div id="planos-cont">
                <p className="cor-0 fonte-subtitulos">Confira e assine nossos planos!</p>
            <div className="planos">
                <div className="cor-0 bronze">
                    <h1 className="fonte-05">BRONZE</h1>
                    <h2  className="fonte-gerais">R$ <span className="fonte-subtitulos">55,90</span>/mês</h2>

                    <div className="beneficios">
                        <p>Acesso a mais de 20 redes de academia</p>
                        <p>Avaliação física semestral</p>
                        <p>Acesso a 1 modalidade escolhida</p>
                    </div>

                    <button className="cor-0 fonte-gerais">Assinar</button>
                </div>

                <div className="cor-7 ouro">
                    <h1 className="fonte-05">OURO</h1>
                    <h2 className="fonte-gerais">R$ <span className="fonte-subtitulos">120,90</span>/mês</h2>
                    <img src="src\img\Icons\medalha.svg" alt="icon de medalha roxo"/>

                    <div className="beneficios">
                        <p>Todos os benefícios dos planos INFERIORES</p>
                        <p>Desconto em suplementos <strong>Growth™</strong></p>
                        <p>Acompanhamento de Personal Trainer</p>
                        <p>Acesso a todas as modalidades</p>
                    </div>

                    <button className="cor-0 fonte-gerais">Assinar</button>
                </div>

                <div className="cor-0 prata">
                    <h1 className="fonte-05">PRATA</h1>
                    <h2  className="fonte-gerais">R$ <span className="fonte-subtitulos">79,90</span>/mês</h2>

                    <div className="beneficios">
                        <p>Todos os benefícios do plano bronze</p>
                        <p>Assistência Nutricional</p>
                        <p>Avaliação física mensal</p>
                        <p>Acesso a 2 modalidades escolhidas</p>
                    </div>

                    <button className="cor-0 fonte-gerais">Assinar</button>
                </div>
            </div>
        </div>

        <Brands/>
        <div className="confira">
            <img src="src\img\Background\sobre.jpg" alt="Homem em posição de agachamento com rosto pintado prestes a levantar peso"></img>
            <div className="sobre-info">
                <p className="cor-0 fonte-03">CONHEÇA NOSSA</p>
                <p className="cor-3 fonte-04">COMPANHIA</p>

                <p className="cor-0 fonte-gerais txt">Nossa missão é ser uma companhia de assinatura de planos referência em <span className="cor-3">acessibilidade</span>. Para isso, contamos com uma equipe <span className="cor-3">diversa</span>. Confira!</p>
                <a to='/'>
                <button className="cor-0 fonte-gerais">Sobre nós</button>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Home