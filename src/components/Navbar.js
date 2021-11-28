import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCaretDown } from "react-icons/ai";

import "../css/Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const closeMobileMenu = () => setClick(false);

  const closeAndHamburgerLogo = {
    color: "var(---green-color",
    marginLeft: 15,
    width: 30,
  };

  return (
    <>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <GrClose style={closeAndHamburgerLogo} className="d-lg-none" />
          ) : (
            <GiHamburgerMenu
              style={closeAndHamburgerLogo}
              className="d-lg-none"
            />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              isActive={(m, l) => l.pathname === "/" && l.hash === ""}
              className="nav-links"
              onClick={closeMobileMenu}
              activeStyle={{ color: "var(---green-color)" }}
            >
              INICIO
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Biografia"
              isActive={(m, l) => l.pathname === "/Biografia"}
              className="nav-links"
              onClick={closeMobileMenu}
              activeStyle={{ color: "var(---green-color)" }}
            >
              BIOGRAFIA
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/#contact-links"
              smooth
              isActive={(m, l) => l.hash === "#contact-links"}
              className="nav-links"
              onClick={closeMobileMenu}
              activeStyle={{ color: "var(---green-color)" }}
            >
              CONTACTO
            </NavLink>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to="/#specialization-link"
              isActive={(m, l) => l.pathname === "/penal"}
              className="nav-links"
              onClick={closeMobileMenu}
              activeStyle={{ color: "var(---green-color)" }}
            >
              ESPECIALIDADES <AiOutlineCaretDown />
            </NavLink>

            {dropdown && <Dropdown />}
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="facebook-icon"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="instagram-icon"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
