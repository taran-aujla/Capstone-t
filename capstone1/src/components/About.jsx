import React from "react";

function About() {
  return (
    <div className="flex flex-col m-14 w-11/12 " style={{ height: "100%" }}>
      <div className="h-96 ">
        <ul
          className="flex flex-row justify-center items-center rounded-2xl"
          style={{ height: "100%" }}
        >
          <li
            className=" w-2/3    rounded-2xl flex justify-center items-center "
            style={{ height: "100%" }}
          >
            The project is a groundbreaking initiative integrating advanced
            technologies such as blockchain, React, HTML, JavaScript, Tailwind
            CSS, and React Router DOM. This innovative solution aims to address
            societal challenges in traffic management, anti-corruption measures,
            land registry, and voting systems. In the realm of traffic
            management, the project establishes a secure and automated system
            using decentralized principles and smart contracts. For
            anti-corruption measures, it employs blockchain for transparent
            record-keeping and process automation. The land registry component
            ensures secure and transparent property transactions, while the
            voting system utilizes a comprehensive tech stack for secure and
            transparent elections. The project's adaptability is demonstrated
            through the use of React Native for mobile applications, and the
            integration of Vite expedites development. Machine learning is
            introduced for advanced analysis and prediction. In summary, the
            project represents a sophisticated fusion of technologies,
            showcasing technical proficiency and a visionary approach to solving
            real-world challenges with a focus on transparency and efficiency.
          </li>
          <li
            className=" w-1/3  bg-slate-700 rounded-full flex justify-center items-center "
            style={{
              height: "100%",
            }}
          >
            img
          </li>
        </ul>
      </div>
      <div className=" h-56  w-11/12 mt-28 flex flex-col shadow-2xl items-center rounded-3xl hover:shadow-amber-600 ">
        <div
          className=" h-1/5 w-full rounded-t-3xl font-bold flex items-center justify-center"
          style={{ backgroundColor: "#FFC7EA" }}
        >
          About team
        </div>
        <div
          className="h-4/5 bg-slate-300 w-full rounded-b-3xl"
          style={{ backgroundColor: "#D8B4F8" }}
        >
          us
        </div>
      </div>
    </div>
  );
}

export default About;
