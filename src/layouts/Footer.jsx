import ReactLogo from '../assets/react.svg';
import ReactRouterLogo from '../assets/react-router-mark-color.svg';
import MUILogo from '../assets/MUI-logo.svg';
import { FacebookIcon, LinkedInIcon, GithubIcon } from '../components/LinkIcons';
import renderHTMLspan from '../utils/renderHTML';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="read-the-docs">
        <section className='footer-toolkit'>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={ReactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
            <img src={ReactRouterLogo} className="logo router" alt="React-router logo" />
          </a>
          <a href="https://mui.com/" target="_blank" rel="noreferrer">
            <img src={MUILogo} className="logo mui" alt="MUI logo" />
          </a>
        </section>

        <p>
          Click on the React, React-router and MUI logos to learn more
        </p>
      </div>

      <div className='footer-contacts'>
        <section className='footer-links'>
          <a
            href="https://www.facebook.com/bogdanovvad1m/"
            target="_blank"
            rel="noreferrer"
            className="link-image"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/bogdanovvad1m/"
            target="_blank"
            rel="noreferrer"
            className="link-image"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/8ogdanovv"
            target="_blank"
            rel="noreferrer"
            className="link-image"
          >
            <GithubIcon />
          </a>
        </section>

        <p className='contacts'>
          <span title='auto-biography (č)oding'>
            ({renderHTMLspan('&ccaron;')})
          </span>
          {renderHTMLspan('&nbsp;')}
          <span title='stand for Ukraine'>
            {`${new Date().getFullYear()}`}
          </span>
          {renderHTMLspan('&nbsp;')}
          <a
            href="https://8ogdanovv.tilda.ws/"
            target="_blank"
            rel="noreferrer"
            title="Tilda templated portfolio landing"
          >
            Bogdanov Vadim
          </a>
          {renderHTMLspan('&nbsp;')}
            <span title="social media (e.g. TG, X etc.) nickname">@bogdanovvad1m</span>
          {renderHTMLspan('&nbsp;')}
          <a
            href="https://bit.ly/2PDFcv"
            target="_blank"
            rel="noreferrer"
            title="PDF-like CV on drive.google shortened with bit.ly (color-scheme sensitive redirect)"
          >
            https://bit.ly/2PDFcv
          </a>
        </p>
      </div>
    </footer>
  )
}
