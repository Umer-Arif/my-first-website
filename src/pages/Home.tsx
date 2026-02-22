import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="myhome">
        <h1>Omacs</h1>
        <p>
          <i>Editor that feels like home</i>
        </p>
        {/* Changed to lowercase to match standard routing */}
        <button onClick={() => navigate("/features")}>More</button>
      </section>

      <section className="mygrid">
        {/* Removed curly braces for cleaner code */}
        <Link to="/features#bl" className="bl-card">
          <div className="grid-1">
            <h3>Blazing fast</h3>
            <p>IDE-like yet very lightweight and blazingly fast</p>
          </div>
        </Link>

        <Link to="/features#keys" className="key-card">
          <div className="grid-2">
            <h3>VS Code-like bindings</h3>
            <p>Natural keybinds, with even more custom options</p>
          </div>
        </Link>

        <Link to="/features#AI" className="ai-card">
          <div className="grid-3">
            <h3>AI-driven</h3>
            <p>Supports all your favorite AI</p>
          </div>
        </Link>

        <Link to="/features#high-cus" className="cus-card">
          <div className="grid-4">
            <h3>Highly customizable</h3>
            <p>300+ built-in themes and more</p>
          </div>
        </Link>

        <Link to="/features#high-cus" className="cus-card">
          <div className="grid-5">
            <h3>Free foreer</h3>
            <p>Fully opensource and community driven</p>
          </div>
        </Link>

        <Link to="/features#high-cus" className="cus-card">
          <div className="grid-6">
            <h3>All languages</h3>
            <p>More than 100 languages pre-configured</p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Home;
