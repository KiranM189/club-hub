import React from 'react'
import './NavBar2.css'
import logo_dark from '../../assets/logo-black.png';
import logo_light from '../../assets/logo-white.png';
import toogle_light from '../../assets/day.png';
import toogle_dark from '../../assets/night.png';
import search_b from '../../assets/search-b.png';
import search_w from '../../assets/search-w.png';

const NavBar2 = ({theme,setTheme}) => {
  const toogle_mode = ()=>{
    theme == 'light'?setTheme('dark'):setTheme('light');
  }
  return (
    <div className={`navbar ${theme}`}>
        <img src={theme == 'light'?logo_dark:logo_light} alt='' className='logo'/>
        <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Features</li>
            <li>About</li>
        </ul>
        <div className='search_bar'>
            <input type="text" placeholder='Search'/>
            <img src={theme == 'light'?search_w:search_b} alt="" />
        </div>
        <img onClick={()=>{toogle_mode()}} src={theme == 'light'?toogle_dark:toogle_light} alt="" className='toogle-icon'/>   
    </div>
  )
}

export default NavBar2
