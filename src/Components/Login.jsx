// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';


// eslint-disable-next-line no-unused-vars
import user from "./Asserts/user.png";
import NavBar from './navbar';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  

  
  
  const handleSubmit= async (e)=>{
    e.preventDefault();
    // dispatch(
    //   login({
    //    name:username
    //   })
    //   )
      // navigate('/Home');
  try{
    const response=await axios.post("http://localhost:8080/api/v1/auth/authenticate",{
        email:email ,
        password:password
    });
    console.log(response.data);
      localStorage.setItem('token', response.data.token);
      // console.log(localStorage.getItem("token"));
      
      navigate("/Userhome");
      window.alert("Login Successful.");
  }
catch(error){
    window.alert("Invalid Username or Password !!!");
    console.log(error);
}
  }
  return (
    <div className='bod-log'>
      <div className="login-container">
        <NavBar />
        <div className="login-card">
          <div className="login">
            <h2>User Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email"
              placeholder='Enter your Email'
              name="email"
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

           
          
              <button className='butt-user' type="submit" >
                Log In
              </button>
         
            <br></br>
            <div className="new">
              <p className="link-text">
                New here? <Link to="/register">Create an account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
