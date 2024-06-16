import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Logado = ({ children }) => {
    
    const user = localStorage.getItem('authenticated')

    return user ? children : <Navigate to='/login' />
}

export default Logado;