import "./signup.css";

const Signup = () => {
    return(
        <div className="right">
            <div className="right-box">
                {/* <img src="../\src\img\Background\bg-form.png" alt="Fundo" id="img-fundo"/> */}
                <img src="src\img\Logo.svg" alt="Logo da GymRats" id="flogo"/>
                <h2 id="ftitle">Crie sua conta agora mesmo</h2>
                <form method="post" action="" id="cadastro">
                    <div className="ent">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite seu nome"/>
                    </div>
                    <div className="ent">
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <input type="text" name="sobrenome" id="sobrenome" placeholder="Digite seu sobrenome"/>
                    </div>
                    <div className="ent">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu email" />
                    </div>
                    <div className="ent">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Digite sua senha"/>
                    </div>
                    <div className="ent">
                        <label htmlFor="confirm">Confirme a senha</label>
                        <input type="password" name="confirm" id="confirm" placeholder="Digite sua senha novamente"/>
                    </div>
                    <hr />
                <p>Já tem uma conta? <a href="#" className="cor-3" id="link-form">Clique aqui</a></p>
                <button type="submit" value="Submit" form="cadastro" >Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;