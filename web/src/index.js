import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { 
  BrowserRouter,
  Routes, 
  Route
} from "react-router-dom"


import './index.css';

import AuthProvider from './components/auth/AuthProvider.js';
import Login from './views/auth/Login.js';

import Profile from './views/Profile.js';

import App from './views/App.js';
import About from './views/About.js';
import Contact from './views/Contact.js';
import Leaderboard from './views/Leaderboard.js';

import Problems from './views/Problems.js';
import Schedule from './views/Schedule.js';

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
          <Route path="/problems/schedule" element={ <Schedule /> } />

          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Login />} />

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

// For the innerScreenSize class, to deal with the navigation bar on mobile
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
