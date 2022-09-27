import { Link } from "react-router-dom"; 
import '../styles/header.css';

import Searchbar from "./Searchbar";
import YTLogo from '../assets/youtube-logo.svg'
import HamburgerMenuIcon from '../assets/hamburger-menu.svg'
import SettingsIcon from '../assets/settings.svg'


const Navbar = () => {
  return (
    <header className='header'>
      <Link to="/" className='left-section'>
        <img className='hamburger-menu' src={HamburgerMenuIcon} alt="Hamburger Menu Icon"/>
        <img className='youtube-logo' src={YTLogo} alt="YT Logo"/>
        <div className='nation'>GB</div>
      </Link>

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