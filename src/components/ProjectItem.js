import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectsItem() {
  return (
    <div className="projects-container">
      <div className="project-box">
        <h2>Reciplease</h2>
        <h4>A recipe tracking app</h4>
        <button>Rails</button>
        <button>Bootstrap.css</button>
      </div>
      <div className="project-box">
        <h2>Kibbles N Bitz</h2>
        <h4>Tinder for dogs</h4>
        <button>React</button>
        <button>Redux</button>
      </div>
      <div className="project-box">
        <h2>Alienwares</h2>
        <h4>Etsy for Aliens</h4>
        <button>React</button>
        <button>Redux</button>
        <button>Rails</button>
      </div>
    </div>
  );
}
export default ProjectItem;
