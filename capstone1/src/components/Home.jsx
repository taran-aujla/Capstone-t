import React from "react";
import Servehome from "./Servehome";
import { Carousell } from "./Carousell";
import { Link } from "react-router-dom";

function Home() {
  const Up =
    "h-20 w-28 rounded-xl flex flex-col justify-center items-center text-white ";

  return (
    <div
      style={{ height: "100%" }}
      className="flex flex-col items-center pt-6 space-y-6"
    >
      <Carousell />
      <div className="h-28 mt-5">
        <ul className="h-24 flex flex-row items-center space-x-9 font-bold text-xl">
          <li className="flex flex-wrap">
            <a href="" style={{ color: "#333" }}>
              Latest
            </a>
            <a href="" style={{ color: "#333" }}>
              Updates🗣️
            </a>{" "}
          </li>
          <li className={Up} style={{ backgroundColor: "#333" }}>
            2
          </li>
          <li className={Up} style={{ backgroundColor: "#333" }}>
            3
          </li>
          <li className={Up} style={{ backgroundColor: "#333" }}>
            4
          </li>
          <li className={Up} style={{ backgroundColor: "#333" }}>
            5
          </li>
          <li className={Up} style={{ backgroundColor: "#333" }}>
            6
          </li>
        </ul>
      </div>
      <div className="flex flex-row" style={{ height: "100%" }}>
        <div className="w-1/2 mt-20 text-center" style={{ height: "100%" }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#333" }}>
            For Interface
          </h2>
          <p className="text-gray-600" style={{ color: "#555" }}>
            Explore the latest updates and features in our project. This
            front-end is built using HTML, CSS, Vite, JavaScript, React.js,
            Tailwind CSS, and React Router DOM. Dive into the world of modern
            web development!
          </p>
        </div>

        <div className="flex flex-row w-1/2 flex-wrap mt-20 space">
          <div className="m-7">
            <Servehome x="Traffic" />
          </div>
          <div className="m-7">
            <Servehome x="Land Registry" />
          </div>
          <div className="m-7">
            <Servehome x="Voting" />
          </div>
          <div className="m-7">
            <Servehome x="Corruption Report" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
