"use client";

export default function Sidebar() {
  return (
    <section className="sidebar-container">
      <div className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-icon">
            <a href="#"><i className="bx bxl-gmail"></i></a>
          </li>
          <li className="sidebar-icon">
            <a href="#"><i className="fa-solid fa-paper-plane"></i></a>
          </li>
          <li className="sidebar-icon">
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </li>
          <li className="sidebar-icon">
            <a href="#"><i className="fa-solid fa-phone"></i></a>
          </li>
        </ul>
      </div>
    </section>
  );
}