import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import './RegisterPage.css';

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    register(username, password);
    navigate('/');
  };

  return (
    <div className="login-bg">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Register</h1>
        <Input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <Button type="submit" className="login-button">Sign Up</Button>
      </form>
    </div>
  );
};

export default RegisterPage;
