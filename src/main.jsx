import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";

import Pagamento from "./pages/Pagamento/Pagamento";

import "./index.css";

import Logado from "./pages/Login/Logado";
import { AuthenticatedContextProvider } from "./Context/AuthenticatedContext";
import Planos from "./pages/Planos";
import Perfil from "./pages/Perfil/Perfil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticatedContextProvider>
        <Routes>
          <Route element={<App />}>
            <Route
              path="/pagamento"
              element={
                <Logado>
                  <Pagamento />
                </Logado>
              }
          />

          <Route
            path="/planos"
            element={
              <Logado>
                <Planos />
              </Logado>
            }
          />

          <Route
            path="/perfil"
            element={
              <Logado>
                <Perfil />
              </Logado>
            }
          />
          </Route>

          <Route
            path="/home"
            element={
              <Logado>
                <Home />
              </Logado>
            }
          />
          <Route
            path="/sobre"
            element={
              <Logado>
                <Sobre />
              </Logado>
            }
          />
          <Route path="/cadastro" element={<Signup />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </AuthenticatedContextProvider>
     
    </BrowserRouter>
  </React.StrictMode>
);
