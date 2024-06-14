import { createContext, useState } from "react";

export const AuthenticatedContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthenticatedContextProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <AuthenticatedContext.Provider value={{authenticated, setAuthenticated}}>
            {children}
        </AuthenticatedContext.Provider>
    )
} 