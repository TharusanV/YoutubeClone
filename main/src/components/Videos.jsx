import VideoCard from './VideoCard'

const Videos = ({videos}) => {
  console.log(videos);
  return (
    <div direction="row" style={{flexWrap:"wrap", justifyContent:"center", alignItems:"start", marginLeft: '16px', marginRight: '16px'}}>
      {videos.map((item, idx) => (
        <div style={{width: '320px', marginLeft: '8px', marginRight: '16px', display:'inline-flex'}} key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
        </div>
      ))}
    </div>
  )
}

export default Videos