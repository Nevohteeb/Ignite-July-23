import React, {useState} from 'react'
import MobileMenu from './MobileMenu'
import {Link} from "react-router-dom"
import { List } from 'react-bootstrap-icons';

const Header = () => {
  // declare on and off state for navbar
  const [menuIsOpen, openMenu] = useState(false);
  // toggle the state of openMenu
  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen);
    document.body.classList.toggle('no-scroll');
  }

  return (
    <>
      <div id='topnav'>
        <div id='logo'>
          <Link to="/"><img src="public/logos/Main_Logo_1.svg" alt="" /></Link>
        </div>


        {/* Desktop Menu, which only appears on large screens */}
        <ul id='menu'>
          <li>
            <Link to="/cdd">Creative Digital Design</Link>
          </li>
          <li>
            <Link to="/wux">Web/UX</Link>
          </li>
        </ul>

        {/* Hamburger icon, only shows up on small screens. */}
        <div id="menu-container">
          <button id="menu-button" className='show-mobile-menu-button' onClick={toggleMobileMenu}>
            <List id="hamburger-icon" />
          </button>
        </div>
      </div>

      {/* If menuIsOpen, show the mobile menu*/}
      {/* give the mobile menu our close method (toggleMobileMenu) too, as a prop, so you can close it by clicking on a link */}
      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
      {/* If menuIsOpen, show the close button */}
    </>
              

            
  )
}

export default Header