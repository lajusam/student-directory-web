import { useState } from "react";
import Badge from "./Badge";

/* Available courses (same as StudentForm) */
const COURSES = ["BSC.CSIT", "BIT", "BCA", "Computer Engineering"];

/**
 * StudentCard Component
 * Displays a single student's information inside a styled card.
 * Supports inline editing of name, course, and GPA.
 *
 * Props:
 *   - student (object): { id, name, course, gpa, isPresent }
 *   - onDelete (func):  Callback to remove this student from the list
 *   - onToggle (func):  Callback to toggle attendance
 *   - onEdit   (func):  Callback to update student data
 */
function StudentCard({ student, onDelete, onToggle, onEdit }) {
  const { id, name, course, gpa, isPresent } = student;
  const isTopPerformer = gpa >= 3.6;

  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editCourse, setEditCourse] = useState(course);
  const [editGpa, setEditGpa] = useState(String(gpa));

  const handleSave = () => {
    const parsed = Number(editGpa);
    if (!editName.trim() || !editCourse || isNaN(parsed) || parsed < 0 || parsed > 4) return;
    onEdit(id, { name: editName.trim(), course: editCourse, gpa: Math.round(parsed * 100) / 100 });
    setEditing(false);
  };

  const handleCancel = () => {
    setEditName(name);
    setEditCourse(course);
    setEditGpa(String(gpa));
    setEditing(false);
  };

  /* ── Edit Mode ── */
  if (editing) {
    return (
      <div className="student-card student-card--editing">
        <h3 className="student-card__edit-title">Edit Student</h3>

        <div className="student-card__edit-form">
          <div className="student-card__edit-group">
            <label htmlFor={`edit-name-${id}`}>Name</label>
            <input
              id={`edit-name-${id}`}
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </div>

          <div className="student-card__edit-group">
            <label htmlFor={`edit-course-${id}`}>Course</label>
            <select
              id={`edit-course-${id}`}
              value={editCourse}
              onChange={(e) => setEditCourse(e.target.value)}
            >
              {COURSES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="student-card__edit-group">
            <label htmlFor={`edit-gpa-${id}`}>GPA</label>
            <input
              id={`edit-gpa-${id}`}
              type="number"
              min="0"
              max="4"
              step="0.1"
              value={editGpa}
              onChange={(e) => setEditGpa(e.target.value)}
            />
          </div>
        </div>

        <div className="student-card__actions">
          <button className="btn btn--primary btn--sm" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn--outline btn--sm" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  /* ── View Mode ── */
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
        <span className="student-card__grade">GPA: <strong>{gpa}</strong></span>
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
          className="btn btn--edit"
          onClick={() => setEditing(true)}
          aria-label={`Edit ${name}`}
        >
          Edit
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
