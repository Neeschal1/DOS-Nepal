import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import Fonts from "../utils/fontsconfig.js";
import { useNavigate, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = ({
  textColor = "white",
  logo = Logo,
  bordercolor = "white/30",
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Our Courses", path: "/available-courses" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "About Us", path: "/about-us" },
  ];

  const getActiveNav = (pathname) => {
    if (pathname === "/" || pathname.startsWith("/home")) {
      return "Home";
    }

    if (pathname.startsWith("/available-courses")) {
      return "Our Courses";
    }

    if (pathname.startsWith("/success-stories")) {
      return "Success Stories";
    }

    if (pathname.startsWith("/about-us")) {
      return "About Us";
    }

    if (pathname.startsWith("/contact-us")) {
      return "Contact Us";
    }

    return "";
  };

  const active = getActiveNav(location.pathname);
  const navigation = useNavigate()

  const handleLogin = () => {
    navigation("/login")
  }
 
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (item) => {
    navigate(item.path);
    setMenuOpen(false);
  };

  return (
    <div className="relative w-full">
      <div className="flex flex-row items-center justify-between w-full gap-4 bg-transparent">
        <img
          className="h-8 sm:h-20 sm:w-20 md:h-12 lg:h-14 w-auto max-w-40 object-contain shrink-0"
          src={logo}
          alt="Logo"
        />

        {/* ------------------- Tablets/PC/Desktop------------------- */}
        <div className="hidden md:flex flex-1 items-center justify-between gap-4">
          <div
            className={`flex bg-black/2 backdrop-blur-sm p-2 border-t border-b border-r border-${bordercolor} shadow-2xl rounded-4xl items-center gap-1 lg:gap-3 mx-auto overflow-x-auto`}
          >
            {navItems.map((item) => (
              <button
                style={Fonts.poppins.light}
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`text-sm cursor-pointer lg:text-base font-poppins font-regular rounded-3xl px-4 lg:px-6 py-2 whitespace-nowrap transition-colors duration-300
                  ${
                    active === item.name
                      ? "bg-[#FF090C] text-[#F2F1FF]"
                      : `bg-transparent text-${textColor} hover:bg-[#000000] hover:text-[#F2F1FF]/70`
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* <button
          onClick={handleLogin}
            style={Fonts.poppins.regular}
            className="bg-[#FF090C] text-white px-6 lg:px-10 py-3 lg:py-4 rounded-4xl hover:bg-[#000000] duration-300 cursor-pointer whitespace-nowrap shrink-0"
          >
            Login
          </button> */}
        </div>

        {/* -------------------Mobile------------------- */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`md:hidden flex items-center justify-center h-11 w-11 shrink-0 rounded-full border border-white/30 bg-white/5 backdrop-blur-xs text-${textColor} text-2xl transition-colors duration-300`}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-112 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-4 pb-4">
          {navItems.map((item) => (
            <button
              style={Fonts.poppins.light}
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`text-left text-base font-poppins font-regular rounded-2xl px-5 py-3 transition-colors duration-300
                ${
                  active === item.name
                    ? "bg-[#FF090C] text-[#F2F1FF]"
                    : `bg-white/5 text-${textColor} hover:bg-[#000000] hover:text-[#F2F1FF]/70`
                }
              `}
            >
              {item.name}
            </button>
          ))}

          {/* <button
          onClick={handleLogin}
            style={Fonts.poppins.regular}
            className="bg-[#FF090C] text-white px-6 py-3 rounded-full hover:bg-[#000000] duration-300 cursor-pointer mt-1"
          >
            Login
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
