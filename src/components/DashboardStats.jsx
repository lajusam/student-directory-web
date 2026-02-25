/**
 * DashboardStats Component
 * Shows overall statistics: total students, average GPA, attendance rate, top performers.
 *
 * Props:
 *   - students (array): Full list of student objects
 */
function DashboardStats({ students }) {
  const total = students.length;

  if (total === 0) return null;

  const avgGpa = (students.reduce((sum, s) => sum + s.gpa, 0) / total).toFixed(2);
  const presentCount = students.filter((s) => s.isPresent).length;
  const attendanceRate = ((presentCount / total) * 100).toFixed(0);
  const topPerformers = students.filter((s) => s.gpa >= 3.6).length;
  const highestGpa = Math.max(...students.map((s) => s.gpa)).toFixed(1);
  const lowestGpa = Math.min(...students.map((s) => s.gpa)).toFixed(1);

  return (
    <section className="dashboard-stats" aria-label="Overall statistics">
      <h2 className="dashboard-stats__title">Overview</h2>
      <div className="dashboard-stats__grid">
        <div className="stat-card">
          <span className="stat-card__icon">👨‍🎓</span>
          <div className="stat-card__info">
            <span className="stat-card__value">{total}</span>
            <span className="stat-card__label">Total Students</span>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-card__icon">📊</span>
          <div className="stat-card__info">
            <span className="stat-card__value">{avgGpa}</span>
            <span className="stat-card__label">Average GPA</span>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-card__icon">✅</span>
          <div className="stat-card__info">
            <span className="stat-card__value">{attendanceRate}%</span>
            <span className="stat-card__label">Attendance Rate</span>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-card__icon">⭐</span>
          <div className="stat-card__info">
            <span className="stat-card__value">{topPerformers}</span>
            <span className="stat-card__label">Top Performers</span>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-card__icon">🏆</span>
          <div className="stat-card__info">
            <span className="stat-card__value">{highestGpa}</span>
            <span className="stat-card__label">Highest GPA</span>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-card__icon">📉</span>
          <div className="stat-card__info">
            <span className="stat-card__value">{lowestGpa}</span>
            <span className="stat-card__label">Lowest GPA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardStats;
