import Badge from "./Badge";

/**
 * StudentCard Component
 * Displays a single student's information inside a styled card.
 *
 * Props:
 *   - student (object): { id, name, course, grade, isPresent }
 *   - onDelete (func):  Callback to remove this student from the list
 *   - onToggle (func):  Callback to toggle attendance
 */
function StudentCard({ student, onDelete, onToggle }) {
  const { id, name, course, grade, isPresent } = student;
  const isTopPerformer = grade >= 90;

  return (
    <div className="student-card">
      {/* ── Badges Row ── */}
      <div className="student-card__badges">
        <Badge
          label={isPresent ? "Present" : "Absent"}
          type={isPresent ? "present" : "absent"}
        />
        {isTopPerformer && (
          <Badge label="Top Performer ⭐" type="topPerformer" />
        )}
      </div>

      {/* ── Student Info ── */}
      <h3 className="student-card__name">{name}</h3>

      <div className="student-card__details">
        <span className="student-card__course">{course}</span>
        <span className="student-card__grade">Grade: <strong>{grade}</strong></span>
      </div>

      {/* ── Actions ── */}
      <div className="student-card__actions">
        <button
          className="btn btn--toggle"
          onClick={() => onToggle(id)}
          aria-label={`Mark ${name} as ${isPresent ? "absent" : "present"}`}
        >
          {isPresent ? "Mark Absent" : "Mark Present"}
        </button>
        <button
          className="btn btn--delete"
          onClick={() => onDelete(id)}
          aria-label={`Remove ${name}`}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
