/**
 * CourseStats Component
 * Shows per-course breakdown: student count, average GPA, attendance rate,
 * and a visual progress bar for the GPA.
 *
 * Props:
 *   - students (array): Full list of student objects
 */
function CourseStats({ students }) {
  if (students.length === 0) return null;

  /* Build course → stats map */
  const courseMap = {};
  students.forEach((s) => {
    if (!courseMap[s.course]) {
      courseMap[s.course] = { count: 0, totalGpa: 0, present: 0 };
    }
    courseMap[s.course].count += 1;
    courseMap[s.course].totalGpa += s.gpa;
    if (s.isPresent) courseMap[s.course].present += 1;
  });

  const courseData = Object.entries(courseMap)
    .map(([course, data]) => ({
      course,
      count: data.count,
      avgGpa: (data.totalGpa / data.count).toFixed(2),
      attendanceRate: ((data.present / data.count) * 100).toFixed(0),
    }))
    .sort((a, b) => b.count - a.count); // most students first

  return (
    <section className="course-stats" aria-label="Course statistics">
      <h2 className="course-stats__title">Students by Course</h2>
      <div className="course-stats__grid">
        {courseData.map((c) => (
          <div key={c.course} className="course-stat-card">
            <div className="course-stat-card__header">
              <h3 className="course-stat-card__course">{c.course}</h3>
              <span className="course-stat-card__count">
                {c.count} student{c.count !== 1 ? "s" : ""}
              </span>
            </div>

            {/* GPA bar */}
            <div className="course-stat-card__bar-group">
              <div className="course-stat-card__bar-label">
                <span>Avg GPA</span>
                <span className="course-stat-card__bar-value">{c.avgGpa}</span>
              </div>
              <div className="course-stat-card__bar-track">
                <div
                  className="course-stat-card__bar-fill course-stat-card__bar-fill--grade"
                  style={{ width: `${(c.avgGpa / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* Attendance bar */}
            <div className="course-stat-card__bar-group">
              <div className="course-stat-card__bar-label">
                <span>Attendance</span>
                <span className="course-stat-card__bar-value">{c.attendanceRate}%</span>
              </div>
              <div className="course-stat-card__bar-track">
                <div
                  className="course-stat-card__bar-fill course-stat-card__bar-fill--attendance"
                  style={{ width: `${c.attendanceRate}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseStats;
