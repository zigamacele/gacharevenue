import ErrorMessage from './ErrorBoundary/ErrorMessage'
import ErrorNavigation from './ErrorBoundary/ErrorNavigation'
import Logo from '../components/Logo.tsx'

interface ErrorBoundaryProps {
  error: string
  resetErrorBoundary: () => void
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  error,
  resetErrorBoundary,
}) => {
  const maintenanceMode = error === 'maintenance'
  return (
    <section className='absolute left-0 right-0 top-1/2 flex -translate-y-1/2 flex-col items-center gap-4'>
      <Logo logoProps='h-24' textProps='text-3xl hidden' gap='gap-3' />
      <ErrorMessage maintenanceMode={maintenanceMode} />
      <ErrorNavigation
        resetErrorBoundary={resetErrorBoundary}
        hide={maintenanceMode}
      />
    </section>
  )
}

export default ErrorBoundary
