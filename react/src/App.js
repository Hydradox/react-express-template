import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


// Import views
import Home from './views/Home.js';
import About from './views/About.js';
import Users from './views/Users.js';



function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" element={<Home />}>Home</Link>
        <Link to="/about" element={<About />}>About</Link>
        <Link to="/users/5" element={<Users />}>Users</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
