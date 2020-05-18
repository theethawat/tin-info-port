import Router from "next/router"
import Header from "../components/Header"
import Footer from "../components/Footer"
export default function About() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <Header />
        </div>
      </section>
      <Footer />
    </div>
  )
}
