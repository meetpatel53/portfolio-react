import ProjectCard from "../components/ProjectCard";
import chessImage from "../assets/images/chess-ai.svg";
import musicImage from "../assets/images/music-app.svg";
import portfolioImage from "../assets/images/portfolio-site.svg";
import dashboardImage from "../assets/images/dashboard.svg";

const projects = [
  {
    image: chessImage,
    title: "Chess AI Assistant",
    description: "An AI-focused chess helper concept that suggests strong moves and explains possible strategies for learners.",
    technologies: ["React", "JavaScript", "AI Logic", "CSS"],
    
  },
  {
    image: musicImage,
    title: "Music Streaming Website",
    description: "A responsive music platform interface with playlist cards, player controls, and a clean entertainment layout.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  
  },
  {
    image: portfolioImage,
    title: "Personal Portfolio",
    description: "A professional portfolio website built to present skills, education, projects, and contact information.",
    technologies: ["React", "Router", "CSS", "Vite"],
    
  },
  {
    image: dashboardImage,
    title: "React Dashboard",
    description: "A modern dashboard interface with summary cards, analytics sections, and reusable UI components.",
    technologies: ["React", "CSS Grid", "Charts", "Components"],
   
  },
];

function Projects() {
  return (
    <section className="page">
      <div className="page-heading">
        <p className="eyebrow">Projects</p>
        <h1>Selected work with practical frontend focus.</h1>
        <p>
          These projects show my interest in React, responsive design, AI-based
          tools, and clean interfaces for real users.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
