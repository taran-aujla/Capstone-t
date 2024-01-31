import React, { useState } from "react";

function Mservice({ text, serve }) {
  const [isHover, setHover] = useState(false);

  return (
    <div className="w-11/12 h-44 m-7 ">
      <ul className="flex flex-row h-5/6 space-x-5">
        <li
          className=" w-1/6 bg-slate-400 rounded-2xl text-white  flex justify-center items-center font-extrabold text-xl hover:text-black hover:shadow-lg hover:shadow-black"
          style={{ height: "100%", backgroundColor: "#007ea7" }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {serve}
        </li>
        <li
          className=" w-4/5 bg-white rounded-2xl flex justify-center items-center"
          style={{ height: "100%" }}
        >
          {isHover && (
            <li
              className=" w-full  rounded-2xl flex justify-center items-center text-white"
              style={{ height: "100%", backgroundColor: "#003459" }}
            >
              {text}
            </li>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Mservice;
