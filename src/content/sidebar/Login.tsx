import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      await login(email, password);
    } catch (error) {
      setError('Invalid email or password' + error);
    }
  };

  return ( 
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email</label>
          <div className="input-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required       
            />
            <FiMail className="input-icon" />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div   
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="login-button">
          Login
        </button>

        <div className="help-text">
          Dont have an account? 
          <a 
          href="https://amazon-seller-tool.vercel.app/signup?source=extension" 
          target="_blank"
          rel="noopener noreferrer">
          Create an account</a>
        </div>
      </form>
    </div>
  );
};

export default Login;