import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <Logo />
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>ACCEUIL</li>
        </NavLink>

        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>ABOUT</li>
        </NavLink>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>CONTACT</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
