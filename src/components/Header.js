import React from 'react';
import logo from '../images/logo.png'

const Header = ({onSelect}) => {

    const handleSelect = (event, tab) => {
        event.preventDefault();
        onSelect(tab);
      };
    
    return (
        <nav class="bg-[#171C2A] py-4">
    <div class="navBar">
      <a  onClick={(event) => handleSelect(event ,'home')} href="/">
        <img src={logo} alt="LWS" class="max-w-[140px]" />
      </a>

      <div class="flex gap-4">
        <a href="/" class="navHome" id="lws-home"  onClick={(event) => handleSelect(event ,'home')}> Home </a>
        <a href="/" class="navCart"  id="lws-cart"  onClick={(event) => handleSelect(event , 'cart')}>
          <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
          <span id="lws-totalCart">0</span>
        </a>
      </div>
    </div>
  </nav>
    );
};

export default Header;