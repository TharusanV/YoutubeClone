import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import Sidebar from './Sidebar';
import '../styles/sidebar.css'

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
    <div>
      <Sidebar />
      <Box p={2} minHeight="95vh" style={{backgroundColor: 'rgb(248,248,248)'}}>
        <Box display="flex" mt={10}>
          <Box sx={{ mr: { sm: '100px' } }}/>
          {<Videos videos={videos} />}
        </Box>
      </Box>
    </div>


  )
}

export default SearchFeed