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
            className=" w-2/3    rounded-2xl flex flex-col justify-center items-center "
            style={{ height: "100%" }}
          >
            <a className="mb-5 text-xl font-bold">Over View 🪸</a>
            The project is a groundbreaking initiative integrating advanced
            technologies such as Machine Learning, Blockchain,
            React-JS,React-Native, HTML, JavaScript, Tailwind CSS, and React
            Router DOM. This innovative solution aims to address societal
            challenges in traffic management, anti-corruption measures, land
            registry, and voting systems. In the realm of traffic management,
            the project establishes a secure and automated system using
            decentralized principles and smart contracts. For anti-corruption
            measures, it employs blockchain for transparent record-keeping and
            process automation. The land registry component ensures secure and
            transparent property transactions, while the voting system utilizes
            a comprehensive tech stack for secure and transparent elections. The
            project's adaptability is demonstrated through the use of React
            Native for mobile applications, and the integration of Vite
            expedites development. Machine learning is introduced for advanced
            analysis and prediction. In summary, the project represents a
            sophisticated fusion of technologies, showcasing technical
            proficiency and a visionary approach to solving real-world
            challenges with a focus on transparency and efficiency.
          </li>
          <li
            className=" w-1/5  bg-slate-700 rounded-2xl flex justify-center items-center "
            style={{
              height: "100%",
              backgroundImage: `url(
                'https://source.unsplash.com/random/?Sky/'
              )`,
            }}
          ></li>
        </ul>
      </div>
      <div className=" h-56  w-11/12 mt-28 flex flex-col shadow-2xl items-center rounded-lg hover:shadow-slate-800">
        <div
          className=" h-1/5 w-full rounded-t-lg font-bold flex items-center justify-center"
          style={{ backgroundColor: "#00a8e8" }}
        >
          About team
        </div>
        <div
          className="h-4/5 bg-slate-300 w-full rounded-b-lg flex flex-col justify-center items-center text-white "
          style={{ backgroundColor: "#003459" }}
        >
          <ul className="flex flex-row space-x-20 font-bold text-sky-400">
            <li>Name</li>
            <li>Batch</li>
            <li>contribution</li>
          </ul>
          <ul className="flex flex-row space-x-20">
            <li>Taranjot Singh</li>
            <li>3NC8</li>
            <li>Webdevloper</li>
          </ul>
          <ul className="flex flex-row space-x-20">
            <li>Vishav Singla</li>
            <li>3NC8</li>
            <li>Machine Learning</li>
          </ul>
          <ul className="flex flex-row space-x-20">
            <li>Yuvraj Singh</li>
            <li>3NC8</li>
            <li>Appdev</li>
          </ul>
          <ul className="flex flex-row space-x-20">
            <li>Mayank Aggarwal</li>
            <li>COE</li>
            <li>Machine Learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
