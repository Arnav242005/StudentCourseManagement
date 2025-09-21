import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../css/Navbar.css"; // import CSS

function Navbar() {
  return (
    <div className="layout">
      <nav className="navbar">
        <h2 className="logo">🎓 SCM</h2>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/students">Students</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/enrollments">Enrollments</NavLink>
          </li>
        </ul>
      </nav>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;
