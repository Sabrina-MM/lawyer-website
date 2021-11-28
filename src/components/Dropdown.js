import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "../css/Dropdown.css";

export default function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <ul
      onClick={handleClick}
      className={click ? "dropdown-menu clicked" : "drown-menu"}
    >
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
