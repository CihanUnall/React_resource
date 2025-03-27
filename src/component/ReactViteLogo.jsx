import React from 'react';
import ReactLogo from '../assets/react.svg';
import ViteLogo from '/vite.svg';

function ReactViteLogo() {
  return (
    <div>
      <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
        <img src={ViteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={ReactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Vite + React</h1>
    </div>
  );
}

export default ReactViteLogo;