
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const uid = localStorage.getItem('uid');
    if (uid) {
      navigate('/home');
    }
  }, [navigate]);

  const handleLogin = (user: string) => {
    localStorage.setItem('uid', user);
    navigate('/home');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login</h1>
      <button onClick={() => handleLogin('user1')}>Login as User1</button>
      <button onClick={() => handleLogin('user2')} style={{ marginLeft: '10px' }}>
        Login as User2
      </button>
    </div>
  );
};

export default Login;
