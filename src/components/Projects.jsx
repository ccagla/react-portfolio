
import './Projects.css'
import ProjectCard from './ProjectCard'
import projects from '../data/Projects'

function Projects () {
    return(
        <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
    )
}

export default Projects