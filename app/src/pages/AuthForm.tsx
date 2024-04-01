import React, { useState } from 'react';

const AuthForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isLogin) {
            // Login Logik
            const response = await fetch('http://localhost:3000/users?email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password));
            const users = await response.json();

            if (users.length > 0) {
                console.log('Erfolgreich eingeloggt:', users[0]);
                // Weiterführende Logik hier einfügen, z.B. Weiterleitung oder Token-Speicherung
            } else {
                alert('Login fehlgeschlagen: Benutzer nicht gefunden oder Passwort falsch.');
            }
        } else {
            // Registrierungs Logik
            // Zuerst prüfen, ob der Benutzer bereits existiert
            const checkUser = await fetch('http://localhost:3000/users?email=' + encodeURIComponent(email));
            const userExists = await checkUser.json();

            if (userExists.length === 0) {
                // Benutzer existiert nicht, also füge ihn hinzu
                const response = await fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }), // In der Praxis ein gehashtes Passwort speichern
                });

                if (response.ok) {
                    console.log('Registrierung erfolgreich');
                    // Weiterführende Logik hier einfügen
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
