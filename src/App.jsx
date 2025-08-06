import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home as HomeIcon, LogIn, UserPlus, LogOut } from 'lucide-react';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import Logout from './components/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
    
      <nav className="nav-style">
        <div className="nav-container-style">
         
          <Link to="/" className="logo-style">
            Task Manager
          </Link>
        
          <div className="link-container-style">
            <Link to="/home" className="link-style">
              <HomeIcon size={20} />
              <span>Home</span>
            </Link>
            <Link to="/login" className="link-style">
              <LogIn size={20} />
              <span>Login</span>
            </Link>
            <Link to="/signup" className="link-style">
              <UserPlus size={20} />
              <span>Signup</span>
            </Link>
            <Link to="/logout" className="link-style">
              <LogOut size={20} />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="page-container-style">
        <Routes>
         
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;