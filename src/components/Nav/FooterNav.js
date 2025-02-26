import React from "react";
import { listMenu } from "./CallMenu";
import { NavLink } from "react-router-dom";
import footerLogo from "../../assets/images/footer-logo.png";
import footerLogoText from "../../assets/images/footer-Positivus.png";
import In from "../../assets/images/in.png";
import fb from "../../assets/images/fb.png";
import twitter from "../../assets/images/twitter.png";

function FooterNav() {
  return (
    <div className="nav-holder flex items-center flex-wrap justify-between flex-col lg:flex-row gap-6 lg:gap-0">
      <a href="#" className="logo flex gap-3 items-center">
        <img src={footerLogo} alt="logo" />
        <img src={footerLogoText} alt="Positivus" />
      </a>
      <div className="menu">
        <ul className="flex flex-col lg:flex-row gap-2 xl:gap-2 2xl:gap-10 items-center">
          {listMenu.map((menu, i) => (
            <NavLink
              key={i}
              className={({ isActive }) =>
                `py-1 px-3 underline underline-offset-4 capitalize hover:text-[#b9ff66]  ${
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
      <div className="nav-social flex gap-5">
        <img src={In} alt="In" />
        <img src={fb} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
      </div>
    </div>
  );
}

export default FooterNav;
