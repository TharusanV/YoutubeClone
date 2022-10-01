import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Videos from "./Videos"
import ChannelCard from "./ChannelCard"
import { APIFetch } from "../utils/APIFetch"
import '../styles/channelPage.css'

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
    <div className="channel-page-main-div">
      <div>
        <div className="channel-page-header-div">
          <div className="channel-page-profile-card-div">
            <ChannelCard channelDetail={channelDetail} />
          </div>
        </div>
      </div>
      
      <div>
        <div className="channel-page-video-section-div">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  )
}

export default ChannelPage