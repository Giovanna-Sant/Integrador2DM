import { createContext, useState} from "react";

import Planos from "../pages/Planos/components/Context/Context";

export const AuthenticatedContext = createContext();

export const AuthenticatedContextProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [plano, setPlano] = useState(Planos.PlanoSelecionado);

    return (
        <AuthenticatedContext.Provider value={{authenticated, setAuthenticated, plano, setPlano}}>
            {children}
        </AuthenticatedContext.Provider>
    )
} 