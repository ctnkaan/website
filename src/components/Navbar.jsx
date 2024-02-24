import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        
        <div className="navbar_home">
            <h4><a href="/">ctnkaan</a></h4>
        </div>

       <div className="navbar_others">
            <h4><a href="/projects">projects</a></h4>
            <h4><a href="/community">community</a></h4>
            <h4><a href="/blog">blog</a></h4> 
        </div> 
        
    </div>
  )
}

export default Navbar