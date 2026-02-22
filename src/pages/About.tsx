import React from "react";

const About: React.FC = () => {
  return (
    <>
      <section className="about">
        <h1>About us </h1>
        <p>
          <strong>Omacs</strong> is an Emacs distribution created by
          <strong> Omer Arif</strong>, an Emacs enthusiast and a Rust and Common
          Lisp master. After years of working inside Emacs, he wanted something
          cleaner, simpler, and more aligned with modern development workflows.
        </p>

        <p>
          Omacs was built for three reasons: a fresh, modern look, familiar VS
          Code–style keybindings to reduce friction, and AI-driven features that
          genuinely assist development. The goal is to keep Emacs powerful and
          extensible while making it faster to adopt and more intuitive to use.
        </p>
      </section>
    </>
  );
};

export default About;
