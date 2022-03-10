import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='aimouse__navbar'>
      <div className="aimouse__navbar-links">
        <div className="aimouse__navbar-links_logo">
          <p><a href="#home">AI MOUSE</a></p>
        </div>
      </div>
      <div className="aimouse__navbar-login">
        <div className='aimouse__navbar-login_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#shop">Shop</a></p>
        </div>
        <button type='button'>Login</button>
      </div>
      <div className="aimouse__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="aimouse__navbar-menu_container scale-up-center">
            <div className="aimouse__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#about">About</a></p>
              <p><a href="#shop">Shop</a></p>
              <div className="aimouse__navbar-menu_container-links-login">
                <button type="button">Login</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
