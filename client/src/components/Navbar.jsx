import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

const NavButton = ({ title, onClick }) => (
  <button
    onClick={onClick}
    className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
  >
    {title}
  </button>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 gradient-bg-welcome">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <button>
          <img
            src={logo}
            alt="logo"
            className="w-32 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </button>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[""].map((item, index) => (
          <li key={item + index} className="mx-4 cursor-pointer">
            {item}
          </li>
        ))}
        <NavButton title="Market" onClick={() => navigate("/market")} />
        <NavButton
          title="Transactions"
          onClick={() => navigate("/transactions")}
        />
        <NavButton title="About" onClick={() => navigate("/about")} />
        <NavButton title="Chatbot" onClick={() => navigate("/chatbot")} />
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {[""].map((item, index) => (
              <li key={item + index} className="my-2 text-lg">
                {item}
              </li>
            ))}
            <NavButton title="Market" onClick={() => navigate("/market")} />
            <NavButton
              title="Transactions"
              onClick={() => navigate("/transactions")}
            />
            <NavButton title="About" onClick={() => navigate("/about")} />
            <NavButton title="Login" onClick={() => navigate("/login")} />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
