import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-single-line">
        &copy; {new Date().getFullYear()} Uttam Adha. Built with React.js, CSS.
      </div>
    </footer>
  );
};

export default Footer;
