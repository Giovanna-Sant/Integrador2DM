import "login.css";
import Art from '../../components/Art/Art';
import Header from '../../components/Header/Header'

const Login = () => {
    return(
        <div className="all">
            <Art/>
            <div className="right">
                <div className="cab">
                    <Header/>
                </div>
                <div className="right-box">
                    <div className="right-box-content">
                        <img src="src\img\Logo.svg" alt="Logo da GymRats" id="flogo"/>
                        <h2 id="ftitle">Bem Vindo (a) De <span id="bracao">Volta <img src="src\img\Icons\emoji.svg" alt="Braço musculoso palmeiras"/></span></h2>
                        <p id="solcred">Por favor, digite suas credenciais para acessar sua conta</p>
                        <form method="post" action="" id="cadastro">
                            <div className="ent">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Digite seu email" />
                            </div>
                            <div className="ent">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" name="senha" id="senha" placeholder="Digite sua senha"/>
                            </div>
                            <hr />
                        <p>Já tem uma conta? <a href="#" className="cor-3" id="link-form">Clique aqui</a></p>
                        <button type="submit" value="Submit" form="cadastro" >Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;