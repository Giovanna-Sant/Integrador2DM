import "./home.css"

const Home = () => {
    return (
        <div className="home">
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

                    <div className="beneficios">
                        <p>Todos os benefícios dos planos INFERIORES</p>
                        <p>Desconto em suplementos <strong>Growth™</strong></p>
                        <p>Acompanhemento de Personal Trainer</p>
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
    )
}

export default Home