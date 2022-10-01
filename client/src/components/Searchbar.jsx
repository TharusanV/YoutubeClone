import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SearchIcon from '../assets/search.svg'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); //Forms reload the page we dont want that to happen when something is searched
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      
    }
  }

  return (
    <form className='middle-section' onSubmit={handleSubmit}>
      <input className='search-bar' value={searchTerm} type="text" placeholder='Search' onChange={(event) => {setSearchTerm(event.target.value);}} />
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