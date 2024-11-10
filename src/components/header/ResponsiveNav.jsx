import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        className={`${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        menu
      </button>
      <button
        className={`${isOpen ? "" : "hidden"} flex justify-end`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src="../src/assets/xmark-solid.svg"
          alt="X-Mark"
          className="w-[20px] flex justify-center items-center"
        />
      </button>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } w-[50%] h-[100vh] bg-[#fff] absolute top-[68px] left-[0] flex flex-col`}
      >
        <nav className="m-[5%]">
          <ul className="flex flex-col gap-[20px]">
            <NavLink
              to={"/"}
              style={({ isActive }) => {
                return isActive ? { color: "#f4b50e" } : { color: "#000" };
              }}
            >
              {" "}
              <li onClick={() => setIsOpen((prev) => !prev)}>Home</li>
            </NavLink>
            <NavLink
              to={"/About-Us"}
              style={({ isActive }) => {
                return isActive ? { color: "#f4b50e" } : { color: "#000" };
              }}
            >
              {" "}
              <li onClick={() => setIsOpen((prev) => !prev)}>About Us</li>
            </NavLink>
            <NavLink
              to={"/"}
              style={({ isActive }) => {
                return isActive ? { color: "#f4b50e" } : { color: "#000" };
              }}
            >
              {" "}
              <li onClick={() => setIsOpen((prev) => !prev)}>Case Study</li>
            </NavLink>
            <NavLink
              to={"/About-Us"}
              style={({ isActive }) => {
                return isActive ? { color: "#f4b50e" } : { color: "#000" };
              }}
            >
              {" "}
              <li onClick={() => setIsOpen((prev) => !prev)}>Contact Us</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveNav;
