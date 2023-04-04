import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Move from './components/Move'
import App from './components/Test';

import reportWebVitals from './reportWebVitals';
const imgOrig= 'https://via.placeholder.com/200x200.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header title={"Front-End Challenge OMP React-Dev 🧑🏽‍💻"}/>
    <Move inicialpos={{x:0,y:0}} inicialsize={{widh:1,height:1}} inicialDegree={0}>
    <img src={imgOrig} alt="Moveable" />
    </Move>
  </React.StrictMode>
);

reportWebVitals();
