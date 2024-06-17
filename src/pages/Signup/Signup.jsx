import '../Signup/sigup.css'
import api from "../../config/axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Art from "../../components/Art/Art";
import Header from '../../components/Header/Header'
import logo from "../../img/Logo.svg"

const Signup = () => {

    const user = localStorage.getItem('authenticated');
    
    useEffect(() => {
        if(user === 'true'){
            navigate('/home')
        }
    })


  const [newUser, setNewUser] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirma_senha: "",
  });
  const navigate = useNavigate();
  const postNewUser = async (e) => {
    try {
      e.preventDefault();

      if (newUser.senha != newUser.confirma_senha)
        throw new Error("Senhas não coincidem.");
        await api.post("/auth/cadastrar", newUser);

        alert("Pessoa cadastrada com sucesso.");

        
      navigate("/login");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="all">
      <Art />
      <div className="cad-right">
        <div className="cad-cab">
          <Header/>
        </div>
        <div className="cad-right-box">
          <div className="cad-cab">
          </div>
          <div className="cad-right-box-content">
            <img src={logo} alt="Logo da GymRats" id="cad-flogo" />
            <h2 id="cad-ftitle">Crie sua conta agora mesmo</h2>
            <form method="post" onSubmit={(e) => postNewUser(e)} id="cadastro">
              <div className="cad-ent">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Digite seu nome"
                  onChange={(e) =>
                    setNewUser({ ...newUser, nome: e.target.value })
                  }
                />
              </div>
              <div className="cad-ent">
                <label htmlFor="sobrenome">Sobrenome</label>
                <input
                  type="text"
                  name="sobrenome"
                  id="sobrenome"
                  placeholder="Digite seu sobrenome"
                  onChange={(e) =>
                    setNewUser({ ...newUser, sobrenome: e.target.value })
                  }
                />
              </div>
              <div className="cad-ent">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Digite seu email"
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </div>
              <div className="cad-ent">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  placeholder="Digite sua senha"
                  onChange={(e) =>
                    setNewUser({ ...newUser, senha: e.target.value })
                  }
                />
              </div>
              <div className="cad-ent">
                <label htmlFor="confirm">Confirme a senha</label>
                <input
                  type="password"
                  name="confirm"
                  id="confirm"
                  placeholder="Digite sua senha novamente"
                  onChange={(e) =>
                    setNewUser({ ...newUser, confirma_senha: e.target.value })
                  }
                />
              </div>
              <hr />
              <p>
                Já tem uma conta?{" "}
                <Link to="/" className="cor-3" id="cad-link-form">
                  Clique aqui
                </Link>
              </p>
              <button className="cad-button" type="submit" value="Submit" form="cadastro">
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
