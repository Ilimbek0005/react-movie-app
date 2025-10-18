import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PostsList from "./components/PostsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from './pages/MoviesPage';
import Detail from './pages/Detail';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <Router>
      <Header /> {/* только верхняя панель */}
      <Routes>
        <Route path="/" element={<><HomePage/><PostsList/></>} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/movies/:id" element={<Detail/>} />
        <Route path="/favorites" element={<FavoritesPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
