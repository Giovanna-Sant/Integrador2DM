import "./perfil.css"
import { useState, useEffect } from "react"
import api from '../../config/axios'
import perfil from "../../img/Icons/perfil.svg"
import deleteicon from "../../img/Icons/TrashCan.png"
import {Link, useNavigate} from "react-router-dom"
import editicon from "../../img/Icons/Pencil.svg"
import { jwtDecode } from "jwt-decode"

const Perfil = () => {

  const navigate = useNavigate()

  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [editar, setEditar] = useState(false)

  const permitirAtualizar =  ()=> {
    setEditar(!editar)
  }
  
  const [user, setUser] = useState({})

  return (
    <div className="Perfil">
      <div className="divPerfil">
        <div className="perfilFuncoes">
          <Link className="linkPerfil" to="/">
            <img className="perfilIcon" src={perfil}/>
            <p className="fonte-subtitulos">Conta</p>
         </Link>
        <hr />
        <button onClick{...() => deletePerfil(user._id)} className="linkDelete">
            <img className="deleteIcon" src={deleteicon}/>
            <p className="fonte-subtitulos">Deletar Conta</p>
        </button>
        </div>
        <div className="infoDiv">

          <div className="info1">            
            <div className="topinfo">
              <p className="fonte-05">Informações Pessoais</p>

              <button onClick={permitirAtualizar} className="linkEditarPessoais">
                <img className="editIcon" src={editicon}/>
                <p className="fonte-subtitulos">Editar</p>
              </button>
            </div>
            
            <div className="pessoalinfo">
              <div>
                <p className="fonte-subtitulos">Nome</p>
                <input value={nome} onChange={(e) => setNome(e.target.value)} className="fonte-gerais" readOnly={editar}>{user.nome}</input>
              </div>

              <div className="sobrenomediv">
                <p className="fonte-subtitulos">Sobrenome</p>
                <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} className="fonte-gerais" readOnly={editar}>{user.sobrenome}</input>
              </div>
            </div>

            <div className="pessoalinfo2">
              <div>
                <p className="fonte-subtitulos">Email</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="fonte-gerais" readOnly={editar}>{user.email}</input>
              </div>

              <div className="phonediv">
                <p className="fonte-subtitulos">Telefone</p>
                <input value={telefone} onChange={(e) => setTelefone(e.target.value)} className="fonte-gerais" readOnly={editar}>{telefone.nome}</input>
              </div>
            </div>
          </div>

          <div className="info2">
            <div className="topinfo">
              <p className="fonte-06">Seu Plano</p>

              <button className="linkEditarPessoais">  
                <img className="editIcon" src={editicon}/>
                <p className="fonte-subtitulos">Editar</p>
              </button>
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