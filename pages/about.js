import Router from "next/router"
import Header from "../components/Header"
import Footer from "../components/Footer"

function About({ data }) {
  return (
    <div>
      <section className="section">
        <div className="container">
          <Header />
          <h3 className="title is-3">Personal Info and Biography</h3>
          <div className="columns">
            <div className="column is-3">
              <img
                className="img-fluid tin-profile-img"
                alt="Personal Profile Image"
                src="/Me.jpg"
              />
            </div>
            <div className="column is-6">
              <div className="content">
                <ul>
                  <li>
                    Name - {data.name} {data.surname} ({data.nickname}){" "}
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
                    <a href={"mailto:" + data.email.work}>{data.email.work}</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
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
    "https://theethawat-api.azurewebsites.net/personal-data/"
  )
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default About
