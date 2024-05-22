import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    return isValid;
  };

  const handleSignUp = () => {
    if (!validateEmail(username)) {
      setEmailError("유효한 이메일 형식이 아닙니다.");
      return;
    }

    localStorage.setItem("email", username);
    localStorage.setItem("password", password);

    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2>TRAC</h2>
      <h4>계속하려면 회원가입하세요.</h4>
      <form>
        <div className="input-group">
          <label htmlFor="username">이메일:</label>
          <input
            type="text"
            id="username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="signup-button" onClick={handleSignUp}>
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
