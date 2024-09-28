// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Enquiry.css';

import axios from 'axios';

// import { Link } from 'react-router-dom';

const Enquiry = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourseName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
      const response =await axios.post(
        "http://localhost:8080/enquiry",{
          name,
          email,
          course,
          message,
          
        },
      );
      console.log("Details added Successfully");
      console.log(response.data);
      window.alert("Successfully added");
    }
    catch(error){
      console.log("Failed");
      console.log(error);
    }
  }

  return (
    <div className='bod-log-en'>
    <div className="login-container-en">
    
      <div className="login-card-en">
        <div className="login-en">
        <h2>Enquiry form</h2>
        </div>
        <form>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="name"
            placeholder='Enter your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <img src={user} alt='' className="absolute top-4 right-4 "></img> */}


          <label htmlFor="email">Email-Id:</label>
          <input
            type="email"
            id="email"
            placeholder='Enter your email-id'
            value={email}
            
            onChange={(e) => setEmail(e.target.value)}
          />

        <label htmlFor="course">CourseName:</label>
          <input
            type="text"
            id="course"
            placeholder='Enter the Course name'
            value={course}
            onChange={(e) => setCourseName(e.target.value)}
          />

          <label>
            Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='mess'
            required
          ></textarea>
          </label>

          <button type="button" onClick={handleSubmit}>
            Submit
            
          </button>
          <br></br>
          {/* <div className="new-en">
          <p className="link-text-en">
             New here? <a href="/register">Create an account</a>
          </p>
          </div> */}
        </form>
      </div>
    </div>
    </div>
  );
};

export default Enquiry;