import React from "react";
import Home from "./Home";

function Servehome({ x }) {
  return (
    <>
      <div
        className={` h-32 w-48   text-lg font-bold text-black flex justify-center items-center rounded-lg shadow-xl shadow-cyan-200 hover:shadow-yellow-600 hover:text-2xl`}
        style={{ backgroundColor: "#D8B4F8" }}
      >
        {x}
      </div>
    </>
  );
}

export default Servehome;
