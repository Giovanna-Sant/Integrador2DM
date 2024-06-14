import { useContext } from "react";
import { AuthenticatedContext } from "../../Context/AuthenticatedContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Logado = ({ children }) => {
    const { authenticated } = useContext(AuthenticatedContext);
    
    const user = authenticated;

    return user ? children : <Navigate to='/' />
}

export default Logado;
