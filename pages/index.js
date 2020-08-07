import Header from '../components/Header'
import Front from './front'
import Project from './project'
import Skill from './skill'
import Footer from '../components/Footer'
import config from './config.json'

function Home({ personalData, projectData, skillData }) {
  return (
    <div>
      <Header />
      <Front data={personalData} />
      <Skill data={skillData} />
      <Project projectData={projectData} />

      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const personalDataRes = await fetch(config['api-url'] + '/personal-data/')
  const projectDataRes = await fetch(config['api-url'] + '/project/')
  const skillDataRes = await fetch(config['api-url'] + '/skill/')
  const personalData = await personalDataRes.json()
  const projectData = await projectDataRes.json()
  const skillData = await skillDataRes.json()
  return {
    props: {
      personalData,
      projectData,
      skillData,
    },
  }
}
export default Home
