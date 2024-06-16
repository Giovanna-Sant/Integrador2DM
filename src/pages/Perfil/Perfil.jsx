import { useState, useEffect } from "react"
import api from '../../config/axios'
import "./perfil.css"
import {Link, useNavigate, useParams} from "react-router-dom"

import PerfilImg from "../../img/Icons/perfil.svg"
import TrashCan from "../../img/Icons/TrashCan.png"
import Pencil from "../../img/Icons/Pencil.svg"
import Logout from "../../img/Icons/logout.svg"
import { jwtDecode } from "jwt-decode"


const Perfil = () => {

  const {nome, setNome} = ('')
  const {sobrenome, setSobrenome} = ('')
  const {telefone, setTelefone} = ('')
  const {email, setEmail} = ('')

  const [editar, setEditar] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
 
  const [user, setUser] = useState({})
 
  const token = localStorage.getItem('tokennz')
 
  const handleGetRequest = async() =>{
    if(!token) navigate('/')
    else {
      navigate(`/perfil/${id}`)
      const getUser = await api.get(`/user/${id}`, {headers: {authorization: `bearer ${token}`}})
      setUser(getUser.data)
    }
  }
 
  useEffect(()=>{
    handleGetRequest()
  }, [])

  return (
    <div className="Perfil">
      <div className="divPerfil">
        <div className="perfilFuncoes">
          <Link className="linkPerfil" to="/">
            <img className="perfilIcon" src={PerfilImg}/>
            <p className="fonte-subtitulos">Conta</p>
         </Link>
          <hr/>
          <Link className="linkDelete" to="/">
              <img className="deleteIcon" src={TrashCan}/>
              <p className="fonte-subtitulos">Deletar Conta</p>
          </Link>
          <hr/>
          <Link className="linkDelete" to="/">
              <img className="logout-img" src={Logout}/>
              <p className="fonte-subtitulos">Sair</p>
          </Link>
        </div>
        <div className="infoDiv">

          <div className="info1">            
            <div className="topinfo">
              <p className="fonte-05">Informações Pessoais</p>

              <Link className="linkEditarPessoais">  
                <img className="editIcon" src={Pencil}/>
                <p className="fonte-subtitulos">Editar</p>
              </Link>
            </div>
            
            <div className="pessoalinfo">
              <div>
                <p className="fonte-subtitulos">Nome</p>
                <p className="fonte-gerais">{user.nome}</p>
              </div>

            <div className="sobrenomediv">
                <p className="fonte-subtitulos">Sobrenome</p>
                <p className="fonte-gerais">{user.sobrenome}</p>
              </div>
            </div>

            <div className="pessoalinfo2">
            <div>
                <p className="fonte-subtitulos">Email</p>
                <p className="fonte-gerais">{user.email}</p>
            </div>


            <div className="phonediv">
                <p className="fonte-subtitulos">Telefone</p>
                <p className="fonte-gerais">(11)4002-8922</p>
            </div>
            </div>
          </div>

          <div className="info2">
          {user.plano ? (
            <div>
              <div className="topinfo">
                <p className="fonte-06">Seu Plano</p>
 
                <Link className="linkEditarPessoais">  
                  <img className="editIcon" src={Pencil}/>
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
          ) : <p className="fonte-subtitulos">Você ainda não possui um plano. <Link to='/planos' className="link-planos">Assine agora.</Link></p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;