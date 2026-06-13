function Experience() {
  const experiences = [
    {
      role: "Frontend Development Intern",
      company: "Academic Project Team",
      period: "2025",
      points: [
        "Converted UI ideas into responsive React components.",
        "Improved layout consistency across desktop and mobile screens.",
       
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Personal and Student Projects",
      period: "2024 - Present",
      points: [
        "Designed portfolio and landing pages with modern HTML, CSS, and React.",
        "Created reusable sections for projects, education, and contact details.",
        "Focused on clean spacing, readable typography, and quick loading pages.",
      ],
    },
    {
      role: "Technical Training",
      company: "Frontend and AI Learning",
      period: "Ongoing",
      points: [
        "Practicing React Router, component structure, and CSS architecture.",
        "Exploring AI assistants, chess logic, and smart application workflows.",
        "Building confidence with GitHub, deployment basics, and documentation.",
      ],
    },
  ];

  return (
    <section className="page">
      <div className="page-heading">
        <p className="eyebrow">Experience</p>
        <h1>Practical experience through projects and training.</h1>
        <p>
          I am developing professional habits through internships, freelance
          style work, technical training, and consistent project building.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.role}>
            <span>{experience.period}</span>
            <h2>{experience.role}</h2>
            <h3>{experience.company}</h3>
            <ul className="clean-list">
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
