import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logoText from "../../assets/images/Positivus.png";

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed w-full h-24 lg:h-28 xl:h-36 2xl:h-36 bg-white top-0 flex z-50 border-t-8 border-[#B9FF66] masthead ${
          scrolled ? "gsticky" : ""
        }`}
      >
        <div className="nav-holder flex items-center justify-between px-10 xl:px-12 2xl:px-[100px] w-full">
          <a href="#" className=" logo flex gap-3">
            <img src={logo} alt="logo" />
            <img src={logoText} alt="Positivus" />
          </a>

          <div className="menu hidden lg:hidden xl:block">
            <ul className="flex xl:gap-2 2xl:gap-10 items-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `py-1 px-3 text-[20px] text-black hover:bg-[#B9FF66] rounded-[10px] ${
                      isActive ? "bg-[#B9FF66]" : "bg-transparent"
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
                    `py-1 px-3 text-[20px] text-black hover:bg-[#B9FF66] rounded-[10px] ${
                      isActive ? "bg-[#B9FF66]" : "bg-transparent"
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
                    `py-1 px-3 text-[20px] text-black hover:bg-[#B9FF66] rounded-[10px] ${
                      isActive ? "bg-[#B9FF66]" : "bg-transparent"
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
                    `py-1 px-3 text-[20px] text-black hover:bg-[#B9FF66] rounded-[10px] ${
                      isActive ? "bg-[#B9FF66]" : "bg-transparent"
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
                    `py-1 px-3 text-[20px] text-black hover:bg-[#B9FF66] rounded-[10px] ${
                      isActive ? "bg-[#B9FF66]" : "bg-transparent"
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
                    `py-1 px-3 text-[20px] text-black hover:bg-[#B9FF66] rounded-[10px] ${
                      isActive ? "bg-[#B9FF66]" : "bg-transparent"
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    `py-3 px-4  xl:py-3 xl:px-4  2xl:py-5 2xl:px-9 text-[20px] text-black hover:bg-[#B9FF66] border border-[#191A23] rounded-[14px] inline-block ${
                      isActive ? "" : "bg-transparent"
                    }`
                  }
                >
                  Request a Quote
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
