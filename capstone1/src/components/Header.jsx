import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const Basic = "h-5/6   w-1/6 rounded-xl flex items-center justify-center ";
  return (
    <header className=" h-12 rounded-xl  font-bold">
      <nav className=" flex flex-row items-center  rounded-xl h-full ">
        <div className="w-1/4  flex flex-row items-center  rounded-xl h-full">
          <a
            className="h-5/6   w-1/3 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#FFC7EA" }}
          >
            Logo
          </a>
        </div>
        <div
          className="w-1/2  flex flex-row items-center   h-full shadow-xl shadow-cyan-100 rounded-md "
          style={{ backgroundColor: "#FBF0B2" }}
        >
          <ul className="flex flex-row items-center space-x-8 w-full h-full justify-center ">
            <li className={Basic}>
              <a>Home</a>
            </li>
            <li className={Basic}>
              <a>Services</a>
            </li>
            <li className={Basic}>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="w-1/4  flex flex-row items-center justify-center rounded-xl h-full">
          <a
            className="h-5/6  w-1/3 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#FFC7EA" }}
          >
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
