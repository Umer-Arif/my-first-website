import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import OmacsLogo from "../assets/OmacsLogo.svg?react";

// 1. Define the TypeScript interface for your props
interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

// 2. Destructure the props here
const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  return (
    <div className="app-header">
      <Link to="/" className="logo-link">
        <OmacsLogo style={{ height: "80px", width: "auto", color: "white" }} />
      </Link>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/features"> Features </Link>

        {/* 3. Add the Toggle Button */}
        <button
          onClick={toggleTheme}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.2rem",
            marginLeft: "15px",
          }}
          title="Toggle Dark/Light Mode"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </div>
  );
};

export default Header;
