import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'


function App() {
  return (
      <div className="App">
          <p className="App-intro">
              <h2><Link to="/consolidated">Ir para a página lista de Clientes</Link></h2>
              <h2><Link to="/cleaning">Ir para página de Limpezas</Link></h2>
              <h2><Link to="/password">Ir para página de Passwords</Link></h2>
              <h2><Link to="/customer">Ir para página de Clientes</Link></h2>
              <h2><Link to="/internet">Ir para página de Internet</Link></h2>
              <h2><Link to="/inverter">Ir para página de Inverter</Link></h2>
              <h2><Link to="/irradiation">Ir para página de irradiation</Link></h2>
              <h2><Link to="/predicted">Ir para página de Previsão</Link></h2>

          </p>
      </div>
  );
}

export default App;
