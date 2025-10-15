import React from "react";
import "../App.css";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
       <h1>Hi, I'm <span>Uttam Adha</span></h1>
        <p>Computer Science Engineer | Machine Learning Enthusiast | Web Developer | Mobile app Developer</p>
        <a href="#about" className="btn">Explore More</a>
      </div>
    </section>
  );
}
