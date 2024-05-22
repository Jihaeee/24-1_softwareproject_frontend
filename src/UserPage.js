import React from "react";
import { Link } from "react-router-dom";
import './UserPage.css';

function UserPage() {
  return (
    <div className="user-container">
      <h1>첫 화면</h1>
      <div className="buttons">
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default UserPage;
