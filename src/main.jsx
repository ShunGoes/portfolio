import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RefContextProvider } from './context/ref-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RefContextProvider>
        <App />
    </RefContextProvider>
  </React.StrictMode>,
)
