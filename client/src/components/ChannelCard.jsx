import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = ({channelDetail}) => {
  return (
    <div style={{position: 'relative', justifyContent: 'center', alignItems: 'center', marginBottom: '40px'}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div style={{}}>
          <img src={channelDetail?.snippet?.thumbnails?.high?.url} 
          alt={channelDetail?.snippet?.title} style={{ width: '180px', height: '180px', borderRadius: '50%'}} />
        </div>

        <p style={{margin: 0, display: 'inline', justifyContent: 'center', alignItems: 'center', whiteSpace: 'nowrap'}}>
          {channelDetail?.snippet?.title}
        </p>
      </Link>
    </div>
    
  )
}

export default ChannelCard