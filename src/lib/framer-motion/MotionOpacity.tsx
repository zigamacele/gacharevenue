import { motion } from 'framer-motion'

interface MotionOpacityProps {
  children: React.ReactNode
}

const MotionOpacity: React.FC<MotionOpacityProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default MotionOpacity
