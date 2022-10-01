import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { APIFetch } from "../utils/APIFetch";
import Videos from "./Videos";
import Sidebar from "./Sidebar";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    APIFetch(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <div>
      <Sidebar />

      <div style={{height: '95vh', position: 'relative', left: '75px', top: '80px'}}>
        <div style={{display:"flex", justifyContent: "center"}}>
          {<Videos videos={videos} />}
        </div>
      </div>

    </div>

  )
}

export default SearchFeed