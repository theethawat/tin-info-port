import Link from "next/link"
const Header = () => (
  <div>
    <h1 className="title is-2 ">TheethawatSpace*</h1>

    <nav className="breadcrumb kanitlight" aria-label="breadcrumbs">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Biography</Link>
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
