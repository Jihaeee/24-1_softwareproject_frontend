import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserPage from "./UserPage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import IssuePage from './IssuePage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Register</Link>
            </li>
            <li>
            <Link to="/create-issue">Create Issue</Link>
          </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/create-issue" element={<IssuePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
