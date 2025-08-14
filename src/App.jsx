import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./pages/Intro";
import Profile from "./pages/Profile";
import Site from "./pages/Site";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import "./assets/css/style.scss";
import link from "./utils/link";
import { useEffect } from "react";
import lenis from "./utils/smooth";
import React from "react";

function App() {
  useEffect(() => {
    link();
    lenis();
  }, []);
  return (
    <main>
      <Header />
      <Intro />
      <Profile />
      <Site />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
