import '../styles/Card.css'

const Card = ({ name, url, desc }) => {
  return (
    <div className='card'>
      <h3>
        <a href={url}>{name}</a>
      </h3>
      <p>{desc}</p>
    </div>
  )
}

export default Card
