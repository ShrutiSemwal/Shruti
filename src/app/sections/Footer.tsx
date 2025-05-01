import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a href="#about-me">About me</a>
        </div>
        <div className="socials">
          {socialImgs.map((img, index) => (
            <a className="icon" target="_blank" href={img.url} key={index}>
              <img src={img.imgPath} alt="social icon" />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Shruti Semwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
