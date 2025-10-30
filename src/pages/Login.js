import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "80vh",
      background: "#1e1e2f",
      color: "#fff",
      padding: "20px"
    }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Вход</h2>
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "300px",
        background: "#2c2c3c",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)"
      }}>
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", borderRadius: "4px", border: "none" }}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", borderRadius: "4px", border: "none" }}
        />
        <button type="submit" style={{
          background: "#4caf50",
          color: "#fff",
          padding: "10px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold"
        }}>Войти</button>
      </form>
      <p style={{ marginTop: "15px" }}>
        Нет аккаунта? <Link to="/register" style={{ color: "#4caf50" }}>Зарегистрироваться</Link>
      </p>
    </div>
  );
}

export default Login;
