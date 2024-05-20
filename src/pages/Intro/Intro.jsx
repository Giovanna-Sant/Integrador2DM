//import React from "react"
import "./intro.css"

const Intro = () => {
    return (
    <div className="intro">
        <div className="info">
            <p className="cor-0 fonte-gerais">Conheça nossos planos!</p>
            <p className="cor-3 fonte-03">ASSINATURAS</p>
            <p className="cor-0 fonte-04">EM ACADEMIAS</p>

            <p className="cor-0 fonte-gerais txt">Nosso compromisso é com você e <span className="cor-3">seu bem-estar</span>. O GymRats pode <span className="cor-3">transformar sua rotina</span> de exercícios em uma experiência mais rica e diversificada.</p>
            <a to='/'>
            <button className="cor-0 fonte-gerais">Seja membro</button>
            </a>
        </div>
    </div>
    )
}

export default Intro