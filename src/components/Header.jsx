import { useState } from "react";
import { headerNav } from "../contents/textdata";
import React from "react";
function Header() {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <header id="header">
      <div className="header_inner">
        <h1 className="header_logo">
          <a href="/">My Portfolio Site</a>
        </h1>
        <nav className="header_nav">
          <ul>
            {headerNav.map((list, index) => (
              <li key={index}>
                <a href={list.url}>{list.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav_mobile" id="toggle_menu">
          <button
            className="toggle_btn"
            onClick={() => {
              toggleMenu();
            }}
          >
            toggle
          </button>
          {show && (
            <nav className="header_nav">
              <ul>
                {headerNav.map((list, index) => (
                  <li key={index}>
                    <a href={list.url}>{list.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
