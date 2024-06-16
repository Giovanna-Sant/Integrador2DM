import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
    const id = localStorage.getItem('id')
    return (
        <div className="header">
            <Link to='/home'>
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
            
            <Link to={`/perfil/${id}`}>
                <img src="src\img\Icons\perfil.svg" alt="perfil" className="icon"/>
            </Link>
        </div>
    )
}

export default Header