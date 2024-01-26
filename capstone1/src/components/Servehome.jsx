import React from "react";
import Home from "./Home";

function Servehome({ x }) {
  return (
    <>
      <div
        className={` h-32 w-48   text-lg text-slate-400 rounded-lg shadow-xl shadow-cyan-200 `}
        style={{ backgroundColor: "#D8B4F8" }}
      >
        {x}
      </div>
    </>
  );
}

export default Servehome;
