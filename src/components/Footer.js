import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Contact Me</h2>
        <p>Email: yashwanthm1582@gmail.com</p>
        <p>website: yashwanthchiluka.xyz</p>
        <p>Address: Denton, Texas, USA</p>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Made by Yashwanth Chiluka❤️. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
