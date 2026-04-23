"use client";

export default function Testimonials() {
  return (
    <section>
      <h2 className="section-heading">What Clients Say</h2>

      <div className="horizontal-scroll-container">
        <div className="service-card">
          <p>"They built our website fast and perfectly."</p>
          <strong>- Client 1</strong>
        </div>

        <div className="service-card">
          <p>"Professional team and great communication."</p>
          <strong>- Client 2</strong>
        </div>

        <div className="service-card">
          <p>"Our business grew after working with them."</p>
          <strong>- Client 3</strong>
        </div>
      </div>
    </section>
  );
}