import Project from "../components/Project"

const projects = [
  {
    name: "Postman Sentinel",
    url: "https://github.com/ctnkaan/Postman-Sentinel",
    desc: "A Cybersecurity Discord Bot that has blocked 1000+ phishing attacks"
  },
  {
    name: "Terminal Website",
    url: "https://github.com/ctnkaan/portfolio",
    desc: "My old website themed around an unix terminal"
  }
]

const Projects = () => {
  return (
    <div>
        <h1>Projects</h1>

        {projects.map((project) => (
          <Project
            name={project.name}
            url={project.url}
            desc={project.desc}
          />
        ))}
    </div>
  )
}

export default Projects