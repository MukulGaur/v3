import React from 'react';
import './header.css';
import Logo from '../../assets/logo.png';

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
                    <span className='menu'>01.</span><span className='menu-item'> ABOUT</span>
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
    </>
  )
}

export default Header