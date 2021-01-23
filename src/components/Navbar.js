import React, {useState} from "react";
import logo from '../img/logo.png'; 
import {FiMenu} from 'react-icons/fi';
// import {useLocation} from 'react-router-dom';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  // const {pathname} = useLocation(); 

  // console.log(pathname)

  return (
    <nav className="navbar">
      {showMenu ? (
        <div className = "navbar_menu_open">
        <ul className="navbar__ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        </div>) : (
          <div className = "navbar_menu_close">
          </div>
      )}
      <div className="navbar__text">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="navbar__ul_main">
          <li>
            <a href="" onClick = {e => window.scrollTo(0, 100)}>Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className = "navbar_icon">
          <a href = "#" onClick = {e => setShowMenu(!showMenu)}><FiMenu/></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
