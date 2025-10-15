import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub} from "react-icons/fa";
import "../App.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xw6a6kp", // replace with your EmailJS service ID
        "template_wyavbs5", // replace with your EmailJS template ID
        form.current,
        "D0Uv0azO4lsUKqlGs" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error)
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-section">
        <h3>Let’s Connect</h3>
        <div className="social-links">
                  <a href="https://github.com/UttamAdha96" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/uttam-adha-50bb40208/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                  </a>
        </div>
      </div>
    </section>
  );
}
