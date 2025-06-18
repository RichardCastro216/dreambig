import React, { useState } from 'react';
import Contact from './pages/Contact.jsx';
import Home from './pages/index.jsx';
import Login from './pages/Login.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Farm from './components/Projects/farm/index.jsx';
import Kaus from './components/Projects/kaus/index.jsx';
import Finance from './components/Projects/finance/index.jsx';
import Graphic from './components/Projects/graphic/index.jsx';
import Brand from './components/Projects/brand/index.jsx';
import Mobile from './components/Projects/mobile/index.jsx';
import Logo from './components/Projects/logo/index.jsx';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {/* Login route - always accessible */}
        <Route 
          path="/" 
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          } 
        />
        
        {/* Protected routes */}
        <Route 
          path="/home" 
          element={
            isAuthenticated ? (
              <>
                <Home signOut = {()=>handleLogout()}/>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        
        <Route 
          path="/about" 
          element={
            isAuthenticated ? (
              <>
                <Brand />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        
        <Route 
          path="/about" 
          element={
            isAuthenticated ? (
              <>
                <Brand />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        <Route 
          path="/logo" 
          element={
            isAuthenticated ? (
              <>
                <Logo />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        
        <Route 
          path="/contact" 
          element={
            isAuthenticated ? (
              <>
                <Mobile />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        
        {/* Project routes */}
        <Route 
          path="/farm" 
          element={
              <>
                <Farm />
                <Footer />
              </>
            
          } 
        />
        {/* Project routes */}
        <Route 
          path="/kaus" 
          element={
              <>
                <Kaus />
                <Footer />
              </>
          } 
        />
        {/* Project routes */}
        <Route 
          path="/finance" 
          element={
              <>
                <Finance />
                <Footer />
              </>
          } 
        />
        {/* Project routes */}
        <Route 
          path="/graphic" 
          element={
              <>
                <Graphic />
                <Footer />
              </>
          } 
        />
        
        {/* Add similar protection for other project routes */}
      </Routes>
    </Router>
  );
}

export default App;