import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <img src="src\img\Logo.svg" alt="logo"/>
            </Link>

            <div className="opcoes">
                <Link to='/planos'>
                    <p className="cor-0">Planos</p>
                </Link>
                <Link to='/sobre'>
                    <p className="cor-0">Sobre</p>
                </Link>
            </div>
            
            <Link to='/cadastro'>
                <img src="src\img\Icons\perfil.svg" alt="perfil" className="icon"/>
            </Link>
        </div>
    )
}

export default Header