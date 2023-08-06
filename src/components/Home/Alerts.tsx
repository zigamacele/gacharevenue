import useSupabaseStore from '@/stores/supabase-store'
import Alert from './Alerts/Alert'

const Alerts: React.FC = () => {
  const { alerts } = useSupabaseStore()

  return (
    <section className='absolute left-1/2 top-16 flex -translate-x-1/2 transform flex-col gap-2'>
      {alerts.map((alert, index) => (
        <Alert key={index} title={alert.title} message={alert.message} />
      ))}
    </section>
  )
}

export default Alerts
