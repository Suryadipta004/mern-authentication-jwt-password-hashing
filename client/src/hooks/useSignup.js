import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { message } from 'antd';

const useSignup = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const registerUser = async (values) => {
    if (values.password !== values.passwordConfirm) {
      return setError('Passwords are not the same');
    }

    try {
      setError(null);
      setLoading(true);

      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 400) {
          setError(data.message);
        } else {
          setError('Registration failed');
        }
        message.error(data.message || 'Registration failed');
      } else {
        login(data.token, data.user); 
        message.success('Registration successful');
      }
    } catch (error) {
      setError(error.message);
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, registerUser };
};

export default useSignup;
