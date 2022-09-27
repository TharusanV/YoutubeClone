import React from 'react'
import '../styles/feed.css';
import { useEffect, useState } from 'react';
import VideoCategories from './VideoCategories';
import Videos from './Videos';

import { APIFetch } from '../utils/APIFetch';

const Feed = () => {
  const [videos, setVideos] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    APIFetch(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <main style={{ flexDirection: { style: 'column', md: 'row'}}}>
      <section style={{height: { style: 'auto', md: '100vh'}}}>
        <VideoCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </section>

      <section style={{overflowY: "auto", height: "100vh", flex: 2 }}>
        <Videos videos={videos}/>
      </section>
    </main>
  )
}

export default Feed