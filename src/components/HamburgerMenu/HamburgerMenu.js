import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-hamburger.png";
import logoText from "../../assets/images/Positivus-hamburger.png";
import menuData from "../../data/menuData.json";

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
          {menuData.map((menu, i) => (
            <NavLink
              key={i}
              className={({ isActive }) =>
                `py-1 px-3 text-2xl hover:text-[#b9ff66] capitalize ${
                  isActive ? "text-[#b9ff66]" : "text-white"
                }`
              }
              to={menu.link}
            >
              {menu.menuName}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
