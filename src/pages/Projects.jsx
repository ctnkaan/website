import Project from "../components/Project"

const Projects = () => {
  return (
    <div>
        <h1>Projects</h1>

        <Project 
          name={"Postman Sentinel"} 
          url={"https://github.com/ctnkaan/Postman-Sentinel"} 
          desc={"A Cybersecurity Discord Bot that has blocked 1000+ phishing attacks"}
        />
        <Project name={"Terminal Website"} url={"https://github.com/ctnkaan/portfolio"} desc={"My old website themed around an unix terminal"}/>
    </div>
  )
}

export default Projects