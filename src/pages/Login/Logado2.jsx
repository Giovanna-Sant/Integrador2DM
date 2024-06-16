import { Navigate } from "react-router-dom";

const Logado2 = () => {
    const user = localStorage.getItem('authenticated');

    if (user === 'true') {
        return <Navigate to='/home' />;
    } else {
        return <Navigate to='/login' />;
    }
}

export default Logado2;
