import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SearchIcon from '../assets/search.svg'

const Searchbar = () => {
  return (
    <form className='middle-section' onSubmit={() => {}}>
      <input className='search-bar' value='' type="text" placeholder='Search' onChange={() => {}} />
      <button className='search-button'>
        <img className='search-icon' src={SearchIcon} alt="Search Icon"/>
        <div className="tooltip">
          Search
        </div>
      </button>
    </form>
  )
}

export default Searchbar