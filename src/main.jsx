import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import BadgePage from './pages/BadgePage.jsx'
import LandingProjectsPage from './pages/LandingProjectsPage.jsx'
import CatalogProjectsPage from './pages/CatalogProjectsPage.jsx'
import SistemasProjectsPage from './pages/SistemasProjectsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cracha" element={<BadgePage />} />
        <Route path="/projetos/landing" element={<LandingProjectsPage />} />
        <Route path="/projetos/catalogos" element={<CatalogProjectsPage />} />
        <Route path="/projetos/sistemas" element={<SistemasProjectsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
