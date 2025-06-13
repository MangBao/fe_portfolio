import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/bl33hIcon.png";
import { useMenus } from "../hooks/useMenus";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { data: menus, isLoading } = useMenus();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleScroll = (menu_url: string) => {
    console.log("menu_url", menu_url);

    if (location.pathname === "/") {
      navigate(`/${menu_url}`);
      const element = document.getElementById(menu_url.substring(1));

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        closeMenu();
      }
    } else {
      navigate(`/${menu_url}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#20232f] shadow z-[100]">
      <div className="container mx-auto flex justify-between items-center h-16">
        <div
          className="text-2xl font-bold text-blue-600"
          onClick={() => handleScroll("#home")}
        >
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {!isLoading &&
            menus?.map(({ menu_url, menu_name }) => (
              <li key={menu_url.substring(1)}>
                <button
                  onClick={() => handleScroll(menu_url)}
                  className={
                    location.hash === `${menu_url}`
                      ? "text-blue-600 font-semibold"
                      : "text-white hover:text-blue-600"
                  }
                >
                  {menu_name}
                </button>
              </li>
            ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 text-lg">
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-gray-700 hover:text-red-600 focus:outline-none"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          {!isLoading &&
            menus?.map(({ menu_url, menu_name }) => (
              <button
                key={menu_url.substring(1)}
                onClick={() => handleScroll(menu_url)}
                className={
                  location.hash === `${menu_url}`
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }
              >
                {menu_name}
              </button>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
