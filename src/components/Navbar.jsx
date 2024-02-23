import "../styles/Navbar.css"


const Navbar = () => {
  return (
    <div className="navbar">
        
        <div className="navbar_home">
            <h4>Home</h4>
        </div>

       <div className="navbar_others">
            <h4>Projects</h4>
            <h4>Talks</h4>
            <h4>Blog</h4> 
        </div> 
        
    </div>
  )
}

export default Navbar