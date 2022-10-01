import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/channelCard.css'

const ChannelCard = ({channelDetail}) => {
  return (
    <div className='channel-card-main-div'>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div>
          <img className='channel-profile-icon' src={channelDetail?.snippet?.thumbnails?.high?.url} alt={channelDetail?.snippet?.title} />
        </div>

        <p className='channel-profile-title'>
          {channelDetail?.snippet?.title}
        </p>
      </Link>
    </div>
    
  )
}

export default ChannelCard