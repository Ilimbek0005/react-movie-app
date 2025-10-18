import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: '15px', background: '#333', color: '#fff' }}>
      <nav>
        <Link to="/" style={{ margin: '10px', color: 'white' }}>Главная</Link>
        <Link to="/about" style={{ margin: '10px', color: 'white' }}>О нас</Link>
        <Link to="/contacts" style={{ margin: '10px', color: 'white' }}>Контакты</Link>
        <Link to="/movies" style={{ margin: '10px', color: 'white' }}>Фильмы</Link>
        <Link to="/favorites" style={{ margin: '10px', color: 'white' }}>Избранные</Link> {/* новая ссылка */}
      </nav>
    </header>
  );
}

export default Header;
