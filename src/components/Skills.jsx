import React from "react";
import "../App.css";

export default function Skills() {

  return (
    <section id="skills" className="skills">
              <h2>Skills & Technologies</h2>
             <div className="skills-container">
  <div className="skill-card">
    <h3>Programming Languages</h3>
    <ul>
      <li>C++, Java, Python (NumPy, Pandas, PyQt5, GUI Design, Matplotlib, Seaborn, scikit-learn, BeautifulSoup, Selenium)</li>
      <li>SQL (MySQL, SQLite)</li>
    </ul>
  </div>

  <div className="skill-card">
    <h3>Web & Mobile Development</h3>
    <ul>
      <li>React.js, React Native (Expo CLI), JavaScript, HTML5, CSS3, Tailwind CSS</li>
      <li>Django, Django REST Framework</li>
      <li>Tools & Platforms – Git and GitHub, VS Code</li>
    </ul>
  </div>

  <div className="skill-card">
    <h3>Machine Learning & Data Analysis</h3>
    <ul>
      <li>Regression, Classification, CNN, Model Evaluation</li>
      <li>Data Collection, Preprocessing & Visualization, EDA </li>
      <li>Tools & Platforms – Jupyter Lab, PowerBI dashboard</li>
    </ul>
  </div>
</div>

    </section>
  );
}
