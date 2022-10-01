import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos}) => {
  if(!videos?.length) return 'Loading...';

  return (
    <div direction="row" 
    style={{backgroundColor: '#F8F8F8', flexWrap:"wrap", justifyContent:"center", alignItems:"start", paddingLeft: '5px', marginRight: '16px', paddingTop: '10px'}}>
      {videos.map((item, idx) => (
        <div style={{width: '320px', backgroundColor: '#F8F8F8', marginLeft: '8px', marginRight: '16px', display:'inline-flex'}} key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} /> }
        </div>
      ))}
    </div>
  )
}

export default Videos