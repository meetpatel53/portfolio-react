function Education() {
  const timeline = [
    {
      year: "2024 - Present",
      title: "Bachelor of Computer Science",
      place: "Government Engineering College",
      detail: "Studying programming, computer fundamentals, web development, data structures, and software engineering concepts.",
    },
    {
      year: "2025",
      title: "React.js Development",
      place: "Self-Learning and Practical Projects",
      detail: "Built portfolio projects using React components, routing, reusable layouts, and responsive CSS.",
    },
    {
      year: "2024",
      title: "Frontend Foundations",
      place: "HTML, CSS, JavaScript",
      detail: "Completed hands-on practice in semantic HTML, modern CSS layouts, DOM basics, and interactive UI patterns.",
    },
  ];

  return (
    <section className="page">
      <div className="page-heading">
           <p className="eyebrow">Education</p>
          <h1>Academic path and continuous learning.</h1>
          <p>
           My education combines computer science fundamentals with practical
          frontend development and project-based learning.
        </p>
      </div>

      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={item.title}>
               <span>{item.year}</span>
            <div>
              <h2>{item.title}</h2>
              <h3>{item.place}</h3>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="split-grid">
        <article className="panel">
          <h2>Academic Achievements</h2>
          <ul className="clean-list">
                <li>Built multiple responsive web pages using React.js.</li>
            <li>Practiced problem solving through programming exercises.</li>
            
          </ul>
        </article>
          <article className="panel">
              <h2>Certifications</h2>
          <ul className="clean-list">
            <li>Frontend Web Development Fundamentals</li>
             <li>JavaScript and React Practical Training</li>
            <li>Git and GitHub Version Control Basics</li>
          </ul>
            </article>
      </div>
    </section>
  );
}

export default Education;
