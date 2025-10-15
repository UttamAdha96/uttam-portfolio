import React from "react";
import "../App.css";

export default function Projects() {
  const projects = [
    {
      title: "Personal Finance Manager",
      tech: "Python, PyQt5, SQLite, Matplotlib",
      desc: "Built a modern GUI desktop app to track and manage income/expenses with secure local storage and visual insights through interactive Matplotlib charts.",
      link: "https://github.com/UttamAdha96/Personal-Finance-Manager",
    },
    {
      title: "WildNet: Wildlife Detection using CNN",
      tech: "Python, TensorFlow, CNN",
      desc: "Developed an AI-powered system for real-time detection and classification of wild animals using deep learning (CNN) and computer vision.",
      link: "https://github.com/UttamAdha96/Wild_Animal_Detection_CNN/",
    },
    {
      title: "Im-Split: Travel Expense Splitter",
      tech: "ReactJS, Django, REST Framework",
      desc: "Created a responsive web platform for effortless group expense tracking, leveraging REST APIs and dynamic UI for real-time calculations.",
      link: "https://github.com/UttamAdha96/Travel-Expense-Split",
    },
    {
      title: "AI-Chatbot: Laptop Virtual Assistant",
      tech: "Python, PyQt5",
      desc: "Designed a voice-enabled desktop assistant capable of executing system commands, answering queries, and automating workflows.",
      link: "https://github.com/UttamAdha96/AI-Chatbot-Laptop-Virtual-Assistant",
    },
  ];

  return (
    <section id="projects" className="projects modern-projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="project-card-modern" key={i}>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-tech">{p.tech}</p>
            <p className="project-desc">{p.desc}</p>
            <a href={p.link} className="project-btn" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
