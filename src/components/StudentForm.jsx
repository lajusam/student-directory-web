import { useState } from "react";

/* Available courses */
const COURSES = [
  "BSC.CSIT",
  "BIT",
  "BCA",
  "Computer Engineering",
];

/**
 * StudentForm Component
 * A controlled form to add a new student to the directory.
 *
 * Props:
 *   - onAdd (func): Callback receiving a new student object (without id)
 */
function StudentForm({ onAdd }) {
  // ── Controlled form state ──
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const [isPresent, setIsPresent] = useState(true);

  /** Validate & submit */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !course || grade === "") return;

    const parsedGrade = Number(grade);
    if (isNaN(parsedGrade) || parsedGrade < 0 || parsedGrade > 100) return;

    onAdd({
      name: name.trim(),
      course: course.trim(),
      grade: parsedGrade,
      isPresent,
    });

    // Reset form
    setName("");
    setCourse("");
    setGrade("");
    setIsPresent(true);
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2 className="student-form__title">Add New Student</h2>

      <div className="student-form__grid">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="student-name">Name</label>
          <input
            id="student-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Jane Doe"
            required
          />
        </div>

        {/* Course */}
        <div className="form-group">
          <label htmlFor="student-course">Course</label>
          <select
            id="student-course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="" disabled>Select a course</option>
            {COURSES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Grade */}
        <div className="form-group">
          <label htmlFor="student-grade">Grade (0–100)</label>
          <input
            id="student-grade"
            type="number"
            min="0"
            max="100"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            placeholder="e.g. 85"
            required
          />
        </div>

        {/* Attendance Toggle */}
        <div className="form-group form-group--checkbox">
          <label htmlFor="student-present">
            <input
              id="student-present"
              type="checkbox"
              checked={isPresent}
              onChange={(e) => setIsPresent(e.target.checked)}
            />
            <span>Present today</span>
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn--primary">
        + Add Student
      </button>
    </form>
  );
}

export default StudentForm;
