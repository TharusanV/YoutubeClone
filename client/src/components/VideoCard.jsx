import React from 'react'
import {Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

const VideoCard = ({video : {id: {videoId}, snippet }}) => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ height: '106px' }}>
      <Link to={`/video/${videoId}`} >
        <Typography variant="subtitle1" fontWeight="bold">{snippet?.title.slice(0, 60)}</Typography>
      </Link>
      <Link to={`/channel/${snippet?.channelId}`} >
        <Typography variant="subtitle2" color="gray">{snippet?.channelTitle}</Typography>
      </Link>
    </CardContent>
  </Card>
  )
}

export default VideoCard