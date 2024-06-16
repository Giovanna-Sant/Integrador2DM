import "./perfil.css";
import { useState, useEffect } from "react";
import api from '../../config/axios';
import perfil from "../../img/Icons/perfil.svg";
import deleteicon from "../../img/Icons/TrashCan.png";
import { Link } from "react-router-dom";
import editicon from "../../img/Icons/Pencil.svg";
import logoutIcon from "../../img/Icons/logout.png";
import { jwtDecode } from "jwt-decode";

const Perfil = () => {
  return (
    <div className="Perfil">
      <div className="divPerfil">
        <div className="perfilFuncoes">
          <Link className="linkPerfil" to="/">
            <img className="perfilIcon" src="src/img/Icons/perfil.svg" alt="Perfil Icon" />
            <p className="fonte-subtitulos">Conta</p>
          </Link>
          <hr />
          <button className="linkDelete">
            <img className="deleteIcon" src={deleteicon} alt="Delete Icon" />
            <p className="fonte-subtitulos">Deletar Conta</p>
          </button>
          <hr />
          <button className="linkLogout">
            <img className="logoutIcon" src={logoutIcon} alt="Logout Icon" />
            <p className="fonte-subtitulos">Logout</p>
          </button>
        </div>
        <div className="infoDiv">

          <div className="info1">            
            <div className="topinfo">
              <p className="fonte-05">Informações Pessoais</p>

              <Link className="linkEditarPessoais">  
                <img className="editIcon" src="src/img/Icons/Pencil.svg" alt="Edit Icon" />
                <p className="fonte-subtitulos">Editar</p>
              </Link>
            </div>
            
            <div className="pessoalinfo">
              <div>
                <p className="fonte-subtitulos">Nome</p>
                <p className="fonte-gerais">Fulano</p>
              </div>

            <div className="sobrenomediv">
                <p className="fonte-subtitulos">Sobrenome</p>
                <p className="fonte-gerais">de Tal</p>
              </div>
            </div>

            <div className="pessoalinfo2">
            <div>
                <p className="fonte-subtitulos">Email</p>
                <p className="fonte-gerais">fulano@email.com</p>
            </div>

            <div className="phonediv">
                <p className="fonte-subtitulos">Telefone</p>
                <p className="fonte-gerais">(11)4002-8922</p>
            </div>
            </div>
          </div>

          <div className="info2">
            <div className="topinfo">
              <p className="fonte-06">Seu Plano</p>

              <Link className="linkEditarPessoais">  
                <img className="editIcon" src="src//img/Icons/Pencil.svg" alt="Edit Icon" />
                <p className="fonte-subtitulos">Editar</p>
              </Link>
            </div>

            <div className="planoinfo">
              <div>
              <p className="fonte-05">Plano Atual</p>
              <p className="fonte-plano">Bronze</p>
              </div>

              <div className="divValor">
              <p className="fonte-05">Valor</p>
              <p className="fonte-05">R$55,90</p>
              </div>
            </div>

            <div>
              <div>
                <p className="fonte-subtitulos">Benefícios</p>
                <ul className="beneficioslista">
                  <li className="fonte-gerais">Acesso a mais de 20 redes de academia</li>
                  <li className="fonte-gerais">Avaliação física semestral</li>
                  <li className="fonte-gerais">Acesso a uma modalidade escolhida</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;