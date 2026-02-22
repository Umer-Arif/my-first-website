import React from "react";
import { Link } from "react-router-dom";
import OmacsLogo from "../assets/OmacsLogo.svg";

const Header: React.FC = () => {
  return (
    <>
      <div className="app-header">
        <Link to="/" className="logo-link">
          <img
            src={OmacsLogo}
            alt="Omacs Logo"
            style={{ height: "80px", width: "auto" }}
          />
        </Link>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/features"> Features </Link>
          {/* <Link to="/contact"> Contact </Link> */}
        </nav>
      </div>
    </>
  );
};

export default Header;
