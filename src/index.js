import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { 
  BrowserRouter,
  Routes, 
  Route,
  Navigate
} from "react-router-dom"


import './index.css';

import AuthProvider from './components/auth/AuthProvider.js';
import Login from './views/auth/Login.js';
import Register from './views/auth/Register.js';

import Profile from './views/Profile.js';

import App from './views/App.js';
import About from './views/About.js';
import Contact from './views/Contact.js';
import Leaderboard from './views/Leaderboard.js';
import Problems from './views/Problems.js';

import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="no-scrollbar h-full w-full">
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <NavBar />
        <Routes>
          
          {/* <Route path="/words/auth/*" element={<Auth />} /> */}

          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/leaderboard" element={ <Leaderboard /> } />
          <Route path="/problems" element={ <Problems /> } />

          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/" element={<App />} />
          <Route path="/*" element={<App />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
