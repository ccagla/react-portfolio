
import './Projects.css'

function Projects () {
    return(
        <section className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                <div className="project-card">
                <h3>Movie Search App</h3>
                <p>Search movies using the OMDB API</p>
                <a href="https://github.com/ccagla/movie-search-app" target="_blank" rel="noreferrer">
            View Code
          </a>
            </div>
             <div className="project-card">
          <h3>Form Validator</h3>
          <p>Input Validation with Vanilla JS</p>
          <a href="https://github.com/ccagla/form-validator-app" target="_blank" rel="noreferrer">
            View Code
          </a>
        </div>
          <div className="project-card">
          <h3>Mini Gallery App</h3>
          <p>A simple and responsive image gallery with a modal preview feature.</p>
          <a href="https://github.com/ccagla/mini-gallery-app" target="_blank" rel="noreferrer">
            View Code
          </a>
        </div>
          <div className="project-card">
          <h3>Pomodoro Timer</h3>
          <p>A simple Pomodoro Timer built with HTML, CSS and Javascript.</p>
          <a href="https://github.com/ccagla/pomodoro-timer" target="_blank" rel="noreferrer">
            View Code
          </a>
        </div>
        
         
       
            </div>
        </section>
    )
}

export default Projects