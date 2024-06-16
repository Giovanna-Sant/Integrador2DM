import { useState, useEffect } from "react"
import api from '../../config/axios'
import "./perfil.css"
import {Link, useNavigate, useParams} from "react-router-dom"

import perfil from "../../img/Icons/perfil.svg"
import deleteicon from "../../img/Icons/TrashCan.png"
import editicon from "../../img/Icons/Pencil.svg"
import logoutIcon from "../../img/Icons/logout.svg"
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
      navigate(`/user/${id}`)
      const getUser = await api.get(`/user/${id}`, {headers: {authorization: `bearer ${token}`}})
      setUser(getUser.data)
    }
  }
 
  useEffect(()=>{
    handleGetRequest()
  }, [])

  const permitirAtualizar = () => {
    setEditar(!editar)
    let botao = document.querySelector('.linkEditarPessoais')

    let inp = [...document.querySelectorAll('.inativo')]


    inp.map( e => {
      e.classList.toggle('ativo')
    })
  }

  const deletePerfil = async () => {
    if(confirm("Deseja realmente deletar sua conta?")){
      axios.delete('')
        .then(function(response){
          alert('Conta deletada com sucesso')
          window.location.href = '/'
        })
        .catch(function(error){
          alert('Erro ao deletar conta')
        })
    }
  }

  return (
    <div className="Perfil">
      <div className="divPerfil">
        <div className="perfilFuncoes">
          <Link className="linkPerfil" to="/">
            <img className="perfilIcon" src={perfil}/>
            <p className="fonte-subtitulos">Conta</p>
          </Link>
          <hr />
          <button onClick={deletePerfil} className="linkDelete">
              <img className="deleteIcon" src={deleteicon}/>
              <p className="fonte-subtitulos">Deletar Conta</p>
          </button>
          <hr />
          <button className="linkLogout">  
              <img className="logoutIcon" src={logoutIcon}/>
              <p className="fonte-subtitulos">Logout</p>
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
                <input value={nome} onChange={(e) => setNome(e.target.value)} className="inativo" readOnly={!editar}>{user.nome}</input>
              </div>

              <div className="sobrenomediv">
                <p className="fonte-subtitulos">Sobrenome</p>
                <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} className="inativo" readOnly={!editar}>{user.sobrenome}</input>
              </div>
            </div>

            <div className="pessoalinfo2">
              <div>
                <p className="fonte-subtitulos">Email</p>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="inativo" readOnly={!editar}>{user.email}</input>
              </div>

              <div className="phonediv">
                <p className="fonte-subtitulos">Telefone</p>
                <input value={telefone} onChange={(e) => setTelefone(e.target.value)} className="inativo" readOnly={!editar}>{user.telefone}</input>
              </div>
            </div>
          </div>

          <div className="info2">
          {user.plano ? (
            <div>
              <div className="topinfo">
                <p className="fonte-06">Seu Plano</p>
 
                <Link className="linkEditarPessoais">  
                  <img className="editIcon" src={PencilImg}/>
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
          ) : <p className="fonte-subtitulos">Você ainda não possui um plano. <Link to='/plano'>Assine agora.</Link></p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;