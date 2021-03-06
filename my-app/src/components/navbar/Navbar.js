import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ flexColumn, hover, justifyStart, toggleFunc }) => (
  <>
    <nav
      className={`d-flex ${
        justifyStart ? "justify-content-start" : "justify-content-center"
      } ${flexColumn ? "flex-column" : ""}`}
    >
      <NavLink
        onClick={toggleFunc}
        to="/"
        exact
        activeStyle={{
          fontWeight: "bold",
        }}
        activeClassName="o-menu-active"
        className={`position-relative m-3 text-dark ${hover ? "o-hover" : ""}`}
      >
        About
      </NavLink>
      {/* <NavLink
        onClick={toggleFunc}
        to="/portfolio"
        activeClassName="o-menu-active"
        className={`position-relative m-3 text-dark ${hover ? "o-hover" : ""}`}
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Portfolio
      </NavLink> */}
      <NavLink
        onClick={toggleFunc}
        to="/skill"
        activeClassName="o-menu-active"
        className={`position-relative m-3 text-dark ${hover ? "o-hover" : ""}`}
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Skill
      </NavLink>
      <NavLink
        onClick={toggleFunc}
        to="/resumePdf"
        activeClassName="o-menu-active"
        className={`position-relative m-3 text-dark ${hover ? "o-hover" : ""}`}
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Resume
      </NavLink>
      <NavLink
        onClick={toggleFunc}
        to="/contact"
        activeClassName="o-menu-active"
        className={`position-relative m-3 text-dark ${hover ? "o-hover" : ""}`}
        activeStyle={{
          fontWeight: "bold",
        }}
      >
        Contact
      </NavLink>
    </nav>
  </>
);

export default Navbar;
