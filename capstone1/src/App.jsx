import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { Link, NavLink } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <h1>f</h1>
      <Footer />
    </>
  );
}

export default App;
