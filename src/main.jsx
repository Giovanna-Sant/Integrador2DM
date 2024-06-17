import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Perfil from "./pages/Perfil/Perfil";
import Pagamento from "./pages/Pagamento/Pagamento";
import Planos from "./pages/Planos";
import Logado from "./pages/Login/Logado";
import "./index.css";

import { AuthenticatedContextProvider } from "./Context/AuthenticatedContext";
import Logado2 from "./pages/Login/Logado2";

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
              path="/pagamento"
              element={
                <Logado>
                  <Pagamento />
                </Logado>
              }
            />
            <Route
              path="/perfil/:id"
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

          <Route exact path="/" element={ <Logado2 /> } />
          <Route exact path="/cadastro" element={  <Signup /> } />
          <Route exact path="/login" element={  <Login /> } />
        </Routes>
      </AuthenticatedContextProvider>
     
    </BrowserRouter>
  </React.StrictMode>
);
