import React from "react";
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
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-1 px-3 underline underline-offset-4 hover:text-[#b9ff66]  ${
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
                `py-1 px-3 underline underline-offset-4 hover:text-[#b9ff66]  ${
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
                `py-1 px-3 underline underline-offset-4 hover:text-[#b9ff66] ${
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
                `py-1 px-3 underline underline-offset-4 hover:text-[#b9ff66] ${
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
                `py-1 px-3 underline underline-offset-4 hover:text-[#b9ff66]  ${
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
                `py-1 px-3 underline underline-offset-4 hover:text-[#b9ff66]  ${
                  isActive ? "text-[#b9ff66]" : "text-white"
                }`
              }
            >
              Blog
            </NavLink>
          </li>
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
