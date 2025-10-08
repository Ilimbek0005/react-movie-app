import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PostsList from "./components/PostsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from './pages/MoviesPage';
import Detail from './pages/Detail'

function App(){
  return(
  <Router>
    <Header />
    <Routes>
      <Route path="/movies/:id" element={<Detail/>}/>
      <Route path="/" element={
        <div>
          <HomePage/>
          <PostsList/>
        </div>
      } />

      <Route path="/movies" element={<MoviesPage/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;