import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'

import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'))
let counter = 0

setInterval(() => {
  let numeroEnTexto = counter.toString().padStart(6, "0");
  let digitos = numeroEnTexto.split("");

  root.render(
    <React.StrictMode>
      <Home digitos={digitos} />
    </React.StrictMode>,
  )
  counter++
}, 1000)

