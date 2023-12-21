import { useState, useEffect } from 'react';
import './syles/Header.sass';
import bgDots from './images/logo-bookmark.svg';
import hamburger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';


import twitter from "./images/icon-twitter.svg"
import facebook from "./images/icon-facebook.svg"


const Header = () => {
  const [menuItemsDisplay, setMenuItemsDisplay] = useState('');
  const toggleMenuItems = () => {
    const newDisplayValue = menuItemsDisplay === 'flex' ? '' : 'flex';
    setMenuItemsDisplay(newDisplayValue);
  };

  return (
      <>
      <nav className="menu">
      <img src={bgDots} className={menuItemsDisplay === ''? "logoFilter":"logoFilterActive"} alt="logo" />
      <button onClick={toggleMenuItems} className="buttonMenu">
      <img src={menuItemsDisplay === ''? hamburger:close} className="" alt="logo" /></button>
      

      <ul className={`menu-items`} style={{ display: menuItemsDisplay }}>
        <a href="/">FEATURES</a>
        <a href="/about">PRICING</a>
        <a href="/contact">CONTACT</a>
        <div className="login">LOGIN</div>

        <ul className="iconMenu">
          <a href="#"><img src={twitter} alt="facebook icon"/></a>
          <a href="#"><img src={facebook} alt="twitter icon"/></a>
        </ul>
      </ul>
        
  

    </nav>
  
    </>
    
  
  );
};

export default Header;








