// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataList from './pages/DataList';
import './App.css';
import DetailPage from './pages/DetailPage';
import Login from './pages/AuthForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
