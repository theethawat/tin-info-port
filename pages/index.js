import Head from "next/head"
import Header from "../components/Header"
import Link from "next/link"
import Router from "next/router"
import Plyr from "react-plyr"

function Home({ data }) {
  return (
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
        <h3 className="title is-3">About Me</h3>
        <p className=" content ">{data.introduction}</p>
        <p className=" content kanitlight ">{data.thaiIntro}</p>
      </div>
    </section>
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
