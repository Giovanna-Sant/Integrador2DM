import React from "react";
import "./style/header.css"
import "../index.css"
import logo from "../img/Logo.svg"
import perfil from "../img/perfil.svg"

const Header = () => {
    return (
        <div className="header">
            <a to='/'>
                <img src={logo} alt="logo"/>
            </a>

            <div class="opcoes">
                <a><p className="cor-0">Planos</p></a>
                <a><p className="cor-0">Sobre</p></a>
            </div>
            
            <a to=''>
                <img src={perfil} alt="perfil" className="icon"/>
            </a>
        </div>
    )
}

export default Header