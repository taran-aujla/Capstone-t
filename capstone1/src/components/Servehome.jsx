import React from "react";
import Home from "./Home";

function Servehome({ x }) {
  return (
    <>
      <div
        className={` h-32 w-48   text-lg font-bold text-slate-200 flex justify-center items-center rounded-lg shadow-xl shadow-cyan-200 hover:shadow-slate-700 hover:text-black`}
        style={{ backgroundColor: "#007ea7" }}
      >
        {x}
      </div>
    </>
  );
}

export default Servehome;
