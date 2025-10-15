import React from "react";
import "../App.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Hello everyone, I’m <strong>Uttam</strong>
        </p>
       <p>Aspiring Python Developer with strong skills in Python, PyQt GUI development, SQL (MariaDB, Oracle), and AI/ML. Seeking an internship to contribute to Python-based solutions and gain hands-on experience in software development.</p>
      </div>

      <h2>Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>B.E. in Computer Science & Engineering</h3>
            <span>Chandigarh University, 2021 – 2025</span>
            <p>CGPA: 7.62 / 10</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>12th Standard</h3>
            <span>Seedling Modern Public School, 2021</span>
            <p>Percentage: 74.2%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
