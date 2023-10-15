interface YoutubeEmbedProps {
  embedId: string
  className?: string
}
const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId, className }) => (
  <div className='video-responsive'>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      className={className}
    />
  </div>
)

export default YoutubeEmbed
