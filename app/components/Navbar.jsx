"use client";

export default function Navbar() {
  const scrollToSection = (id) => {
    const container = document.querySelector(".section-container");
    const target = document.getElementById(id);

    if (target && container) {
      const offset = target.offsetTop - container.offsetTop;
      container.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <nav>
        <div className="logo">SDS</div>

        <ul className="navbar-list">
          <li onClick={() => scrollToSection("SERVICES")}>SERVICES</li>
          <li onClick={() => scrollToSection("projects")}>PROJECTS</li>
          <li onClick={() => scrollToSection("about")}>ABOUT</li>
        </ul>
      </nav>
    </div>
  );
}