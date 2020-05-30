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
    <h1 className="title is-2 ">TheethawatSpace*</h1>

    <nav className="breadcrumb kanitlight" aria-label="breadcrumbs">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/skill">Skill & Certificate</Link>
        </li>
        <li>
          <Link href="/project">Project</Link>
        </li>
      </ul>
    </nav>
    <hr />
  </div>
)

export default Header
