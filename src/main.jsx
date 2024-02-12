import React from 'react'
import ReactDOM from 'react-dom/client'
// import { QrCodeGenerator } from './Components/QrCodeGenerator'
import { QrCodeGenerator } from './Components/QrCodeGenerator'
import './Components/QrCodeGenerator.css'
// import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QrCodeGenerator/>
  </React.StrictMode>,
)
