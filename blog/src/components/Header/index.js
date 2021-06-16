import React from "react";
import "./style.css";
import Paw from "../../assets/icons/paw1.png";
/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <header className="header">
      <div>
        <img src={Paw}></img>
      </div>
      <nav className="headerMenu">
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">CONTACT</a>
        <a href="#">TOOLS</a>
      </nav>
    </header>
  );
};

export default Header;
