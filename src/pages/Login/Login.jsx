import "./sigup_login.css";
import api from "../../config/axios"
import {  useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode"
import Art from '../../components/Art/Art';
import Header from '../../components/Header/Header'

import logo from "../../img/Logo.svg"
import emoji from "../../img/Icons/emoji.svg"
import Loading from "../../components/Loading/Loading";

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true)
    const user = localStorage.getItem('authenticated');
    
    useEffect(() => {
        if(user === 'true'){
            navigate('/home')
        }
        setTimeout(() =>{
            setLoading(false)
          }, 1500)
    })

    const [validar, setValidar] = useState({email: '', senha: ''})

    const handleSubmit = async  (e) => {
        e.preventDefault();

        try {
            const req = await api.post('/auth/login', {email: validar.email, senha: validar.senha})
            
            const id = jwtDecode(req.data.token).id
    
            localStorage.setItem('tokennz', req.data.token)
            localStorage.setItem('id', id)
    
            navigate('/home');
            localStorage.setItem('authenticated', true);
        } catch (error) {
            if(!validar.email) {
                alert('Email não pode ser vazio. Tente novamente.')
                return
            }
            if(!validar.senha) {
                alert('Senha não pode ser vazia. Tente novamente.')
                return
            }
            
            alert('Email ou senha incorretos. Tente novamente.')

            document.getElementById('login-email').value = ''
            document.getElementById('login-senha').value = ''
        }
    }
    
    return(
        <div className="container-perfil">
            {isLoading ? (
                <Loading />
            ) : (
                <div className="login-all">
                <Art/>
                <div className="login-right">
                    <div className="login-cab">
                        <Header/>
                    </div>
                    <div className="login-right-box">
                        <div className="login-right-box-content">
                            <img src={logo} alt="Logo da GymRats" id="login-flogo"/>
                            <h2 id="login-ftitle">Bem Vindo (a) De <span id="bracao">Volta <img src={emoji} alt="Braço musculoso palmeiras"/></span></h2>
                            <p id="login-solcred">Por favor, digite suas credenciais para acessar sua conta</p>
                            <form method="post" id="cadastro" onSubmit={(e) => handleSubmit(e)}>
                                <div className="login-ent">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="login-email" placeholder="Digite seu email" onChange={(e) => setValidar({...validar, email: e.target.value})} />
                                </div>
                                <div className="login-ent">
                                    <label htmlFor="senha">Senha</label>
                                    <input type="password" name="senha" id="login-senha" placeholder="Digite sua senha" onChange={(e) => setValidar({...validar, senha: e.target.value})}/>
                                </div>
                                <hr className="login-barra"/>
                            <p>Ainda não tem uma conta? <Link to='/cadastro' className="cor-3" id="login-link-form">Clique aqui</Link></p>
                            <button type="submit" value="Submit" form="cadastro" className="login-button">Entrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Login;
