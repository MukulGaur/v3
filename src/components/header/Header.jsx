import React, { useState } from 'react';
import './header.css';
import Logo from '../../assets/logo.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Resume from '../../assets/Mukul Gaur Resume.pdf';

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
                    <a href='#about-detail'><span className='menu-number'>01.</span><span className='menu-item'> ABOUT</span></a>
                </li>
                <li className='list-link'>
                    <a href='#exp-section'><span className='menu-number'>02.</span><span className='menu-item'> EXPERIENCE</span></a>
                </li>
                <li className='list-link'>
                    <a href='#project-section'><span className='menu-number'>03.</span><span className='menu-item'> PROJECTS</span></a>
                </li>
                <li className='list-link'>
                    <button id='resume'><a href={Resume} download>RESUME</a></button>
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
          <GitHubIcon onClick={() => window.open("https://github.com/MukulGaur")} />
        </div>
        <div id='linkedin'>
          <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/mukul-gaur/")} />
        </div>
        <div id='mail'>
          <MailIcon onClick={() => window.open("https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=mukulgaur91@gmail.com")} />
        </div>
      </aside>
      <div className='line-2'></div>
    </>
  )
}

export default Header