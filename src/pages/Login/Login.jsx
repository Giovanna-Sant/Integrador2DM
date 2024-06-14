import "./sigup_login.css";
import api from "../../config/axios"
import { useState, useContext } from "react"
import { AuthenticatedContext } from "../../Context/AuthenticatedContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode"
import Art from '../../components/Art/Art';
import Header from '../../components/Header/Header'

const Login = () => {
    const [validar, setValidar] = useState({email: '', senha: ''})
    const navigate = useNavigate()
    const { setAuthenticated } = useContext(AuthenticatedContext);

    const handleSubmit = async  (e) => {
        e.preventDefault();

        const req = await api.post('/auth/login', {email: validar.email, senha: validar.senha})
        const id = jwtDecode(req.data.token).id

        console.log(req.data.token);

        // const user = await api.get(`/user/${id}`, {headers: {Authorization: `bearer ${req.data.token}`}})
        localStorage.setItem('tokennz', req.data.token)
        localStorage.setItem('id', id)

        navigate('/home');
        setAuthenticated(true);
    }
    
    return(
        <div className="all">
            <Art/>
            <div className="rightt">
                <div className="cab">
                    <Header/>
                </div>
                <div className="right-box">
                    <div className="right-box-content">
                        <img src="src\img\Logo.svg" alt="Logo da GymRats" id="flogo"/>
                        <h2 id="ftitle">Bem Vindo (a) De <span id="bracao">Volta <img src="src\img\Icons\emoji.svg" alt="Braço musculoso palmeiras"/></span></h2>
                        <p id="solcred">Por favor, digite suas credenciais para acessar sua conta</p>
                        <form method="post" id="cadastro" onSubmit={(e) => handleSubmit(e)}>
                            <div className="ent">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Digite seu email" onChange={(e) => setValidar({...validar, email: e.target.value})} />
                            </div>
                            <div className="ent">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" name="senha" id="senha" placeholder="Digite sua senha" onChange={(e) => setValidar({...validar, senha: e.target.value})}/>
                            </div>
                            <hr />
                        <p>Ainda não tem uma conta? <Link to='/cadastro' className="cor-3" id="link-form">Clique aqui</Link></p>
                        <button type="submit" value="Submit" form="cadastro" className="cadastro_buttonn">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;