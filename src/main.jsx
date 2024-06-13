import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre';
import Signup from './pages/Signup/Signup';
import Pagamento from './pages/Pagamento/Pagamento';

import './index.css';
import Login from './pages/Login/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element={<App/>}/>
          <Route path='/pagamento' element={<Pagamento/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/cadastro' element={<Signup/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/sobre' element={<Sobre/>}/>
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);