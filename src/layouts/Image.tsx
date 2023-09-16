import LazyLoad from 'react-lazy-load'

import { QueryOutput } from '@/types/supabase'

interface ImageProps {
  data: QueryOutput
  className?: string
  height: number
  width: number
}

const Image: React.FC<ImageProps> = ({ data, className, height, width }) => {
  return (
    <LazyLoad height={height} width={width}>
      <img src={data.background} alt={data.en_name} className={className} />
    </LazyLoad>
  )
}

export default Image
