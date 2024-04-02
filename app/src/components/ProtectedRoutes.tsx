// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Stellen Sie sicher, dass der Pfad zu Ihrem AuthContext korrekt ist.

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        // Wenn der Benutzer nicht eingeloggt ist, umleiten zur Login-Seite
        console.log('Benutzer nicht eingeloggt - protected route');
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
