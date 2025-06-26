import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // empêche le rechargement de la page

    // Tu peux remplacer ceci par un appel Firebase ou une API
    if (email === 'admin@example.com' && password === '123456') {
      setMessage('Connexion réussie ✅');
    } else {
      setMessage('Email ou mot de passe incorrect ❌');
    }
  };

  return (
    <div className="login-form" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Se connecter</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;
