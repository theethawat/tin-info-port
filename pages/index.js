import Head from "next/head"
import Header from "../components/Header"
import Link from "next/link"
import Router from "next/router"
import Plyr from "react-plyr"
import Footer from "../components/Footer"

function Home({ data }) {
  return (
    <div>
      <Header />
      <div className="title-hero hero is-medium">
        <div className="hero-body">
          <h1 className="title is-2 kanitlight has-text-white acenter py-4">
            TheethawatSpace*
          </h1>
          <h3 className="subtitle is-3 acenter has-text-white">
            {"<"}TheethawatSpace is space of ธีร์ธวัช สวาสดิ์ธรรม {"/>"}
          </h3>
        </div>
      </div>

      <div className="video-profile-hero">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="video-player">
                <Plyr
                  type="youtube"
                  resetOnEnd={true}
                  autoplay={true}
                  muted={true}
                  title="Theethawat Photo"
                  controls={true}
                  videoId="https://youtu.be/UzKTadfPrkQ"
                />
              </div>
            </div>
            <div className="column">
              <div className="content has-text-white">
                <ul>
                  <h5 className="subtitle is-3 has-text-light kanitlight">
                    {data.name} {data.surname} ({data.nickname}) <br />
                    <span className="subtitle is-5 has-text-white">
                      {data.thaiName} {data.thaiSurname} ({data.thaiNickname}){" "}
                    </span>
                  </h5>
                  <li>
                    Computer Engineering Student - Prince of Songkla University{" "}
                  </li>
                  <li>Hometown - {data.hometowm}, Thailand </li>
                  <li>Birthday - {data.birthday} </li>
                  <li>
                    Schools
                    <ul>
                      <li>{data.school[0]}</li>
                      <li> {data.school[1]}</li>
                    </ul>
                  </li>
                  <li>
                    Email -{" "}
                    <a
                      className="has-text-light"
                      href={"mailto:" + data.email.work}
                    >
                      {data.email.work}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="content is-medium column is-10 mgh-medium piccenter acenter">
            <p className="">{data.introduction}</p>
          </div>
          <p className="acenter is-10">{data.thaiIntro}</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    "https://theethawat-api.azurewebsites.net/personal-data/"
  )
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Home
