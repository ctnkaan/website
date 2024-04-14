import Card from '../components/Card'
import projects from '../data/projets/projects.json'

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>

      {projects.map(project => (
        <Card name={project.name} url={project.url} desc={project.desc} />
      ))}
    </div>
  )
}

export default Projects
