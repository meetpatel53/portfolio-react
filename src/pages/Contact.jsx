import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";



function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="page">
         <div className="page-heading">
        <p className="eyebrow">Contact</p>
        
      </div>

         <div className="contact-layout">
       

        <aside className="contact-card">
            <h2>Professional Contact</h2>
          
           <a href="https://www.linkedin.com/in/meet-patel-634763304/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn Profile</a>
             <a href="https://github.com/meetpatel53" target="_blank" rel="noreferrer"><FaGithub /> GitHub Profile</a>
          <p><FaMapMarkerAlt /> Daman, India</p>
        </aside>
        </div>
    </section>
  );
}

export default Contact;
