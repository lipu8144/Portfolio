import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";

const Home = () => {
  document.title = "Lipu Swain"
  return <div>
    {/* <Header /> */}
    <Hero />
  </div>;
};

export default Home;
