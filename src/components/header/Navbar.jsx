import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-6 text-[14px] max-md:hidden">
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return isActive ? { color: "#f4b50e" } : { color: "#000" };
          }}
        >
          {" "}
          <li>Home</li>
        </NavLink>
        <NavLink
          to={"/About-Us"}
          style={({ isActive }) => {
            return isActive ? { color: "#f4b50e" } : { color: "#000" };
          }}
        >
          {" "}
          <li>About Us</li>
        </NavLink>
        <NavLink
          to={"/CaseStudy"}
          style={({ isActive }) => {
            return isActive ? { color: "#f4b50e" } : { color: "#000" };
          }}
        >
          {" "}
          <li>Case Study</li>
        </NavLink>
        <NavLink
          to={"/Contact-Us"}
          style={({ isActive }) => {
            return isActive ? { color: "#f4b50e" } : { color: "#000" };
          }}
        >
          {" "}
          <li>Contact Us</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
