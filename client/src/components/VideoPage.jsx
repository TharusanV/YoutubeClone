import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player' 
import Videos from './Videos'
import { APIFetch } from '../utils/APIFetch'
import { Typography, Box, Stack } from "@mui/material";
//ReactPlayer - Accepts URL's

const VideoPage = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const {id} = useParams();

  

  useEffect(() => {
    APIFetch(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))

    APIFetch(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return 'Loading'; 
  
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography variant="h5" fontWeight="bold" p={2}>{videoDetail.snippet.title}</Typography>
            <Stack direction="row" justifyContent="space-between" py={1} px={2} >
              <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}>{videoDetail.snippet.channelTitle}</Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1">{parseInt(videoDetail.statistics.viewCount).toLocaleString()} views</Typography>
                <Typography variant="body1">{parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoPage