// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Adminregister.css';

 // eslint-disable-next-line no-unused-vars
//  import user from "./Asserts/user.png";

 // eslint-disable-next-line no-unused-vars
//  import pass from "./Asserts/padlock(1).png";


const Adminregister = () => {
  const [username, setUsername] = useState('');
  const[email, setEmail]=useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');



  

  const handleLogin = () => {
    // Handle login logic here
    // console.log(Logging in with username: ${username} and password: ${password});
  };

  return (
    <div className='bod-reg-ad'>
    <div className="login-container1-ad">
      <div className="login-card1-ad">
        <div className="login1-ad">
        <h2>Admin Registration</h2>
        </div>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder='Enter your Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <img src={user} alt='' className="absolute top-4 right-4 "></img> */}


          <label htmlFor="email">Email Id:</label>
          <input
            type="text"
            id="email"
            placeholder='Enter your Email-Id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder='Enter your Password'
            value={password}
            
            onChange={(e) => setPassword(e.target.value)}
          />

         <label htmlFor="dob">D.O.B:</label>
          <input
            type="date"
            id="dob"
            placeholder='Enter your Date of birth'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

        <label htmlFor="mob">Mobile No:</label>
          <input
            type="tel"
            id="mob"
            placeholder='Enter your Mobile number'
            pattern="[0-9]{10} " required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
     <br></br>
          <button type="button" onClick={handleLogin}>
            Register
          </button>
          <br></br>
          <div className="new1-ad">
          <p className="link-text1-ad">
              <a href="/Adminlogin">Back to login</a>
          </p>
          </div>
         
        </form>
      </div>
    </div>
    </div>
  );
};

export default Adminregister;