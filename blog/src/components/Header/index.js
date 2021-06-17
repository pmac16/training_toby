import React from "react";
import "./style.css";
import Paw from "../../assets/icons/paw1.png";
import Navbar from "../Navbar";
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
      <nav>
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
