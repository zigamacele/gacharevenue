import '@/styles/globals.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import AppRoutes from './routes/AppRoutes'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
