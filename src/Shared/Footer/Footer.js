import React from "react";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer py-20 pl-4 bg-black text-white ">
      <div className="lg:flex lg:flex-col flex flex-col  lg:items-start items-center lg:justify-start justify-center">
        <img alt="" src={logo} />
        <p className="lg:text-left text-center">
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div className="lg:flex lg:flex-col flex flex-col  lg:items-start items-center lg:justify-start justify-center">
        <span className="footer-title lg:text-left text-center">Services</span>
        <a href="/" className="link link-hover lg:text-left text-center ">
          Branding
        </a>
        <a href="/" className="link link-hover lg:text-left text-center">
          Design
        </a>
        <a href="/" className="link link-hover">
          Marketing
        </a>
        <a href="/" className="link link-hover">
          Advertisement
        </a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="/" className="link link-hover">
          About us
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
        <a href="/" className="link link-hover">
          Jobs
        </a>
        <a href="/" className="link link-hover">
          Press kit
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="/" className="link link-hover">
          Terms of use
        </a>
        <a href="/" className="link link-hover">
          Privacy policy
        </a>
        <a href="/" className="link link-hover">
          Cookie policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
