import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export function Footer() {
  return (
    <section id="footer" className="footer-section">
      <div className="footer-inner">
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#service">Service</a>
          <a href="#support">Support</a>
          <a href="#company">Company</a>
          <a href="#legal">Legal</a>
          <a href="#join">Join Us</a>
        </nav>

        <div className="footer-social" aria-label="Social media links">
          <a href="#" aria-label="Facebook">
            <i className="bi bi-facebook" />
          </a>
          <a href="#" aria-label="Twitter">
            <i className="bi bi-twitter" />
          </a>
          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin" />
          </a>
          <a href="#" aria-label="YouTube">
            <i className="bi bi-youtube" />
          </a>
        </div>

        <p className="footer-copy">
          Design with love @ TanahAirStudio 2020. All right reserved.
        </p>
      </div>
    </section>
  );
}
