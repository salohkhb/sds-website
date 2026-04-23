"use client";

export default function Services() {
  return (
    <section id="SERVICES" className="services-section">
      <h2 className="section-heading">Our Services</h2>

      <div className="horizontal-scroll-container">
        <div className="service-card about-info" data-tilt>
          <h1 className="about-title">Web Development</h1>
          <p className="about-p">
            We create high-value websites that elevate your digital presence.
          </p>
        </div>

        <div className="service-card about-info" data-tilt>
          <h1 className="about-title">Mobile Apps</h1>
          <p className="about-p">
            We build mobile apps that bring your business ideas to life.
          </p>
        </div>

        <div className="service-card about-info" data-tilt>
          <h1 className="about-title">Store Management Systems</h1>
          <p className="about-p">
            Efficient systems to help you manage and scale your store.
          </p>
        </div>
      </div>
    </section>
  );
}