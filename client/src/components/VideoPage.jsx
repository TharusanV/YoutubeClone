import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player' 
import Videos from './Videos'
import { APIFetch } from '../utils/APIFetch'
import '../styles/videoPage.css'
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
    <div style={{minHeight: "100vh", position: 'relative', top: '80px', backgroundColor: 'rgb(248,248,248)'}}>
      <div style={{direction: {xs: 'column', md: 'row'}, display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex'}}>
          <div style={{sx: {width: '100%', position: 'sticky'}}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls/>
            <p style={{display: 'inline', fontWeight: 'bold', fontSize: '20px'}}>{videoDetail.snippet.title}</p>
            <div style={{direction: 'row', justifyContent:'space-between'}}>
              <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                <p style={{display: 'inline', fontWeight: 'bold', fontSize: '20px'}}>{videoDetail.snippet.channelTitle}</p>
              </Link>

              <div style={{direction:"row", display: 'flex', justifyContent: 'end'}}>
                <p style={{display: 'inline', margin: 0, paddingRight: '100px'}}>
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
                </p>
                <p style={{display: 'inline', margin: 0}}>
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{display: 'inline-flex', margin: 'right', width: '350px'}}>
          <Videos videos={videos}/>
        </div>
      </div>
    </div>
  )
}

export default VideoPage