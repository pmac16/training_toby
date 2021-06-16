import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Search from "../../assets/icons/search.png";

/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("Searched");
  };

  const openSearch = () => {
    setSearch(true);
  };

  const searchClass = search ? "searchInput active" : "searchInput";

  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to="/post">POSTS</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">CONTACT</NavLink>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search" />
          <img
            className="searchIcon"
            onClick={openSearch}
            src={Search}
            alt="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
