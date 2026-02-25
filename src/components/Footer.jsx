import { Link } from "react-router-dom";

/**
 * Footer — Global site footer shown on every page.
 * Displays credits, tech stack, and useful links.
 */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        {/* ── Brand & Credit ── */}
        <div className="site-footer__brand">
          <span className="site-footer__logo">📚 Student Directory</span>
          <p className="site-footer__credit">
            Designed &amp; Developed by <strong>Bibek Magar</strong>
          </p>
        </div>

        {/* ── Quick Links ── */}
        <div className="site-footer__links">
          <h4 className="site-footer__heading">Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/login">Sign In</Link>
          <Link to="/register">Register</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        {/* ── Built With ── */}
        <div className="site-footer__tech">
          <h4 className="site-footer__heading">Built With</h4>
          <span>React 19</span>
          <span>Vite 7</span>
          <span>React Router v7</span>
          <span>JavaScript (ES6+)</span>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="site-footer__bottom">
        <p>&copy; {year} Student Directory. All rights reserved.</p>
        <p className="site-footer__tagline">Made with ❤️ in Nepal</p>
      </div>
    </footer>
  );
}

export default Footer;
