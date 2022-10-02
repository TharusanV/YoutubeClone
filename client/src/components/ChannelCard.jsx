import React from 'react'
import { Link } from 'react-router-dom'
import { Box, CardContent, CardMedia, Typography } from '@mui/material';

const ChannelCard = ({channelDetail}) => {
  return (
    <Box sx={{
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto'
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url} alt={channelDetail?.snippet?.title} 
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid black' }}/>
        
          <Typography variant="h6">{channelDetail?.snippet?.title}{' '}</Typography>
        </CardContent>
      </Link>
    </Box>
    
  )
}

export default ChannelCard