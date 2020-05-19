import Router from "next/router"
import Header from "../components/Header"
import Footer from "../components/Footer"
function Skill({ data }) {
  return (
    <div>
      <section className="section">
        <div className="container">
          <Header />
          <h3 className="title is-3">Skill</h3>
          <div className="content column is-7">
            <ul>
              {data.map((skill) => (
                <li>
                  {" "}
                  {skill.name} <br />
                  <progress
                    className="progress is-primary"
                    value={skill.skillPercent}
                    max="100"
                  >
                    {" "}
                    {skill.skillPercent} %{" "}
                  </progress>
                </li>
              ))}
            </ul>
          </div>
          <h3 className="title is-3">Online Badge</h3>
          <p>Nothing to show now.</p>
          <br />
          <h3 className="title is-3">Certificate</h3>
          <p>Nothing to show now.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    "http://cloud.theduckcreator.in.th/api/personal/skill/"
  )
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

export default Skill
