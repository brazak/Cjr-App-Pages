// import logo from "./logo.svg";
import React , {Component} from 'react';
import logo from "./sed.png";
// import 'primereact/resources/themes/nova-light/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
import Header from './components/header';
import Footer from './components/footer';
import {Menubar} from 'primereact/menubar';
import "./App.css";


function App() {
  
  return (
    
    <div className="App">

    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <from id="form-login">
          
            <input type="text" id="login" name="login" className="input-field" placeholder="Usuário" required />
          
          
            <input  type="text" id="login"  name="login"  className="input-field" placeholder="Password" required />
          
          <input type="submit" name="entrar" id="btn-entrar" value="entrar" className="btn-entrar"/>
        </from>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Recuperar Senha
        </a>
      </header>
    </div>
  );
}

export default App;
