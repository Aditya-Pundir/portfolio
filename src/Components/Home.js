import React from "react";
import Banner from "./Banner";
import Skills from "./Skills";
import Reviews from "./Reviews";
import Projects from "./Projects";
// import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Banner />
      <Skills />
      <Reviews />
      <Projects />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
