import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre';
import Perfil from './pages/Perfil/Perfil';
import Signup from './pages/Signup/Signup';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element={<App/>}>
          <Route path='/perfil' element={<Perfil/>}/>
          <Route path='/cadastro' element={<Signup/>}/>
          </Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);