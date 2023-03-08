import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../images/logo.png';

const Header = ({onSelect}) => {

    const addedProduct = useSelector((state) => state.cartItems)
    const cartCount = addedProduct.reduce((prevCount , item) => item.quantity + prevCount , 0)
    

    const handleSelect = (event, tab) => {
        event.preventDefault();
        onSelect(tab);
      };
    
    return (
        <nav className="bg-[#171C2A] py-4">
    <div className="navBar">
      <a  onClick={(event) => handleSelect(event ,'home')} href="/">
        <img src={logo} alt="LWS" className="max-w-[140px]" />
      </a>

      <div className="flex gap-4">
        <a href="/" className="navHome" id="lws-home"  onClick={(event) => handleSelect(event ,'home')}> Home </a>
        <a href="/" className="navCart"  id="lws-cart"  onClick={(event) => handleSelect(event , 'cart')}>
          <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
          <span id="lws-totalCart">{cartCount}</span>
        </a>
      </div>
    </div>
  </nav>
    );
};

export default Header;