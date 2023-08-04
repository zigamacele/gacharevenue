import '@/styles/globals.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import FallBackComponent from './layouts/ErrorBoundary'
import AppRoutes from './routes/AppRoutes'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={FallBackComponent}>
        <AppRoutes />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
)
