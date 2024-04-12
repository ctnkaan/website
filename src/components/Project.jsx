import "../styles/Project.css"

const Project = ({name, url, desc}) => {
  return (
    <div className="project_name">
        <h3><a href={url}>{name}</a></h3>
        <p>{desc}</p>
    </div>
  )
}

export default Project