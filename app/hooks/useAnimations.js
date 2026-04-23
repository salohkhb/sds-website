"use client";
import { useEffect } from "react";

export default function useAnimations() {
  useEffect(() => {
    // ===== LOADER =====
    const loader = document.querySelector(".pyramid-loader");
    if (loader) {
      loader.style.display = "none";
    }

    // ===== BUTTON PARALLAX EFFECT =====
    const buttons = document.querySelectorAll(".btn");

    const handleMouseMove = (e) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      if (btn.children[0]) {
        btn.children[0].style.transform =
          `translate(${x * 0.3}px, ${y * 0.3}px)`;
      }
    };

    const handleMouseOut = (e) => {
      const btn = e.currentTarget;
      if (btn.children[0]) {
        btn.children[0].style.transform = "translate(0px, 0px)";
      }
    };

    buttons.forEach((btn) => {
      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseout", handleMouseOut);
    });

    // ===== SCROLL FADE-IN =====
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-on-scroll");

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        const isVisible =
          rect.top < window.innerHeight &&
          rect.bottom > 0;

        if (isVisible) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on load
    handleScroll();

    // ===== CLEANUP (VERY IMPORTANT) =====
    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("mousemove", handleMouseMove);
        btn.removeEventListener("mouseout", handleMouseOut);
      });

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}