import MotionInView from '@/lib/framer-motion/MotionInView'

import useSupabaseStore from '@/stores/supabase-store'

import Alert from './Alerts/Alert'

const Alerts: React.FC = () => {
  const { alerts } = useSupabaseStore()

  return (
    <section className='absolute left-1/2 top-16 z-40 flex -translate-x-1/2 transform flex-col gap-2'>
      {alerts.map((alert, index) => (
        <MotionInView key={index} y={-20} duration={1.5} delay={0.5}>
          <Alert title={alert.title} message={alert.message} />
        </MotionInView>
      ))}
    </section>
  )
}

export default Alerts
