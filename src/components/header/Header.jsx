import React, { useState } from 'react';
import './header.css';
import Logo from '../../assets/logo.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  const[isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      <header className={isActive ? 'active':''}>
        <figure>
            <img src={Logo} alt="Mukul Gaur" id="logo" />
        </figure>
        <nav>
            <ul className='navbar-list'>
                <li className='list-link'>
                    <span className='menu-number'>01.</span><span className='menu-item'> ABOUT</span>
                </li>
                <li className='list-link'>
                    <span className='menu-number'>02.</span><span className='menu-item'> EXPERIENCE</span>
                </li>
                <li className='list-link'>
                    <span className='menu-number'>03.</span><span className='menu-item'> PROJECTS</span>
                </li>
                <li className='list-link'>
                    <button id='resume'>RESUME</button>
                </li>
            </ul>
        </nav>
        <div onClick={ () => toggleNavbar()} className="mobile-navbar-btn">
          <MenuIcon name='menu' className='mobile-nav-icon'/>
          <CloseIcon name='close' className='mobile-nav-icon'/>
        </div>
      </header>
      <aside className='profile'>
        <div id='github'>
          <GitHubIcon/>
        </div>
        <div id='linkedin'>
          <LinkedInIcon/>
        </div>
        <div id='mail'>
          <MailIcon/>
        </div>
      </aside>
      <div className='line-2'></div>
    </>
  )
}

export default Header