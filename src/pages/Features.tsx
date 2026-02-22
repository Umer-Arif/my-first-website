import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import speedImg from "../assets/speed.png";
import bindingsImg from "../assets/bindings.png";
import aiImg from "../assets/ai-search.png";
import customImg from "../assets/customization.png";
import openSourceImg from "../assets/opensource.png";
import ideImg from "../assets/ide-features.png";

function Features() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="features-container">
      <section className="myfeatures">
        <h1>Our features</h1>
      </section>

      {/* Main Content Container */}
      <section className="f-content">
        {/* Feature 1: Blazing Fast */}
        <div className="feature-row" id="bl">
          <div className="feature-text">
            <h3>Blazing fast</h3>
            <p>
              Lightweight and optimized to stay responsive, this setup boasts a
              startup time of &lt;1.0ms, rivaling the speed of Doom Emacs.
              Despite offering a full IDE experience, it remains surprisingly
              fast by leveraging lazy loading and byte compilation by default to
              ensure peak performance.
            </p>
          </div>
          <div className="feature-image">
            <img src={speedImg} alt="Speed Benchmark" />
          </div>
        </div>

        {/* Feature 2: Beginner Friendly */}
        <div className="feature-row" id="keys">
          <div className="feature-text">
            <h3>Beginner friendly bindings</h3>
            <p>
              Familiar keybindings work right out of the box by using universal
              shortcuts like Ctrl+C for copy, rather than traditional Emacs
              commands. While it feels like a modern editor, it remains Emacs at
              its core, allowing you to easily enable Vim (Evil-mode) or classic
              Emacs bindings, and create fully custom mappings to fit your
              workflow.
            </p>
          </div>
          <div className="feature-image">
            <img src={bindingsImg} alt="Bindings" />
          </div>
        </div>

        {/* Feature 3: AI-Driven */}
        <div className="feature-row" id="AI">
          <div className="feature-text">
            <h3>AI-driven</h3>
            <p>
              Smart AI assistance is integrated directly into your workflow,
              providing AI-powered completions by default, just like a modern
              IDE. Beyond standard chat, you can query your entire project
              instantly: simply press Alt + i (or M-i) to send a prompt and let
              the AI search your directory for answers, saving you from manual
              context-switching.
            </p>
          </div>
          <div className="feature-image">
            <img src={aiImg} alt="AI" />
          </div>
        </div>

        {/* Feature 4: Customizable */}
        <div className="feature-row" id="high-cus">
          <div className="feature-text">
            <h3>Highly customizable</h3>
            <p>
              Tweak every detail to match your workflow with limitless
              extensibility. Because it is built on a modular architecture, you
              can customize everything from the UI aesthetics to deep core logic
              using Elisp. Whether you’re reconfiguring the modeline or building
              entirely new features, the system is designed to be
              hacker-friendly, ensuring your editor evolves alongside your
              productivity needs.
            </p>
          </div>
          <div className="feature-image">
            <img src={customImg} alt="Customization" />
          </div>
        </div>

        {/* Feature 5: Open Source */}
        <div className="feature-row" id="op">
          <div className="feature-text">
            <h3>Opensource</h3>
            <p>
              Being built on Emacs, this setup is completely open-source and
              respects your digital freedom. You have total transparency and
              control over your environment—you can modify, audit, or
              redistribute every line of code to do whatever you want with your
              workspace.
            </p>
          </div>
          <div className="feature-image">
            <img src={openSourceImg} alt="Open source" />
          </div>
        </div>

        {/* Feature 6: Full IDE */}
        <div className="feature-row" id="ide">
          <div className="feature-text">
            <h3>Full IDE</h3>
            <p>
              Experience full IDE capabilities with pre-configured support for
              over 100 languages. Each environment is ready to go with a single
              click, providing language-specific automation like dependency
              management and automatic environment setup. Whether you are
              working in Python, Rust, Go, or web development, the editor
              intelligently handles the heavy lifting—like virtual environment
              creation—so you can focus entirely on writing code.
            </p>
          </div>
          <div className="feature-image">
            <img src={ideImg} alt="IDE" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
