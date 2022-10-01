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

      <section style={{backgroundColor: '#F8F8F8', height: "100vh", position: 'relative', left: '70px', top: '110px'}}>
        <Videos videos={videos}/>
      </section>
    </main>
  )
}

export default Feed