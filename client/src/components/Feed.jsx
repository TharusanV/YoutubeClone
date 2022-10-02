import React from 'react'
import { useEffect, useState } from 'react';
import VideoCategories from './VideoCategories';
import Videos from './Videos';
import { Box, Stack} from "@mui/material";


import { APIFetch } from '../utils/APIFetch';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    APIFetch(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <main>  
      <section>
        <VideoCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </section>

      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </main>
  )
}

export default Feed