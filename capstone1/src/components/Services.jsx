import React from "react";
import { Link } from "react-router-dom";
import Mservice from "./Mservice";

function Services() {
  return (
    <div
      style={{ height: "100%" }}
      className=" flex flex-col items-center pt-6 space-y-6 "
    >
      <div
        className="bg-slate-500  m-10 rounded-lg text-gray-900"
        style={{ backgroundColor: "#ffffff" }}
      >
        <ul className=" h-44 flex flex-col justify-center items-center">
          <li className=" font-extrabold text-xl">
            For The tech <a className=" text-3xl">📡</a>
          </li>
          <br />
          <li>
            "Blockchain, the architectural marvel of decentralized trust, stands
            as a testament to human ingenuity. It intertwines cryptography with
            consensus, creating a secure and transparent tapestry that
            revolutionizes industries. In its decentralized ledger, we find the
            symphony of innovation, redefining the very essence of trust in the
            digital age."
          </li>
        </ul>
      </div>
      <div className=" w-full " style={{ height: "100%" }}>
        <Mservice
          serve="Traffic "
          text="
Blockchain in traffic systems ensures secure and transparent transactions, automates rule enforcement with smart contracts, and facilitates quick verification of licenses. It enhances accountability, reduces fraud, and streamlines traffic management for increased efficiency."
        />
        <Mservice
          serve="Land registory"
          text="
Blockchain in land registry ensures secure and transparent transactions, automates processes with smart contracts, and facilitates quick verification of property ownership. It enhances transparency, reduces fraud, and streamlines land registry for increased efficiency."
        />
        <Mservice
          serve="voting"
          text="
Blockchain in voting ensures secure and transparent elections by recording votes securely and automating processes with smart contracts. It reduces fraud, enhances election integrity, and provides an efficient voting system."
        />
        <Mservice
          serve="Corruption reporting"
          text="
Blockchain combats corruption through decentralized and transparent record-keeping, reducing opportunities for corrupt practices. Its transparency and automation, facilitated by smart contracts, enhance accountability and integrity across sectors."
        />
      </div>
    </div>
  );
}

export default Services;
