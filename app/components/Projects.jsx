"use client";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-heading">Our Projects</h2>

      <div className="horizontal-scroll-container">
        <video className="project-video" controls>
          <source src="/assets/video_2024-06-17_10-06-42.mp4" />
        </video>

        <video className="project-video" controls>
          <source src="/assets/Smart-art-kids.mp4" />
        </video>

        <video className="project-video" controls>
          <source src="/assets/ecoles-du-monde.mp4" />
        </video>

        <video className="project-video" controls>
          <source src="/assets/sahraouiportfoliovideo.mp4" />
        </video>

        <video className="project-video" controls>
          <source src="/assets/grozoneportfoliovideo.mp4" />
        </video>
      </div>

      <h2 className="section-heading">Businesses We Worked With</h2>

      <div className="horizontal-scroll-container">
        <img className="partner-logo" src="/assets/logo2.png" />
        <img className="partner-logo" src="/assets/moon-astraunot.png" />
        <img className="partner-logo" src="/assets/logo3.png" />
        <img className="partner-logo" src="/assets/download1.jpeg" />
        <img className="partner-logo" src="/assets/logoo.png" />
        <img className="partner-logo" src="/assets/logo.png" />
      </div>
    </section>
  );
}