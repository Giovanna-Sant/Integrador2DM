import { createContext, useState} from "react";

import { PlanoSelecionado } from "../pages/Planos/components/PlanosDisponiveis";

export const AuthenticatedContext = createContext();


// eslint-disable-next-line react/prop-types
export const AuthenticatedContextProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [plano, setPlano] = useState(PlanoSelecionado);

    return (
        <AuthenticatedContext.Provider value={{authenticated, setAuthenticated, plano, setPlano}}>
            {children}
        </AuthenticatedContext.Provider>
    )
} 