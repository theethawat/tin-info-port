import Header from "../components/Header";
import Front from "./front";
import Project from "./project";
import Skill from "./skill";
import Footer from "../components/Footer";
import config from "./config.json";

function Home({ personalData, projectData, skillData }) {
  return (
    <div>
      <Header />
      <Front data={personalData} />
      <Skill data={skillData} />
      <Project projectData={projectData} />

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const personalData = await config.pageProps.personalData;
  const projectData = await config.pageProps.projectData;
  const skillData = await config.pageProps.skillData;
  return {
    props: {
      personalData,
      projectData,
      skillData,
    },
  };
}
export default Home;
