import React, { useState } from "react";

function LoginPage() {
  // 상태 변수 정의: 아이디와 비밀번호
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 아이디 입력 핸들러
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // 비밀번호 입력 핸들러
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // 로그인 버튼 클릭 핸들러
  const handleLogin = () => {
    // 여기에 로그인 처리 로직을 추가하세요
    console.log("아이디:", username);
    console.log("비밀번호:", password);
  };

  return (
    <div>
      <h2>로그인</h2>
      <form>
        <div>
          <label htmlFor="username">아이디:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
