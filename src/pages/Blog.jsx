import blogs from '../data/blog/blogs.json'
import Card from '../components/Card'

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>

      {blogs.map(project => (
        <Card name={project.name} url={project.url} desc={project.desc} />
      ))}
    </div>
  )
}

export default Blog
