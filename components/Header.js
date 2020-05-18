import Link from "next/link"
const Header = () => (
  <div>
    <h1 className="title is-2 ">TheethawatSpace*</h1>
    <hr />
    <p>
      {" "}
      <i>(n)</i> Space of <b>Theethawat Savastham</b>; A Thai Software Creater
      and Developer, Computer Engineering Student <br />
      <span className="kanitlight">
        {" "}
        <i>นาม.</i> พื้นที่สร้างสรรค์ของ <b>ธีร์ธวัช สวาสดิ์ธรรม</b> นักคิด
        นักพัฒนาโปรแกรมคนหนึ่ง และ นักศึกษาวิศวกรรมคอมพิวเตอร์ชาวไทย{" "}
      </span>
    </p>

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
