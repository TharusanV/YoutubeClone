import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Videos from "./Videos"
import ChannelCard from "./ChannelCard"
import { APIFetch } from "../utils/APIFetch"
import { Box } from "@mui/material"

const ChannelPage = () => {  
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await APIFetch(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      const videosData = await APIFetch(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);


  return (

    <Box minHeight="95vh">
      <Box>
        <div style={{height:'300px', backgroundColor: 'red', zIndex: 10,}}>
          <ChannelCard channelDetail={channelDetail}/>
        </div>
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
    
  )
}

export default ChannelPage