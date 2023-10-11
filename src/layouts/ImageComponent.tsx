import { useEffect, useState } from 'react'
import { BlurhashCanvas } from 'react-blurhash'

interface ImageProps {
  src?: string
  blurhash?: string | null
  alt?: string
  className?: string
  height: number
  width: number
}

const ImageComponent: React.FC<ImageProps> = ({
  className,
  src,
  blurhash,
  alt,
  height,
  width,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const DEFAULT_BLURHASH = 'LAA-F,00%g?wx]adRixv4T?bM_Ri'
  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImageLoaded(true)
    }
    img.src = src ?? ''
  }, [src])
  return (
    <>
      {!imageLoaded ? (
        <BlurhashCanvas
          hash={blurhash ?? DEFAULT_BLURHASH}
          height={height}
          width={width}
          punch={1}
        />
      ) : (
        <img src={src} alt={alt} className={className} />
      )}
    </>
  )
}

export default ImageComponent
