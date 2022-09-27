import VideoCard from './VideoCard'

const Videos = ({videos}) => {
  console.log(videos);
  return (
    <div direction='row' style={{flexWrap:'wrap', justifyContent:'start', alignItems:"start"}} >
      {videos.map((item, idx) => (
        <div key={idx} style={{display: 'flex'}}>
          {item.id.videoId && <VideoCard video={item} /> }
        </div>
      ))}
    </div>
  )
}

export default Videos