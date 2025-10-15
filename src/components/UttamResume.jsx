import React from "react";
import "../App.css";

export default function UttamResume() {
  const contact = {
    phone: "+91 8696535400",
    email: "uttamadha9622@gmail.com",
    linkedin: "https://www.linkedin.com/in/uttam-adha/",
    leetcode: "https://leetcode.com/uttamadha/",
    github: "https://github.com/uttamadha/",
  };

  const projects = [
    {
      title: "WildNet: Wildlife Monitoring with CNN",
      tech: "Python, CNN, TensorFlow",
      bullets: [
        "Built a CNN-based system to detect and classify wild animals from camera feeds.",
        "Implemented image preprocessing, augmentation, and training with TensorFlow.",
        "Improved detection accuracy and streamlined species identification.",
      ],
    },
    {
      title: "Im-Split: Travel Expense Split Website",
      tech: "React, Django, Django REST Framework",
      bullets: [
        "Created an intuitive web app for splitting travel expenses among groups.",
        "Integrated Django REST API for secure database management and auth.",
        "Used React for a responsive front-end and collaborative Git workflow.",
      ],
    },
  ];

  const skills = [
    "C++", "Java", "Python", "ReactJS", "SQL", "Machine Learning", "DSA", "DBMS",
  ];

  return (
    <div className="App">
      <div className="resume-container">
        <header className="header">
          <div className="header-left">
            <div className="profile-logo">UA</div>
            <div>
              <h1>Uttam Adha</h1>
              <p>B.E. CSE • Chandigarh University (2021–2025) • CGPA: 7.62/10</p>
            </div>
          </div>
          <div className="links">
            <a href={contact.linkedin}>LinkedIn</a>
            <a href={contact.leetcode}>LeetCode</a>
            <a href={contact.github}>GitHub</a>
            <button onClick={() => window.print()}>Download CV</button>
          </div>
        </header>

        <section className="section">
          <h2>Summary</h2>
          <p>
            Passionate Computer Science student with experience in machine learning, web development, 
            and data analysis. Skilled in building CNN models, full-stack React + Django applications, 
            and analyzing data using Python.
          </p>
        </section>

        <section className="section">
          <h2>Skills</h2>
          {skills.map((s) => (
            <span className="skill-badge" key={s}>{s}</span>
          ))}
        </section>

        <section className="section">
          <h2>Projects</h2>
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p><strong>Tech Stack:</strong> {p.tech}</p>
              <ul>
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="section">
          <h2>Contact</h2>
          <p>📞 {contact.phone}</p>
          <p>✉️ {contact.email}</p>
        </section>

        <footer className="footer">
          Built with ❤️ by Uttam Adha — 2025
        </footer>
      </div>
    </div>
  );
}
