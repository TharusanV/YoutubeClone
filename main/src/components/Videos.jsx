import VideoCard from './VideoCard'

const Videos = ({videos}) => {
  console.log(videos);
  return (
    <div direction="row" style={{flexWrap:"wrap", justifyContent:"start", alignItems:"start", paddingLeft: '85px', paddingTop: '130px'}}>
      {videos.map((item, idx) => (
        <div style={{width: '323px', marginLeft: '5px', display:'inline-flex'}} key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
        </div>
      ))}
    </div>
  )
}

export default Videos