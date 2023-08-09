import { motion } from 'framer-motion'

interface MotionInViewProps {
  children: React.ReactNode
  y?: number
  duration?: number
  styles?: string
  bounce?: boolean
  delay?: number
}

const MotionInView: React.FC<MotionInViewProps> = ({
  children,
  y = 20,
  duration = 1,
  styles,
  bounce,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: bounce ? 0.4 : 0,
          duration,
          delay,
        },
      }}
      className={styles}
    >
      {children}
    </motion.div>
  )
}

export default MotionInView
