import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import HeroIllustration from "../components/HeroIllustration";

/**
 * HomePage — Public landing page.
 * Shows a hero section with illustration and feature highlights.
 * Links to login/register or dashboard depending on auth state.
 */
function HomePage() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="home-page">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">
              Student Directory
            </h1>
            <p className="hero__subtitle">
              A simple, beautiful tool to manage students, track attendance, and monitor performance — all in one place.
            </p>

            <div className="hero__actions">
              {isAuthenticated ? (
                <Link to="/dashboard" className="btn btn--primary btn--lg">
                  Go to Dashboard, {user.name.split(" ")[0]} →
                </Link>
              ) : (
                <>
                  <Link to="/register" className="btn btn--primary btn--lg">
                    Get Started — It&apos;s Free
                  </Link>
                  <Link to="/login" className="btn btn--outline-white btn--lg">
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="hero__illustration">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="stats-bar">
        <div className="stats-bar__inner">
          <div className="stat">
            <span className="stat__number">4</span>
            <span className="stat__label">Courses Available</span>
          </div>
          <div className="stat">
            <span className="stat__number">100%</span>
            <span className="stat__label">Local & Private</span>
          </div>
          <div className="stat">
            <span className="stat__number">∞</span>
            <span className="stat__label">Students Supported</span>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="features">
        <h2 className="features__heading">Everything you need</h2>
        <div className="features__grid">
          <div className="feature-card">
            <span className="feature-card__icon">👨‍🎓</span>
            <h3>Manage Students</h3>
            <p>Add, edit, and remove students effortlessly. Keep your directory up to date.</p>
          </div>
          <div className="feature-card">
            <span className="feature-card__icon">📊</span>
            <h3>Track Grades</h3>
            <p>Monitor grades at a glance. Top performers are highlighted automatically.</p>
          </div>
          <div className="feature-card">
            <span className="feature-card__icon">✅</span>
            <h3>Attendance</h3>
            <p>Toggle attendance with one click. Filter by present or absent students.</p>
          </div>
          <div className="feature-card">
            <span className="feature-card__icon">🔍</span>
            <h3>Search & Filter</h3>
            <p>Find students instantly. Filter by course, attendance, or sort by grade.</p>
          </div>
          <div className="feature-card">
            <span className="feature-card__icon">💾</span>
            <h3>Auto Save</h3>
            <p>All your data is saved locally. Come back anytime and pick up where you left off.</p>
          </div>
          <div className="feature-card">
            <span className="feature-card__icon">🔒</span>
            <h3>Secure Access</h3>
            <p>Login and registration keep your directory private and personal.</p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="home-footer">
        <p>Student Directory &copy; 2026 — Built with React</p>
      </footer>
    </div>
  );
}

export default HomePage;
