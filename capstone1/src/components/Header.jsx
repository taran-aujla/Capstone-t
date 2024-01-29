import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const Basic =
    "h-5/6   w-1/6  flex items-center justify-center hover:text-black   hover:border-b-stone-950 ";
  return (
    <header className=" h-12 rounded-xl text-slate-200  font-bold ">
      <nav className=" flex flex-row items-center  rounded-xl h-full  ">
        <div className="w-1/4  flex flex-row items-center  rounded-xl h-full ">
          <a
            className="h-5/6   w-1/3 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#00a8e8" }}
          >
            Logo
          </a>
        </div>
        <div
          className="w-1/2  flex flex-row items-center   h-full shadow-md shadow-slate-600 rounded-md "
          style={{ backgroundColor: "#00a8e8" }}
        >
          <ul className="flex flex-row items-center space-x-8 w-full h-full justify-center  ">
            <NavLink
              to={"/"}
              className={Basic}
              style={{ borderColor: "#FFC7EA" }}
            >
              <a>Home</a>
            </NavLink>
            <NavLink to={"/services"} className={`${Basic}`}>
              <a>Services</a>
            </NavLink>
            <NavLink to={"/about"} className={Basic}>
              <a>About</a>
            </NavLink>
          </ul>
        </div>
        <NavLink
          to={"login"}
          className="w-1/4  flex flex-row items-center justify-center rounded-xl h-full"
        >
          <a
            className="h-5/6  w-1/3 rounded-lg flex items-center justify-center border   hover:text-black  hover:border-b-stone-950"
            style={{ backgroundColor: "#00a8e8" }}
          >
            Login
          </a>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
