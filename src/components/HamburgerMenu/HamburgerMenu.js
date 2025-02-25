import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-hamburger.png";
import logoText from "../../assets/images/Positivus-hamburger.png";

function HamburgerMenu() {
  return (
    <div className="res-bar fixed right-0 h-full bg-[#191a23] w-64 sm:w-80">
      <div className="logo-area pt-8 pb-14">
        <a
          className="flex flex-col items-center gap-3"
          href="#"
          aria-label="logo"
        >
          <img src={logo} alt="Positivus" />
          <img src={logoText} alt="Positivus" />
        </a>
      </div>
      <div className="menu">
        <ul className="flex flex-col gap-4 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-1 px-3 text-2xl hover:text-[#b9ff66]  ${
                  isActive ? "text-[#b9ff66]" : "text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `py-1 px-3 text-2xl hover:text-[#b9ff66]  ${
                  isActive ? "text-[#b9ff66]" : "text-white"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `py-1 px-3 text-2xl hover:text-[#b9ff66] ${
                  isActive ? "text-[#b9ff66]" : "text-white"
                }`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/use-cases"
              className={({ isActive }) =>
                `py-1 px-3 text-2xl hover:text-[#b9ff66] ${
                  isActive ? "text-[#b9ff66]" : "text-white"
                }`
              }
            >
              Use Cases
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `py-1 px-3 text-2xl hover:text-[#b9ff66]  ${
                  isActive ? "text-[#b9ff66]" : "text-white"
                }`
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `py-1 px-3 text-2xl hover:text-[#b9ff66]  ${
                  isActive ? "text-[#b9ff66]" : "text-white"
                }`
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
