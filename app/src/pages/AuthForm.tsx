import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const AuthForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const { performLogin } = useAuth(); // Verwenden der performLogin-Funktion aus dem Context

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isLogin) {
            // Versuch, sich mit den eingegebenen Anmeldedaten anzumelden
            try {
                await performLogin(email, password, navigate); // Annahme: performLogin akzeptiert ein Benutzerobjekt und navigate
            } catch (error) {
                alert(error);
            }
        } else {
            // Registrierungs Logik
            // Hier bleibt die Registrierungslogik, wie sie war
            const checkUser = await fetch(`http://localhost:3000/users?email=${encodeURIComponent(email)}`);
            const userExists = await checkUser.json();

            if (userExists.length === 0) {
                const response = await fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                if (response.ok) {
                    console.log('Registrierung erfolgreich');
                    navigate('/'); // Navigiere zur Startseite nach erfolgreicher Registrierung
                } else {
                    alert('Registrierung fehlgeschlagen');
                }
            } else {
                alert('Ein Benutzer mit dieser E-Mail existiert bereits.');
            }
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1>{isLogin ? 'Login' : 'Registrierung'}</h1>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Registrieren'}</button>
                <button type="button" className="btn btn-secondary" onClick={() => setIsLogin(!isLogin)}>
                    Wechseln zu {isLogin ? 'Registrierung' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default AuthForm;
