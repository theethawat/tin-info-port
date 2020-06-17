import Link from "next/link"
import Head from "next/head"
const Header = () => (
  <div>
    <Head>
      <title>TheethawatSpace*</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta http-equiv="Content–Type" content="text/html ; charset= utf–8" />
      <meta
        name="og:image"
        content="https://theethawat.theduckcreator.in.th/Me.jpg"
      />
      <meta
        name="description"
        content="TheethawatSpace is a Development Space of Theethawat Savastham, Theethawat's Development Portfolio Go Here!"
      />
      <meta name="author" content="Theethawat Savastham" />
      <meta
        name="keyword"
        content="Theethawat Savastham,ธีร์ธวัช สวาสดิ์ธรรม"
      />
    </Head>

    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h1 className="kanitlight title is-4 has-text-white">
            TheethawatSpace*
          </h1>
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>

          <a href="/skill" className="navbar-item">
            Skill & Cert
          </a>

          <a href="/project" className="navbar-item">
            Project
          </a>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
