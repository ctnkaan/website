import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className='innerFooter'>
        <div className='footerIcons'>
          <a href='https://www.github.com/ctnkaan'>
            <img src='assets/github.svg' className='icon' />
          </a>
          <a href='https://www.linkedin.com/in/cetinkaantaskingenc/'>
            <img src='assets/linkedin.svg' className='icon' />
          </a>
          <a href='https://www.instagram.com/cetinkaantaskingenc'>
            <img src='assets/instagram.svg' className='icon' />
          </a>
          <a href='https://www.twitter.com/cetinkaantweets'>
            <img src='assets/twitter-circled.svg' className='icon' />
          </a>
          <a href='https://www.youtube.com/@CetinKaanTaskingenc'>
            <img src='assets/youtube.svg' className='icon' />
          </a>
        </div>

        <div>
          <p>&copy 2024 </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
