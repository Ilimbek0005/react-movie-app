import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // добавлено

function Header() {
  const { user, logout } = useContext(AuthContext); // получаем пользователя и выход

  return (
    <header style={{ padding: "15px", background: "#333", color: "#fff" }}>
      <nav>
        <Link to="/" style={{ margin: "10px", color: "white" }}>Главная</Link>
        <Link to="/about" style={{ margin: "10px", color: "white" }}>О нас</Link>
        <Link to="/contacts" style={{ margin: "10px", color: "white" }}>Контакты</Link>
        <Link to="/movies" style={{ margin: "10px", color: "white" }}>Фильмы</Link>
        <Link to="/favorites" style={{ margin: "10px", color: "white" }}>Избранные</Link>

        {/* Блок справа — вход / выход */}
        <span style={{ float: "right", marginRight: "15px" }}>
          {user ? (
            <>
              <span style={{ marginRight: "10px" }}>👋 {user.username}</span>
              <button
                onClick={logout}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Выйти
              </button>
            </>
          ) : (
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                background: "green",
                padding: "5px 10px",
                borderRadius: "4px",
              }}
            >
              Войти
            </Link>
          )}
        </span>
      </nav>
    </header>
  );
}

export default Header;
