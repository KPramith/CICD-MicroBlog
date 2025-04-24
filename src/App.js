import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import { PostProvider } from './context/PostContext';
import './styles/index.css';

function App() {
  return (
    <PostProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<NewPostPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;