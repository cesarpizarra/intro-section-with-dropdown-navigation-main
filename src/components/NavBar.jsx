import React, { useState } from "react";
import { navLinks, form } from "../api/api";
import logo from "../assets/logo.svg";
import menubar from "../assets/icon-menu.svg";
import closebar from "../assets/icon-close-menu.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import arrowUp from "../assets/icon-arrow-up.svg";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleNavClick = () => {
    setNav(!nav);
    document.body.classList.toggle("dark-filter");
  };

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-8">
      <div className="flex items-center justify-between py-7">
        {/* Logo and Navlinks */}
        <ul className="flex justify-center items-center">
          <img src={logo} alt="logo" />
          {navLinks.map((links, index) => (
            <li
              key={index}
              className="hidden md:flex items-center px-5 cursor-pointer font-medium relative"
              onClick={() => toggleDropdown(index)}
            >
              {links.label}
              {links.hasDropDown && (
                <div>
                  <img
                    src={openDropdown === index ? arrowUp : arrowDown}
                    className="ml-1 cursor-pointer w-4 h-3"
                    alt="dropdown icon"
                  />
                  {openDropdown === index && (
                    <ul className="bg-white absolute top-full left-0 shadow-xl mt-2 py-2 px-5 rounded-lg">
                      {links.dropDownItems.map((item, i) => (
                        <li
                          key={i}
                          className="z-10 flex items-center gap-3 py-2 font-normal"
                        >
                          {item.icon && (
                            <img src={item.icon} alt="dropdown item icon" />
                          )}
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* forms */}
        <ul className="flex justify-center items-center">
          {form.map((form, index) => (
            <li
              key={index}
              className={`hidden md:flex px-5 cursor-pointer font-medium ${
                form.registerForm
                  ? "border-2 border-gray-500 rounded-full py-[4px] hover:bg-gray-400 hover:text-white transition duration-300"
                  : ""
              }`}
            >
              {form.label}
            </li>
          ))}
        </ul>

        {/* menus bar and close bar */}
        <div onClick={handleNavClick} className="md:hidden z-10 cursor-pointer">
          {!nav ? (
            <img src={menubar} alt="menubar" />
          ) : (
            <img src={closebar} alt="closebar" />
          )}
        </div>

        {/* Links for mobile device*/}
        <ul
          className={`${
            nav
              ? "bg-white flex items-start py-20  flex-col fixed right-0 top-0 w-72 md:w-full h-full  ease-in-out duration-500 transition-all"
              : "bg-white flex items-start py-20 flex-col fixed right-[-25rem] top-0 w-72 md:w-full h-full  ease-in-out duration-500 transition-all"
          } md:hidden`}
        >
          {navLinks.map((links, index) => (
            <li
              key={index}
              className="px-6 py-4 cursor-pointer font-medium"
              onClick={() => toggleDropdown(index)}
            >
              {links.label}
              {links.hasDropDown && (
                <>
                  <img
                    src={openDropdown === index ? arrowUp : arrowDown}
                    className="ml-1 cursor-pointer"
                    alt="dropdown icon"
                  />
                  {openDropdown === index && (
                    <ul className="bottom-0 shadow-xl rounded-lg mt-2 py-2 px-4">
                      {links.dropDownItems.map((item, i) => (
                        <li key={i} className="py-1">
                          {item.icon && (
                            <img src={item.icon} alt="dropdown item icon" />
                          )}
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
          <ul className="flex items-center justify-center flex-col px-12">
            {form.map((form, index) => (
              <li
                key={index}
                className={`px-6 py-4 cursor-pointer font-medium ${
                  form.registerForm
                    ? "border border-black rounded-full py-[4px] hover:bg-black hover:text-white transition duration-300"
                    : ""
                }`}
              >
                {form.label}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
