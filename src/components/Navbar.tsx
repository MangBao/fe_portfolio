import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Thêm useNavigate
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/bl33hIcon.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Thêm useNavigate để cập nhật URL

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "experiences", label: "Experiences" },
    { to: "contact", label: "Contact" },
  ];

  // Hàm xử lý cuộn mượt mà
  const handleScroll = (id: string) => {
    if (location.pathname === "/") {
      // Cập nhật hash trong URL
      navigate(`/#${id}`);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        closeMenu(); // Đóng menu mobile sau khi cuộn
      }
    } else {
      // Nếu không ở trang chủ, điều hướng về trang chủ rồi cuộn
      navigate(`/#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#20232f] shadow z-50">
      <div className="container mx-auto flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <button
                onClick={() => handleScroll(to)}
                className={
                  location.hash === `#${to}`
                    ? "text-blue-600 font-semibold"
                    : "text-white hover:text-blue-600"
                }
              >
                {label}
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
          {/* Button X để đóng overlay */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-gray-700 hover:text-red-600 focus:outline-none"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          {navLinks.map(({ to, label }) => (
            <button
              key={to}
              onClick={() => handleScroll(to)}
              className={
                location.hash === `#${to}`
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
