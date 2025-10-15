import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
 

  return (
    <>
    <Navbar/>
    <Home/>
     <About/>
    <Skills/>
      <Projects />
     <Certificates />
<Contact/>

     <Footer/>
    </>
  );
}

export default App;
