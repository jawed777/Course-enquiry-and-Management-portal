import { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);

      if (response.status === 200) {
        // Registration successful
        console.log('Registration successful:', formData);
        navigate('/Login');
      } else {
        // Handle registration failure
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className='bod-reg'>
      <div className="login-container1">
        <div className="login-card1">
          <div className="login1">
            <h2>Registration</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter your Username'
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email Id:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder='Enter your Email-Id'
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Enter your Password'
              value={formData.password}
              onChange={handleChange}
            />

            <br />
            <button type="submit">Register</button>
            <br />
            </form>
           
          
        </div>
      </div>
    </div>
  );
};

export default Login;
