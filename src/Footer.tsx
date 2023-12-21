import React from 'react';
import './syles/Footer.sass';

import bookmark from "./images/logo-bookmark.svg"
import twitter from "./images/icon-twitter.svg"
import facebook from "./images/icon-facebook.svg"

const Footer: React.FC = () => {
  return (
    <footer>
      <nav>
        <a href="#"><img src={bookmark} alt="bookmark logo" /></a>
        <ul className="links">
          <li><a href="#">features</a></li>
          <li><a href="#">pricing</a></li>
          <li><a href="#">contact</a></li>
        </ul>
        <ul className="social-links">
          <li><a href="#"><img src={facebook} alt="facebook icon" /></a></li>
          <li><a href="#"><img src={twitter} alt="twitter icon" /></a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
