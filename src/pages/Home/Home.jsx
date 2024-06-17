import "./home.css"
import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Brands from "../../components/Brands/Brands"
import Footer from "../../components/Footer/Footer"

import medalha from "../../img/Icons/medalha.svg"
import sobreimg from "../../img/Background/sobre.jpg"
import Planos from "../Planos/components/Context/Context"
import Loading from "../../components/Loading/Loading"
import { useEffect, useState } from "react"

const Home = () => {
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div>
            {isLoading ? (
                <div className="loading-container">
                    <Loading />
                </div>
            ): (
            <div className="home">
                <div className="img-background-home">
                    <Header/>
                    <div className="info">
                    <p className="cor-0 fonte-gerais">Conheça nossos planos!</p>
                    <p className="cor-3 fonte-03">ASSINATURAS</p>
                    <p className="cor-0 fonte-04">EM ACADEMIAS</p>

                    <p className="cor-0 fonte-gerais txt">Nosso compromisso é com você e <span className="cor-3">seu bem-estar</span>. O GymRats pode <span className="cor-3">transformar sua rotina</span> de exercícios em uma experiência mais rica e diversificada.</p>
                    <Link to='/planos'>
                    <button className="cor-0 fonte-gerais btn-home">Seja membro</button>
                    </Link>
                    </div>
                </div>
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

                        <Link to='/pagamento' onClick={Planos.setBronze}>
                            <button className="cor-0 fonte-gerais btn-home">Assinar</button>
                        </Link>
                    </div>

                <div className="cor-7 ouro">
                    <img src={medalha} alt="icon de medalha roxo"/>
                    <h1 className="fonte-05">OURO</h1>
                    <h2 className="fonte-gerais">R$ <span className="fonte-subtitulos">120,90</span>/mês</h2>

                        <div className="beneficios">
                            <p>Todos os benefícios dos planos INFERIORES</p>
                            <p>Desconto em suplementos <strong>Growth™</strong></p>
                            <p>Acompanhamento de Personal Trainer</p>
                            <p>Acesso a todas as modalidades</p>
                        </div>

                        <Link to='/pagamento' onClick={Planos.setOuro}>
                            <button className="cor-0 fonte-gerais btn-home">Assinar</button>
                        </Link>
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

                        <Link to='/pagamento' onClick={Planos.setPrata}>
                            <button className="cor-0 fonte-gerais btn-home">Assinar</button>
                        </Link>
                    </div>
                </div>
            </div>

        <Brands/>
        <div className="confira">
            <img src={sobreimg} alt="Homem em posição de agachamento com rosto pintado prestes a levantar peso"></img>
            <div className="sobre-info">
                <p className="cor-0 fonte-03">CONHEÇA NOSSA</p>
                <p className="cor-3 fonte-04">COMPANHIA</p>

                    <p className="cor-0 fonte-gerais txt">Nossa missão é ser uma companhia de assinatura de planos referência em <span className="cor-3">acessibilidade</span>. Para isso, contamos com uma equipe <span className="cor-3">diversa</span>. Confira!</p>
                    <Link to='/sobre'>
                    <button className="cor-0 fonte-gerais btn-home">Sobre nós</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>)}
    </div> 
    )
}

export default Home
