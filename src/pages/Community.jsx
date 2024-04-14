import Card from '../components/Card'
import talks from '../data/community/talks.json'
import workshops from '../data/community/workshops.json'

const Community = () => {
  return (
    <div>
      <h1>Community</h1>

      <h2>Talks</h2>
      {talks.map(talk => (
        <Card name={talk.name} url={talk.url} desc={talk.desc} />
      ))}

      <h2>Workshops</h2>
      {workshops.map(workshop => (
        <Card name={workshop.name} url={workshop.url} desc={workshop.desc} />
      ))}
    </div>
  )
}

export default Community
