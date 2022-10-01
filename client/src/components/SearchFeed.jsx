import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { APIFetch } from "../utils/APIFetch";
import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    APIFetch(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <div style={{height: '95vh'}}>
      <div display="flex">
        {<Videos videos={videos} />}
      </div>
    </div>
  )
}

export default SearchFeed