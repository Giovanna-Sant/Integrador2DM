import "./sigup_login.css";
import api from "../../config/axios"
import {  useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode"
import Art from '../../components/Art/Art';
import Header from '../../components/Header/Header'

const Login = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     const logado = localStorage.getItem('authenticated')

    //     if(logado){
    //         navigate('/home');
    //     }
    // }, [])

    const [validar, setValidar] = useState({email: '', senha: ''})
    
    const handleSubmit = async  (e) => {
        e.preventDefault();

        const req = await api.post('/auth/login', {email: validar.email, senha: validar.senha})
        const id = jwtDecode(req.data.token).id

        console.log(req.data.token);

        // const user = await api.get(`/user/${id}`, {headers: {Authorization: `bearer ${req.data.token}`}})
        localStorage.setItem('tokennz', req.data.token)
        localStorage.setItem('id', id)

        navigate('/home');
        localStorage.setItem('authenticated', true);
    }
    
    return(
        <div className="login-all">
            <Art/>
            <div className="login-right">
                <div className="login-cab">
                    <Header/>
                </div>
                <div className="login-right-box">
                    <div className="login-right-box-content">
                        <img src="src\img\Logo.svg" alt="Logo da GymRats" id="login-flogo"/>
                        <h2 id="login-ftitle">Bem Vindo (a) De <span id="bracao">Volta <img src="src\img\Icons\emoji.svg" alt="Braço musculoso palmeiras"/></span></h2>
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
    )
}

export default Login;
