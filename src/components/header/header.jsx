import React from 'react';
import './header.css';
import Logo from '../../assets/logo.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

const Header = () => {
  return (
    <>
      <header>
        <figure>
            <img src={Logo} alt="Mukul Gaur" id="logo" />
        </figure>
        <nav>
            <ul>
                <li>
                    <a href='#about-section'><span className='menu'>01.</span><span className='menu-item'> ABOUT</span></a>
                </li>
                <li>
                    <span className='menu'>02.</span><span className='menu-item'> EXPERIENCE</span>
                </li>
                <li>
                    <span className='menu'>03.</span><span className='menu-item'> PROJECTS</span>
                </li>
                <li>
                    <button id='resume'>RESUME</button>
                </li>
            </ul>
        </nav>
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