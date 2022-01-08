import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

import { NavbarData } from "./NavbarData.js";
import "../../css/Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  const showNav = () => setNav(!nav);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={nav ? "nav" : "nav active"}>
          <ul className="nav-menu-items" onClick={showNav}>
            {/* <li className="logo">
              <img src="../img/logo.png" alt="" />
              낫유포
            </li> */}
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span className="icon">{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
