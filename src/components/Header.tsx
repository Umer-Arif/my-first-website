import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
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
