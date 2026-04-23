"use client";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    import("vanilla-tilt").then((VanillaTilt) => {
      VanillaTilt.default.init(document.querySelectorAll("[data-tilt]"));
    });
  }, []);

  return (
    <section className="about fade-in-on-scroll" id="about">
      <div className="about-img-container">
        <img src="/assets/undraw_engineering_team_a7n2.svg" />
      </div>

      <div className="about-info" data-tilt>
        <h1 className="about-title">WE ARE!</h1>
        <p className="about-p">
          A Web Sites and solutions Agency...
        </p>
      </div>
    </section>
  );
}