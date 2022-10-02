import { Link } from "react-router-dom"; 
import '../styles/header.css';

import Searchbar from "./Searchbar";
import YTLogo from '../assets/youtube-logo.svg'
import HamburgerMenuIcon from '../assets/hamburger-menu.svg'
import SettingsIcon from '../assets/settings.svg'


const Navbar = () => {
  return (
    <header className='header'>
      <div className='left-section'>
        <img className='hamburger-menu' src={HamburgerMenuIcon} alt="Hamburger Menu Icon"/>
        <Link to="/" >
          <div style={{display: 'flex', flexWrap: 'nowrap'}}>
            <img className='youtube-logo' src={YTLogo} alt="YT Logo"/>
            <div className='nation'>GB</div>
          </div>
        </Link>
      </div>


      <Searchbar />
      
      <Link to="/" className='right-section'>
        <button className='settings-button'>
          <img className='settings-icon' src={SettingsIcon} alt="Settings Icon"/>
          <div className="tooltip">
            Settings
          </div>
        </button>
      </Link>
    </header>
  )
}

export default Navbar