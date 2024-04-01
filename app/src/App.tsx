// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataList from './pages/DataList';
import DetailPage from './pages/DetailPage';
import Auth from './pages/AuthForm';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './components/ProtectedRoutes'; // Stellen Sie sicher, dass der Pfad korrekt ist.
import './App.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<ProtectedRoute><DataList /></ProtectedRoute>} />
          <Route path="/detail/:id" element={<ProtectedRoute><DetailPage /></ProtectedRoute>} />
          {/* Fügen Sie weitere geschützte Routen hier hinzu */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
