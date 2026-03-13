import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignJustify, FiX } from "react-icons/fi";
import Logo from "./Logo";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const navItem = [
    { title: "Home", link: "/" },
    { title: "How It Works", link: "/how-it-works" },
    { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="navContainer bg-[#1E3A5F] min-h-16 flex items-center justify-between relative z-50">
        <Logo className=" mx-10" ></Logo>
        

        <div className="hidden nav-item md:flex items-center justify-between w-120">
          {navItem.map((item) => (
            <NavLink
              to={item.link}
              key={item.title}
              className={({ isActive }) =>
                `hover:text-shadow-white hover:scale-105 transition-all duration-200 ease-in-out  text-white ${isActive ? "border-b" : ""}`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>

        <div className="login hidden mx-15 bg-[#306cec] md:flex items-center justify-center py-2 px-4 rounded text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_0_18px_rgba(48,108,236,0.85)]">
          <Link to="login">Login</Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden mx-6">
          <button
            onClick={handleClick}
            className="text-white text-2xl p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
          >
            {open ? <FiX /> : <FiAlignJustify />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div
        className={`open-div md:hidden absolute right-0 z-40  bg-[#2a4f7a]   rounded-bl-2xl w-[65%] shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-600 ease-in-out ${
          open ? "max-w-xs   opacity-100" : "max-w-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1 py-4 px-6">
          {navItem.map((item) => (
            <NavLink
              to={item.link}
              key={item.title}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 px-4 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white/15 text-blue-200 border-l-3 border-blue-300"
                    : "text-white/85 hover:bg-white/10 hover:text-white hover:pl-6"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}

          <div className="border-t border-white/15 mt-3 pt-4">
            <Link
              to="login"
              onClick={() => setOpen(false)}
              className="block text-center bg-[#306cec] text-white py-2.5 px-4 rounded-lg font-medium text-[15px] transition-all duration-200 hover:bg-[#2558c9] hover:shadow-[0_0_18px_rgba(48,108,236,0.6)]"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;