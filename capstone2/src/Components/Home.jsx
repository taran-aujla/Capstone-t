import React from "react";
import Header from "./Header";
import { Carousell } from "./Carousell";
import { Updates } from "./Updates";
import Services from "./Services";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Carousell />
      <Updates />
      <Services />
      <h1>wow</h1>
    </>
  );
}

export default Home;
