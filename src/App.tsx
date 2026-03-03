import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";

const App: React.FC = () => {
  // 1. Get saved theme or default to dark
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark",
  );

  // 2. Update the HTML attribute whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* 3. Pass the function and current state to Header */}
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
