import React from 'react'
import '../styles/videocategory.css';
import { videoCategories } from '../utils';

const VideoCategories = ({selectedCategory, setSelectedCategory}) => {
  return (
    <div className='categories-nav' direction='row' style={{overflowY: 'auto'}}>
      {videoCategories.map((category) => (
        <button className='category'
        onClick={() => setSelectedCategory(category.name)} 
        key={category.name}
        style={{
          background: category.name === selectedCategory && 'black', 
          borderColor: category.name === selectedCategory && 'black', 
          color: category.name === selectedCategory && 'white'}}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default VideoCategories