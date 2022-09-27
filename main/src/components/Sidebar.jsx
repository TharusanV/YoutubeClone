import React from 'react'
import '../styles/sidebar.css';
import { sidebarCategories } from '../utils';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      {sidebarCategories.map((categories) => (
        <div className="sidebar-link"
        key={categories.name}
        >
          <img src={categories.icon} alt='Icon'/>
          <div>{categories.name}</div>
        </div>     
      ))}
    </nav>
  )
}

export default Sidebar