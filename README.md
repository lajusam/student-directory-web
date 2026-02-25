# 📚 Student Directory Web

A modern, responsive student management dashboard built with **React 19** and **Vite**. Manage students, track attendance, monitor grades, and more — all from a clean, themeable interface with data persisted locally in the browser.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Student Management** | Add, remove, and view students with name, course, and grade |
| **Attendance Tracking** | Toggle student attendance (Present / Absent) with one click |
| **Grade Monitoring** | View grades at a glance; top performers (≥ 90) are highlighted with a badge |
| **Search** | Real-time search by student name |
| **Filter** | Filter by attendance status (Present / Absent) or by course |
| **Sort** | Sort students alphabetically (A–Z) or by grade (high → low) |
| **Authentication** | Register & login system with protected dashboard route |
| **Dark / Light Mode** | Theme toggle that respects OS preference and persists your choice |
| **Local Persistence** | All data (students, auth, theme) stored in `localStorage` — no backend needed |
| **Responsive Design** | Works on desktop, tablet, and mobile screens |

---

## 🖼️ Pages

- **Home** (`/`) — Public landing page with hero section, feature highlights, and stats
- **Login** (`/login`) — Email & password sign-in form
- **Register** (`/register`) — Create a new account
- **Dashboard** (`/dashboard`) — Protected student directory with full CRUD & filtering

---

## 🛠️ Tech Stack

- **React 19** — UI library with hooks and functional components
- **React Router v7** — Client-side routing with protected routes
- **Vite 7** — Lightning-fast dev server and build tool
- **ESLint** — Code linting with React Hooks & React Refresh plugins
- **localStorage** — Client-side data persistence (students, users, theme)

---

## 📂 Project Structure

```
src/
├── App.jsx                  # Root component with routing & Dashboard
├── App.css                  # Global styles
├── main.jsx                 # App entry point (BrowserRouter + AuthProvider)
├── index.css                # Base / reset styles
├── assets/                  # Static assets
├── components/
│   ├── Badge.jsx            # Reusable status badge (Present, Absent, Top Performer)
│   ├── HeroIllustration.jsx # SVG illustration for the landing page
│   ├── Navbar.jsx           # Top navigation bar with auth links & theme toggle
│   ├── ProtectedRoute.jsx   # Route guard — redirects unauthenticated users
│   ├── SearchInput.jsx      # Controlled search input component
│   ├── Skeleton.jsx         # Loading skeleton placeholder
│   ├── StudentCard.jsx      # Card displaying student info, badges & actions
│   ├── StudentForm.jsx      # Form to add a new student
│   └── ThemeToggle.jsx      # Dark / Light mode switcher
├── context/
│   └── AuthContext.jsx       # Auth context & provider (register, login, logout)
└── pages/
    ├── HomePage.jsx          # Public landing page
    ├── LoginPage.jsx         # Login form page
    └── RegisterPage.jsx      # Registration form page
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/lajusam/student-directory-web.git
cd student-directory-web

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** (default Vite port).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🔐 Authentication Flow

1. **Register** — Create an account with name, email, and password. Automatically logs you in.
2. **Login** — Sign in with your registered email and password.
3. **Protected Routes** — The `/dashboard` route requires authentication; unauthenticated users are redirected to `/login`.
4. **Logout** — Clears the session and returns to the home page.

> **Note:** Authentication is client-side only using `localStorage`. This is for demo/learning purposes — do not use this approach for production apps handling sensitive data.

---

## 🎨 Theming

The app supports **light** and **dark** modes:

- On first visit, the theme matches your **OS preference** (`prefers-color-scheme`).
- Toggle the theme using the 🌙 / ☀️ button in the navbar.
- Your choice is saved in `localStorage` and persists across sessions.

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React + Vite
