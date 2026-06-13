function About() {
  return (
    <section className="page">
      <div className="page-heading">
            <p className="eyebrow">About Me</p>
          <h1>Focused on frontend craft and intelligent software.</h1>
          <p> I am a Computer Science student who enjoys building polished web experiences, learning modern JavaScript tools.</p>
         </div>
 
      <div className="split-grid">

        <article className="panel">
          <h2>Professional Biography</h2>
          <p>
            My development journey started with simple websites and grew into
            React applications, component-based design, and practical product
            thinking. I like writing clean code, designing layouts that work on
            every screen, and improving projects step by step.
          </p>
        </article>

        <article className="panel">

          <h2>Career Objective</h2>
          <p>
            My goal is to become a frontend and backend engineer who can build reliable,
            accessible, and attractive web applications while continuing to grow
            in AI-assisted development and software engineering practices.
          </p>
        </article>
      </div>

      <div className="skills-layout">
        <article className="panel">
          <h2>Technical Skills</h2>
          <div className="pill-list">
            <span>HTML</span><span>CSS</span><span>JavaScript</span>
            <span>React.js</span><span>React Router</span><span>GitHub</span>
            <span>Responsive Design</span><span>AI Tools</span>
          </div>

        </article>


        <article className="panel">
          <h2>Soft Skills</h2>
          <div className="pill-list">
            <span>Problem Solving</span><span>Communication</span>
            <span>Time Management</span><span>Teamwork</span>
            <span>Adaptability</span><span>Attention to Detail</span>
          </div>
        </article>

        <article className="panel">
          <h2>Personal Interests</h2>
          <p>
            I enjoy chess, music platforms, AI experiments, UI design, and
            learning how professional products are planned, built, and improved.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
