// src/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
    id: number;
    email: string;
    password: string;
}

interface AuthContextType {
    currentUser: User | null;
    performLogin: (username: string, password: string, navigate: (path: string) => void) => Promise<void>;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || 'null');
        setCurrentUser(user);
    }, []);

    const performLogin = async (username: string, password: string, navigate: (path: string) => void) => {
        const response = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`);
        const users = await response.json();
        if (users.length > 0) {
            localStorage.setItem('user', JSON.stringify(users[0]));
            setCurrentUser(users[0]);
            console.log('Erfolgreich eingeloggt:', users[0]);
            navigate('/'); // Weiterleiten zur Hauptseite
        } else {
            throw new Error('Login fehlgeschlagen. Bitte überprüfen Sie Ihre Anmeldedaten.');
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        setCurrentUser(null);
        // Hier könnten Sie auch navigate('/login') aufrufen, wenn Sie möchten
    };

    return (
        <AuthContext.Provider value={{ currentUser, performLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth muss innerhalb eines AuthProvider verwendet werden');
    }
    return context;
};
