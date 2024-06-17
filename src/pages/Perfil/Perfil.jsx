import { useState, useEffect } from "react"
import api from '../../config/axios'
import "./perfil.css"
import {Link, useNavigate, useParams} from "react-router-dom"
import PerfilImg from "../../img/Icons/perfil.svg"
import TrashCan from "../../img/Icons/TrashCan.png"
import Pencil from "../../img/Icons/Pencil.svg"
import Logout from "../../img/Icons/logout.svg"
import Loading  from "../../components/Loading/Loading"


const Perfil = () => {

  const [user, setUser] = useState({nome: '', sobrenome: '', telefone: ''})

  const [userNome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [telefone, setTelefone] = useState('')

  const [editar, setEditar] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const navigate = useNavigate()
  const {id} = useParams()
 
  const token = localStorage.getItem('tokennz')
 
  const handleGetRequest = async() =>{
    if(!token) navigate('/')
    else {
      navigate(`/perfil/${id}`)
      const getUser = await api.get(`/user/${id}`, {headers: {authorization: `bearer ${token}`}})
      setUser(getUser.data)
    }
  }

const handleEditar = () => {
  setEditar((prevState) => !prevState)
}

  const logOutUser = () => {
    const desejaSair = confirm('Você realmente deseja sair?')
    if (desejaSair){
      localStorage.clear()
      navigate('/')
    }
  }

  const deletarUser = async() =>{
    try {
      const desejaDeletar = confirm('Você realmente deseja deletar sua conta? Essa ação não pode ser revertida.')
      if(desejaDeletar){
        await api.delete(`/user/${id}`, {headers: {Authorization: `bearer ${token}`}})
        alert('Conta deletada com sucesso.')
        localStorage.clear()
        navigate('/')
      }
    } catch (error) {
      console.log(error.message)
    }
  }
 
  const atualizarUser = async() => {
    try {
      const desejaAtualizar = confirm('Você realmente deseja atualizar sua conta?')
      if(desejaAtualizar){
        const dadosAtualizados = {}
        if (userNome && userNome !== user.nome) {
          dadosAtualizados.nome = userNome;
        }
        if (sobrenome && sobrenome !== user.sobrenome) {
          dadosAtualizados.sobrenome = sobrenome;
        }
        if (telefone && telefone !== user.telefone) {
          dadosAtualizados.telefone = telefone;
        }
        
        
        if (Object.keys(dadosAtualizados).length > 0) {
          await api.patch(`/user/${id}`, dadosAtualizados, {
            headers: { Authorization: `bearer ${token}` }
          });
          alert('Cadastro atualizado com sucesso.');
          setUser({ ...user, ...dadosAtualizados });
          setLoading(true)
          setEditar(false)
      }
      }else setEditar(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  const cancelarPlano = async() => {
    const desejaCancelar = confirm('Você realmente deseja cancelar seu plano? Essa ação não pode ser revertida.')
    if(desejaCancelar) {
      try {
        const nullPlano = {nome: null, mensalidade: null, beneficios: null}
        await api.patch(`/user/${id}`, {plano: nullPlano}, {headers: { Authorization: `bearer ${token}` }})
        alert('Plano cancelado com sucesso.')
        setLoading(true)
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  useEffect(()=>{
    handleGetRequest()
    setTimeout(() =>{
      setLoading(false)
    }, 1000)
  }, [isLoading])

  return (
    <div className="container-perfil">
    {isLoading ? (
            <Loading/>
        ) :(
    <div className="Perfil">
        

        <div className="divPerfil">
          <div className="perfilFuncoes">
            <Link className="linkPerfil" to="#">
              <img className="perfilIcon" src={PerfilImg}/>
              <p className="fonte-subtitulos">Conta</p>
           </Link>
            <hr/>
            <button className="btnLogout" onClick={deletarUser}>
                <img className="deleteIcon" src={TrashCan}/>
                <p className="fonte-subtitulos">Deletar Conta</p>
            </button>
            <hr/>
            <button className="btnLogout" onClick={logOutUser}>
                <img className="logout-img" src={Logout}/>
                <p className="fonte-subtitulos">Sair</p>
            </button>
          </div>
          <div className="infoDiv">
  
            <div className="info1">            
              <div className="topinfo">
                <p className="fonte-05">Informações Pessoais</p>
  
                <Link className="linkEditarPessoais" onClick={editar ? atualizarUser : handleEditar}>  
                  <img className="editIcon" src={Pencil}/>
                  <p className={`fonte-subtitulos ${editar ? 'test' : ''}`}>{editar ? 'Confirmar' : 'Editar'}</p>
                </Link>
              </div>
              
              <div className="pessoalinfo">
                <div>
                  <p className="fonte-subtitulos">Nome</p>
                  {/* <p className="fonte-gerais">{user.nome}</p> */}
                  <input type="text" defaultValue={user.nome} className={`${editar ? 'input-user' : 'text-user'} fonte-gerais`} readOnly={!editar} onChange={(e)=>setNome(e.target.value)} />
                </div>
  
              <div className="sobrenomediv">
                  <p className="fonte-subtitulos">Sobrenome</p>
                  <input type="text" defaultValue={user.sobrenome} className={`${editar ? 'input-user' : 'text-user'} fonte-gerais`} readOnly={!editar} onChange={(e)=>setSobrenome(e.target.value)} />
                </div>
              </div>
  
              <div className="pessoalinfo2">
              <div>
                  <p className="fonte-subtitulos">Email</p>
                  <p className="fonte-gerais">{user.email}</p>
              </div>
  
              {user.telefone || editar ? <div className="phonediv">
                  <p className="fonte-subtitulos">Telefone</p>
                  <input type="number" defaultValue={user.telefone} className={`${editar ? 'input-user' : 'text-user'} fonte-gerais`} readOnly={!editar} onChange={(e)=>setTelefone(e.target.value)} />
              </div> : ''}
              
              </div>
            </div>
  
            <div className="info2">
            {user.plano && user.plano.nome!=null ? (
              <div>
                <div className="topinfo">
                  <p className="fonte-06">Seu Plano</p>
   
                  <Link className="linkEditarPessoais" to='/planos'>  
                    <img className="editIcon" src={Pencil}/>
                    <p className="fonte-subtitulos">Editar</p>
                  </Link>
                </div>
   
                <div className="planoinfo">
                  <div>
                  <p className="fonte-05">Plano Atual</p>
                  <p className="fonte-plano">{user.plano.nome}</p>
                  </div>
   
                  <div className="divValor">
                  <p className="fonte-05">Valor</p>
                  <p className="fonte-05">R${user.plano.mensalidade}</p>
                  </div>
                </div>
   
                <div>
                  <div>
                    <p className="fonte-subtitulos">Benefícios</p>
                    <ul className="beneficioslista">
                    {user.plano.beneficios.map((beneficio) => {
                          return <li className="fonte-gerais" key={beneficio}>{beneficio}</li>
                      })}
                    </ul>
                  </div>
                  <button className="btn-cancelar-plano" onClick={cancelarPlano}>Cancelar plano</button>
                </div>
              </div>
            ) : <p className="fonte-subtitulos">Você ainda não possui um plano. <Link to='/planos' className="link-planos">Assine agora.</Link></p>}
            </div>
          </div>
        </div>
        
      </div>)}
    </div>
  );
}

export default Perfil;