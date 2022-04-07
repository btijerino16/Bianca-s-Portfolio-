export default function Project() {
    return (
      <div className='projectsContainer'>
        <h3 className='projectsTitle'>Projects</h3>
        <div className='projects'>
        {projects.map(project => (
          <div className="project-card mx-1 my-1"key={project.id} >
            <div className="card-body">
              <h6 className="card-title">{project.title}</h6>
              <a href={project.deployment} >
                <img src={project.image} alt={project.title} className="appImage" ></img>
              </a>
              <a href={project.repo} >
                <img src={githubLogo} alt="link to github repo"className='icon'></img>
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    )
  }