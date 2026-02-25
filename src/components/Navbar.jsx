import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

/**
 * Navbar — Top navigation bar shown across all pages.
 * Displays different links based on authentication state.
 * Includes a dark / light mode toggle.
 */
function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">📚 Student Directory</Link>

        <div className="navbar__links">
          <ThemeToggle />

          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className={`navbar__link ${location.pathname === "/dashboard" ? "navbar__link--active" : ""}`}
              >
                Dashboard
              </Link>
              <span className="navbar__user">Hi, {user.name.split(" ")[0]}</span>
              <button className="btn btn--outline btn--sm" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`navbar__link ${location.pathname === "/login" ? "navbar__link--active" : ""}`}
              >
                Sign In
              </Link>
              <Link to="/register" className="btn btn--primary btn--sm">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
