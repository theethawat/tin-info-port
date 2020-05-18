import Head from "next/head"
import Header from "../components/Header"
import Link from "next/link"
import Router from "next/router"
import Plyr from "react-plyr"
import Footer from "../components/Footer"

function Home({ data }) {
  return (
    <div>
      <section className="section">
        <div className="container">
          <Header />
          <div className="video-player">
            <Plyr
              type="video"
              resetOnEnd={true}
              autoplay={true}
              muted={true}
              title="Theethawat Photo"
              url="https://cloud.theduckcreator.in.th/media/Tin%20Present.mp4"
            />
          </div>
          <div className="content">
            <h3 className="title is-3">About Me</h3>
            <p className="">{data.introduction}</p>
            <p className="kanitlight ">{data.thaiIntro}</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    "http://cloud.theduckcreator.in.th/api/personal/personal-data/"
  )
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Home
