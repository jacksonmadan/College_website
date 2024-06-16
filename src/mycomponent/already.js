import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Button from '../mycomponent/Button';

const Already = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!form.email) formErrors.email = 'Email is required';
    if (!form.password) formErrors.password = 'Password is required';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3000/LOGIN', form);
        console.log('Login successful:', response.data);
        setForm({ email: '', password: '' });
        navigate('/');
      } catch (error) {
        console.error('Login error:', error);
        if (error.response) {
          console.error('Error response:', error.response.data);
          setErrors({ api: 'Failed to login. Invalid credentials.' });
        } else {
          setErrors({ api: 'Failed to connect to the server.' });
        }
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
    <div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
        {errors.api && <p className="error">{errors.api}</p>}
      </form>
    </div>
    <Button/>
    </>
  );
};

export default Already;
