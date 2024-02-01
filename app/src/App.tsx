// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataList from './DataList';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataList />} />
        {/* Weitere Routen hier einfügen */}
      </Routes>
    </Router>
  );
};

export default App;
