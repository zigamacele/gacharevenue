interface ErrorMessageProps {
  maintenanceMode: boolean
}

const maintenanceMsg = (
  <>
    <h2 className='mb-1 text-xl font-medium text-neutral-200'>
      Maintenance Alert
    </h2>
    <p>Sorry we are currenlty down for scheduled monthly maintenance.</p>
    <p>We should be back around 12:00 CEST</p>
  </>
)

const normalMsg = (
  <>
    <h2 className='mb-1 text-xl font-medium text-neutral-200'>
      Oops.. Looks like your luck ran out
    </h2>
    <p>Time to put on tinfoil hat and try again!</p>
  </>
)

const ErrorMessage: React.FC<ErrorMessageProps> = ({ maintenanceMode }) => {
  return (
    <div className=' flex flex-col items-center justify-center gap-0.5 text-neutral-500'>
      {maintenanceMode ? maintenanceMsg : normalMsg}
    </div>
  )
}

export default ErrorMessage
