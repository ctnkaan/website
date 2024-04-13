import Card from '../components/Card'

const talks = [
  {
    name: 'Student Programs Decoded with Postman Student Leaders',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_twitterspaces-event-events-activity-6920313177733742592-KWlw',
    desc: 'A Twitter space about Postman Student Leaders accomplishments',
  },
  {
    name: 'Finding Clients in Freelancing',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_twitterspaces-event-events-activity-6920313177733742592-KWlw',
    desc: 'Twitter space about freelancing and client management',
  },
  {
    name: 'Introduction to Management Information Systems',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_students-career-events-activity-6912356919517007873-PovG',
    desc: 'An explanation and Q&A about Management Information Systems hosted at my high school',
  },
  {
    name: 'REST vs GraphQL',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_community-events-backend-activity-6830099514087493632-TESC',
    desc: 'An 15 minute lightning talk at Postman Student Summit 2022 about the differences between REST and GraphQL APIs',
  },
]

const workshops = [
  {
    name: 'Discord Bot Development with Discord.js',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_events-event-workshop-activity-6931558202274635776-4R1k',
    desc: 'An workshop about building and deploying Discord bots with Nodejs',
  },
  {
    name: 'Introduction to Docker',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_docker-activity-6930086011305619456-UCim',
    desc: 'Fundamentals of virtualization and Docker',
  },
  {
    name: 'Microsoft Azure 101',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_azure-cloudcomputing-event-activity-6910601129521266689-K9Dm',
    desc: 'Introduction to cloud computing with Microsoft Azure for TIIBOT Foundation',
  },
  {
    name: 'Git, GitHub and Open Source',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_events-microsoftlearnstudentambassador-community-activity-6908799761328275456-WoRm',
    desc: 'Introduction to version control with Git and contributing to open-source with GitHub for TIIBOT Foundation',
  },
  {
    name: 'Git, GitHub and Open Source',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_ieee-eski%C5%9Fehir-teknik-%C3%BCniversitesi-%C3%B6%C4%9Frenci-activity-6898299642631843840-zPlP',
    desc: 'Introduction to version control with Git and contributing to open-source with GitHub for IEEE Eskisehir Technic University',
  },
  {
    name: 'API 101 with Postman',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_microsoft-postman-api-activity-6880476004079411200-xj-t',
    desc: 'Introduction to REST APIs and API testing with Postman',
  },
  {
    name: 'Git Into Open Source',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_opensource-community-events-activity-6858436351344287744-7Ccv',
    desc: 'Introduction to version control with Git and contributing to open-source with GitHub for IEEE Yasar University Computer Society',
  },
  {
    name: 'Learn the Basics of GraphQL',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_events-community-hackathon-activity-6845358651977293824-Qys9',
    desc: '1 hour introductory course about using GraphQL in web apps delivered to Hackodisha India',
  },
  {
    name: 'Fundamentals of Cloud Computing with Azure',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_azure-microsoft-events-activity-6807740775292538880-cuNd',
    desc: 'Introduction to cloud computing with Microsoft Azure for IEEE Yasar Universtiy Computer Society',
  },
  {
    name: 'Git & GitHub',
    url: 'https://www.linkedin.com/posts/cetinkaantaskingenc_ieeeyasar-github-git-activity-6774660616297705000-CLK0',
    desc: 'Introduction to version control with Git and GitHub for IEEE Yasar University Computer Society',
  },
]

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
