//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import ArtContextProvider from './context/ArtContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ArtContextProvider>
      <App />
    </ArtContextProvider>
  </BrowserRouter>

)
