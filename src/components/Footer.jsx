import "../styles/Footer.css"

const Footer = () => {
  return (
    <div>
        <hr />
        <div className="footerIcons">
            <a href="https://www.github.com/ctnkaan"><img src="/src/assets/github.svg" className="icon"/> </a>
            <a href="https://www.linkedin.com/in/cetinkaantaskingenc/"><img src="/src/assets/linkedin.svg" className="icon" /> </a>
            <a href="https://www.instagram.com/cetinkaantaskingenc"><img src="/src/assets/instagram.svg" className="icon" /> </a>
            <a href="https://www.twitter.com/cetinkaantweets"> <img src="/src/assets/twitter-circled.svg" className="icon" /> </a>
            <a href="https://www.youtube.com/@CetinKaanTaskingenc"> <img src="/src/assets/youtube.svg" className="icon" /> </a>
        </div>
    </div>
  )
}

export default Footer