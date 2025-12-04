import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header style={{ padding: "15px", background: "#333", color: "#fff" }}>
      <nav>
        <Link to="/" style={{ margin: "10px", color: "white" }}>Главная</Link>
        <Link to="/about" style={{ margin: "10px", color: "white" }}>О нас</Link>
        <Link to="/contacts" style={{ margin: "10px", color: "white" }}>Контакты</Link>
        <Link to="/movies" style={{ margin: "10px", color: "white" }}>Фильмы</Link>
        <Link to="/favorites" style={{ margin: "10px", color: "white" }}>Избранные</Link>
        <Link to="/products" style={{ margin: "10px", color: "white" }}>Товары</Link>


        {/* Добавляем ссылки для зарегистрированного пользователя */}
        {user && (
          <>
            <Link to="/booking" style={{ margin: "10px", color: "white" }}>Забронировать</Link>
            <Link to="/mybookings" style={{ margin: "10px", color: "white" }}>Мои брони</Link>
          </>
        )}

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
