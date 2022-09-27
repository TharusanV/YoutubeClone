import React from 'react'
import VideoCard from './VideoCard'

const Videos = ({videos}) => {
  return (
    <div direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, index) => (
        <div key={index}>
          {item.id.videoID && <VideoCard video={item}/>}
        </div>
      ))};
    </div>
  )
}

export default Videos