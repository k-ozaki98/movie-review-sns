import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import MovieSearch from './components/MovieSearch';
import PopularMovies from './components/PopularMovies';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/search">Search Movies</Link></li>
            <li><Link to="/popular">Popular Movies</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<MovieSearch />} />
          <Route path="/popular" element={<PopularMovies />} />
          <Route path="/" element={<h1>Welcome to Movie Review SNS</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;