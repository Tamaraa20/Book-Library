import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About'
import BookList from './Components/BookList/BookList'
import BookDetails from './Components/BookDetails/BookDetails'
import { AppProvider } from './contextDb';
import Favorite from './Components/Favorite/Favorite';
import Footer from '../src/Components/Footer/footer'
import Navbar from './Components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/book' element={<BookList />} />
        <Route path='/book/:id' element={<BookDetails />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  </AppProvider>
);
