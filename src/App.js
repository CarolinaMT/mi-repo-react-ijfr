import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CONOCE TU INEM
        </p>
        <table class="table">
  <thead>
    <tr>
      <th scope="Carolina">Carolina</th>
      <th scope="Valentina">Valentina</th>
      <th scope="Sara Melina">Sara Melina</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Morales Tirado</th>
      <th>Restrepo Zapata</th>
      <th>Henao calderon</th>
    </tr>
    <tr>
      <th>Caromora203@gmail.com</th>
      <th>Vale.restrepo12320@gmail.com</th>
      <th>samheca13@gmail.com</th>
    </tr>
    <tr>
      <th>3016204994</th>
      <th>3004811900</th>
      <th>3113061376</th>
    </tr>
  </tbody>
</table>

            
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
