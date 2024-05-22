import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    return isValid;
  };

  const handleLogin = () => {
    if (!validateEmail(username)) {
      setEmailError("유효한 이메일 형식이 아닙니다.");
      return;
    }

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (username === storedEmail && password === storedPassword) {
      setLoginError("");
      navigate("/home");
    } else {
      setLoginError("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="login-container">
      <h2>TRAC</h2>
      <h4>계속하려면 로그인하세요.</h4>
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
        {loginError && <p className="error-message">{loginError}</p>}
        <button type="button" className="login-button" onClick={handleLogin}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
