import { PostHogProvider } from 'posthog-js/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'

import '@/styles/globals.css'

import { Toaster } from '@/lib/shadcn/ui/toaster.tsx'

import config from '@/config/env'

import FallBackComponent from './layouts/ErrorBoundary'
import ProgressBar from './layouts/ProgressBar'
import AppRoutes from './routes/AppRoutes'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider
      apiKey={config.posthog.API_KEY}
      options={{ api_host: config.posthog.HOST }}
    >
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={FallBackComponent}>
          <ProgressBar />
          <AppRoutes />
          <Toaster />
        </ErrorBoundary>
      </BrowserRouter>
    </PostHogProvider>
  </StrictMode>,
)
