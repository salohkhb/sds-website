"use client";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-heading">Get In Touch</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Your Project"></textarea>

        <button className="btn-primary">Send Message</button>
      </form>
    </section>
  );
}