import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/siddhesh-sawant-b2703a1a5/">
          Siddhesh Sawant
        </a>
      </span>
      <hr style={{ width: "90%" }} />

      <div className="iconContainer">
        <a href="https://www.instagram.com/siddheshs3000/">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/siddhesh-sawant-b2703a1a5/">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
