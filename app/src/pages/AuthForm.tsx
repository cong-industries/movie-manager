import React, { useState } from 'react';

const AuthForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // Zustand um zwischen Login und Registrierung zu wechseln

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isLogin) {
            // Login Logik
            console.log('Login mit', email, password);
        } else {
            // Registrierungs Logik
            console.log('Registrierung mit', email, password);
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
