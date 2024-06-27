import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Modal, ModalProvider } from './context/Modal.jsx'
import './assets/css/reset_Josh_Comeau.css'
// import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
      <Modal />
    </ModalProvider>
  </React.StrictMode>,
)
