import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons"
const Footer = () => (
  <div>
    <footer className="footer acenter">
      <p>
        Copyright &copy; 2020 Theethawat Savastham All Right Reserved <br />
        Create with <FontAwesomeIcon icon={faHeart} /> using{" "}
        <a href="https://nextjs.org">NextJS</a> which get useful function of{" "}
        <a href="https://reactjs.org"> React</a> Proundly hosted on{" "}
        <FontAwesomeIcon icon={faGithub} />{" "}
        <a href="https://page.github.com">GitHub Page</a>
      </p>
    </footer>
  </div>
)
export default Footer
