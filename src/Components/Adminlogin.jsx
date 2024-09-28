// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Adminlogin.css';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

function Adminlogin() {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
      const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
        email,
        password
      });
      console.log(response.data);
      if(email==='admin@gmail.com' && password==='admin@123' ){
        localStorage.setItem('token',response.data.token);
        navigate('/admhome');
      }
      else{
        window.alert("Invalid credentials");
      }
    }
    catch(error){
      console.error('Login failed',error);
    }
  };
  
  return (
    <div className='bod-adl'>
      <div className='adl'>
        <div className="login-container-ad">
          <div className="login-card-ad">
            <div className="login-ad">
              <h2>Admin Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                placeholder='Enter your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br></br>
              <input
                type="password"
                id="password"
                placeholder='Enter your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <br></br>

              
                <button className='butt-adm' type="submit">
                  Log In
                </button>
             
              <br></br>
              {/* <div className="new">
                <p className="link-text">
                  New here? <a href="/Adminregister">Create an account</a>
                </p>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminlogin;
