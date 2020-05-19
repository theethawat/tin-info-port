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
          <br />
          <div className="content is-medium">
            <h4 className="subtitle is-4">
              TheethawatSpace{" "}
              <i className="kanitlight has-text-info">/ธีร์ธวัช-สเปซ/</i>
            </h4>
            <p>
              {" "}
              <i className="has-text-danger">(n)</i> Space of{" "}
              <b>Theethawat Savastham</b>; A Thai Software Creater and
              Developer, Founder of my own space{" "}
              <a href="https://www.theduckcreator.in.th" target="_blank">
                The Duck Creator
              </a>
              <br />
              and Computer Engineering Student at Prince of Songkla University{" "}
              <br />
              <br />
              <span className="kanitlight">
                {" "}
                <i className="has-text-danger">
                  (นาม.)
                </i> พื้นที่สร้างสรรค์ของ <b>ธีร์ธวัช สวาสดิ์ธรรม</b> นักคิด
                นักพัฒนาโปรแกรมชาวไทยคนหนึ่ง ผู้ก่อตั้งพื้นที่ของเขาเองใน{" "}
                <a href="https://www.theduckcreator.in.th" target="_blank">
                  เดอะดักส์ครีเอเตอร์
                </a>{" "}
                และ นักศึกษาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยสงขลานครินทร์{" "}
              </span>
            </p>
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
