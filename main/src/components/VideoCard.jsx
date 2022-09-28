import React from 'react'
import {Link } from 'react-router-dom'

const VideoCard = ({video : {id: {videoId}, snippet }}) => {
  return (
    <div className='VideoCard' style={{width: '100%', marginBottom: '40px', justifyContent: 'center'}}>
      <Link to={`/video/${videoId}`}>
        <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} style={{ width: '100%', height: '180px' }} />
      </Link>

      <div style={{ width: '100%', height: '100px'}}>
        <Link to={`/video/${videoId}`}>
          <p style={{margin: 0, color: 'black', fontWeight: 'bold', height: '42px', fontFamily: 'Arial'}}> {snippet?.title.slice(0,60)}</p>
        </Link>
        <Link to={`/channel/${snippet?.channelId}`}>
          <p style={{margin: 0, fontWeight: 'bold', fontSize: '10px', color: 'grey', fontFamily: 'Arial'}}> {snippet?.channelTitle}</p>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard