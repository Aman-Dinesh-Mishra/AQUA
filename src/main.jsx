import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Login from './Components/Login/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </StrictMode>,
)
