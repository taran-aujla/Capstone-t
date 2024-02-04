import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { Carousell } from "./Components/Carousell";
import Services from "./Components/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Carousell />
      <Services />
      <h1>wow</h1>
      <Footer />
    </>
  );
}

export default App;
