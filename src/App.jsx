import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StudentForm from "./components/StudentForm";
import StudentCard from "./components/StudentCard";
import SearchInput from "./components/SearchInput";
import DashboardStats from "./components/DashboardStats";
import CourseStats from "./components/CourseStats";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useAuth } from "./context/AuthContext";
import "./App.css";

/* ──────────────────────────────────────────
   Sample seed data (used on first visit only)
   ────────────────────────────────────────── */
const SEED_STUDENTS = [
  { id: 1, name: "Alice Johnson",  course: "BSC.CSIT",             gpa: 3.8, isPresent: true  },
  { id: 2, name: "Bob Smith",      course: "BIT",                  gpa: 3.1, isPresent: false },
  { id: 3, name: "Clara Lee",      course: "BSC.CSIT",             gpa: 3.5, isPresent: true  },
  { id: 4, name: "David Kim",      course: "Computer Engineering", gpa: 3.7, isPresent: true  },
  { id: 5, name: "Emily Chen",     course: "BCA",                  gpa: 2.6, isPresent: false },
  { id: 6, name: "Frank Patel",    course: "Computer Engineering", gpa: 3.9, isPresent: true  },
];

/** Load students from localStorage or fall back to seed data */
function loadStudents() {
  try {
    const saved = localStorage.getItem("students");
    if (saved) return JSON.parse(saved);
  } catch { /* ignore corrupted data */ }
  return SEED_STUDENTS;
}

/** Load nextId from localStorage */
function loadNextId() {
  try {
    const saved = localStorage.getItem("nextStudentId");
    if (saved) return JSON.parse(saved);
  } catch { /* ignore */ }
  return SEED_STUDENTS.length + 1;
}

/* ──────────────────────────────────────────
   Dashboard — the original student directory
   (only accessible when logged in)
   ────────────────────────────────────────── */
function Dashboard() {
  // ── Student data (persisted in localStorage) ──
  const [students, setStudents] = useState(loadStudents);
  const [nextId, setNextId]     = useState(loadNextId);

  // ── UI controls ──
  const [searchText, setSearchText]     = useState("");
  const [filterOption, setFilterOption] = useState("all");
  const [sortOption, setSortOption]     = useState("name");

  // ── Persist students & nextId to localStorage ──
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("nextStudentId", JSON.stringify(nextId));
  }, [nextId]);

  /* Derived: unique courses for the filter dropdown */
  const uniqueCourses = [...new Set(students.map((s) => s.course))];

  /* ──────── Handlers ──────── */

  /** Add a new student (receives object WITHOUT id) */
  const handleAddStudent = (data) => {
    setStudents((prev) => [...prev, { ...data, id: nextId }]);
    setNextId((n) => n + 1);
  };

  /** Remove a student by id */
  const handleDeleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  /** Toggle a student's attendance */
  const handleToggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isPresent: !s.isPresent } : s))
    );
  };

  /** Edit a student's details by id */
  const handleEditStudent = (id, updatedFields) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updatedFields } : s))
    );
  };

  /** Reset students back to original seed data */
  const handleResetData = () => {
    if (window.confirm("Reset all student data to defaults? This cannot be undone.")) {
      setStudents(SEED_STUDENTS);
      setNextId(SEED_STUDENTS.length + 1);
    }
  };

  /** Export student data as CSV download */
  const handleExportCSV = () => {
    const header = "Name,Course,GPA,Attendance";
    const rows = students.map(
      (s) => `"${s.name}","${s.course}",${s.gpa},${s.isPresent ? "Present" : "Absent"}`
    );
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "students.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  /* ──────── Filtering, Searching & Sorting pipeline ──────── */
  const filteredStudents = students
    .filter((s) => s.name.toLowerCase().includes(searchText.toLowerCase()))
    .filter((s) => {
      if (filterOption === "all")     return true;
      if (filterOption === "present") return s.isPresent;
      if (filterOption === "absent")  return !s.isPresent;
      return s.course === filterOption;          // course name
    })
    .sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "gpa")  return b.gpa - a.gpa; // highest first
      return 0;
    });

  const hasStudents = students.length > 0;
  const hasResults  = filteredStudents.length > 0;

  /* ──────── Render ──────── */
  return (
    <div className="dashboard">
      <main className="container">
        {/* ── Overview Stats ── */}
        <DashboardStats students={students} />

        {/* ── Course Breakdown ── */}
        <CourseStats students={students} />

        {/* ── Add Student Form ── */}
        <StudentForm onAdd={handleAddStudent} />

        {/* ── Toolbar: Search · Filter · Sort · Actions ── */}
        <section className="toolbar" aria-label="Search and filter controls">
          <SearchInput
            value={searchText}
            onChange={setSearchText}
            placeholder="Search by student name…"
          />

          <div className="toolbar__control">
            <label htmlFor="filter-select">Filter</label>
            <select
              id="filter-select"
              value={filterOption}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value="all">All Students</option>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
              {uniqueCourses.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="toolbar__control">
            <label htmlFor="sort-select">Sort by</label>
            <select
              id="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="name">Name (A–Z)</option>
              <option value="gpa">GPA (High → Low)</option>
            </select>
          </div>

          <div className="toolbar__actions">
            <button className="btn btn--outline btn--sm" onClick={handleExportCSV} title="Export as CSV">
              📥 Export CSV
            </button>
            <button className="btn btn--delete btn--sm" onClick={handleResetData} title="Reset to default data">
              🔄 Reset
            </button>
          </div>
        </section>

        {/* ── Student Count ── */}
        {hasStudents && (
          <div className="student-count">
            Showing <strong>{filteredStudents.length}</strong> of <strong>{students.length}</strong> student{students.length !== 1 ? "s" : ""}
          </div>
        )}

        {/* ── Student List ── */}
        <section className="student-list" aria-label="Student list">
          {!hasStudents && (
            <div className="empty-state">
              <span className="empty-state__icon">📚</span>
              <p>No students yet. Add your first student above!</p>
            </div>
          )}

          {hasStudents && !hasResults && (
            <div className="empty-state">
              <span className="empty-state__icon">🔎</span>
              <p>No results found. Try adjusting your search or filters.</p>
            </div>
          )}

          {hasResults && (
            <div className="student-grid">
              {filteredStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onDelete={handleDeleteStudent}
                  onToggle={handleToggleAttendance}
                  onEdit={handleEditStudent}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

/* ──────────────────────────────────────────
   App — Root component with routing
   ────────────────────────────────────────── */
function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <RegisterPage />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
