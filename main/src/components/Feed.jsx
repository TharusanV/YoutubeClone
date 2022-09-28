import React from 'react'
import '../styles/feed.css';
import { useEffect, useState } from 'react';
import VideoCategories from './VideoCategories';
import Videos from './Videos';

import { APIFetch } from '../utils/APIFetch';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    APIFetch(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <main style={{flexDirection: { style: 'column', md: 'row'}}}>
      
      <section style={{height: { style: 'auto', md: '100vh'}}}>
        <VideoCategories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </section>

      <section style={{height: "100vh", marginLeft: '80px', marginTop: '130px'}}>
        <Videos videos={videos}/>
      </section>
    </main>
  )
}

export default Feed