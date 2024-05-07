import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar';
import Movies from './movies';
import TV from './tv';
import Home from './home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviesDays from './moviesday';
import TVDays from './tvday';
import Footer from './footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/movies' element={<Movies />} />
    <Route path='/tv' element={<TV />} />
    <Route path='/movesday' element={<MoviesDays />} />
    <Route path='/tvday' element={<TVDays />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
