import React from "react";
import { Link } from "react-router-dom";
// 1. Add ?react to the end of the path
import OmacsLogo from "../assets/OmacsLogo.svg?react";

const Header: React.FC = () => {
  return (
    <div className="app-header">
      <Link to="/" className="logo-link">
        <OmacsLogo style={{ height: "80px", width: "auto", color: "white" }} />
      </Link>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/features"> Features </Link>
      </nav>
    </div>
  );
};

export default Header;
