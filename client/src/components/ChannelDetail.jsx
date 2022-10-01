import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Videos from "./Videos"
import ChannelCard from "./ChannelCard"
import { APIFetch } from "../utils/APIFetch"

const ChannelDetail = () => {  
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
    <div style={{height: '100%', position: 'relative', top: '70px', backgroundColor: 'rgb(248,248,248)'}}>
      <div>
        <div style={{background: 'red', zIndex: 10, height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{position: 'relative', top: '45px', left: '50px'}}>
            <ChannelCard channelDetail={channelDetail} />
          </div>
        </div>
      </div>
      
      <div>
        <div style={{position: 'relative', top: '100px', left: '80px'}}>
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  )
}

export default ChannelDetail