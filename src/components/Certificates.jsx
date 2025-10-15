import React from "react";
import "../App.css";

export default function Certificates() {
  const certs = [
    {
      name: "Exploratory Data Analysis for Machine Learning (Coursera)",
      link: "https://drive.google.com/file/d/1jUypbKdHRbl-pSX185Kh0KEZPwgYeDDT/view?usp=sharing"
    },
    {
      name: "Probability and Statistics (NPTEL)",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23MA24S5333179504311667"
    },
    {
      name: "Discrete Mathematics (NPTEL)",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS123S5467079210048446"
    },
    {
      name: "Front-End Web Development with React (Coursera)",
      link: "https://drive.google.com/file/d/1yNemGi_3bo3X0nXNXuapkD7s-xe9j2Dz/view?usp=sharing"
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <h2>Certifications</h2>
      <div className="cert-list">
        {certs.map((c, i) => (
          <a
            key={i}
            href={c.link}
            className="cert-card"
            target="_blank"
            rel="noreferrer"
          >
            {c.name}
          </a>
        ))}
      </div>
    </section>
  );
}
