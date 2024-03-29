import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

function Footer({ data }) {
  return (
    <div>
      <footer className='footer acenter kanitlight'>
        <h4 className='title is-4'>
          <a
            href='https://facebook.com/tin.savastham'
            target='_blank'
            className='has-text-dark'
            title='Facebook'
          >
            {" "}
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a
            href='https://instagram.com/tin_savastham'
            target='_blank'
            className='has-text-dark'
            title='Instagram'
          >
            {" "}
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href='https://github.com/theethawat'
            target='_blank'
            className='has-text-dark'
            title='GitHub'
          >
            {" "}
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href='https://www.linkedin.com/in/theethawat-savastham-bb8493124/'
            target='_blank'
            className='has-text-dark'
            title='LinkedIn'
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href='https://medium.com/@theethawat'
            target='_blank'
            className='has-text-dark'
            title='Medium'
          >
            {" "}
            <FontAwesomeIcon icon={faMedium} />
          </a>

          <a
            href={"mailto:theethawat.s@outlook.co.th"}
            target='_blank'
            className='has-text-dark'
            title='Email'
          >
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </h4>
        <p>
          Copyright &copy; 2020 Theethawat Savastham All Right Reserved <br />
          <br />
          Create with <FontAwesomeIcon icon={faHeart} /> using{" "}
          <a href='https://nextjs.org'>NextJS</a> which get useful function of{" "}
          <a href='https://reactjs.org'> React</a> Proundly hosted on{" "}
          <a href='https://vercel.com/'>Vercel</a>
          <br />
          Greatest Background is come from{" "}
          <a href='https://www.design.svgbackgrounds.com/'>
            SVGBackgrounds.com
          </a>{" "}
          With License{" "}
          <a href='https://creativecommons.org/licenses/by/4.0/'>CC BY 4.0</a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
