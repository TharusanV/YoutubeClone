import React from 'react'
import {Link } from 'react-router-dom'

const VideoCard = ({video : {id: {videoId}, snippet }}) => {
  return (
    <div className='VideoCard' style={{width: '358px', height: '300'}}>
      <Link to={`/video/${videoId}`}>
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} style={{ width: '358px', height: '180px' }} />
      </Link>

      <div style={{ width: '358px', height: '106px'}}>
        <Link to={`/video/${videoId}`}>
          <p style={{margin: 0, color: 'black', fontWeight: 'bold', display: 'inline'}}> {snippet?.title.slice(0,60)}</p>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
          <p style={{margin: 0, color: 'black', fontWeight: 'bold', display: 'inline-flex'}}> {snippet?.channelTitle}</p>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard