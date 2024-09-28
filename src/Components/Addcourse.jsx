// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Addcourse.css';
import axios from 'axios';

// eslint-disable-next-line no-unused-vars
// import user from "./Asserts/user.png";

// eslint-disable-next-line no-unused-vars
//  import pass from "./Asserts/padlock(1).png";

const Addcourse = () => {
  const [coursename, setCoursename] = useState('');
  const [duration, setDuration] = useState('');
  const [timings, setTimings] = useState('');
  const [mode, setMode] = useState('');
  const [fee, setFee] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
      const response =await axios.post(
        "http://localhost:8080/add",{
          coursename,
          duration,
          timings,
          mode,
          fee,
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
    <div className='bod-reg-adc'>
      <div className="login-container1-adc">
        <div className="login-card1-adc">
          <div className="login1-adc">
            <h2>Add Courses</h2>
          </div>
          <form>
            <label htmlFor="coursename">Course name:</label>
            <input
              type="text"
              id="coursename"
              placeholder='Enter your Username'
              value={coursename}
              onChange={(e) => setCoursename(e.target.value)}
            />
            {/* <img src={user} alt='' className="absolute top-4 right-4 "></img> */}

            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              placeholder='Enter the duration'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />

            <label htmlFor="timimgs">Timings:</label>
            <input
              type="text"
              id="timimgs"
              placeholder='Enter the timimgs'
              value={timings}
              onChange={(e) => setTimings(e.target.value)}
            />

            <label htmlFor="mode">Mode:</label>
            <select
              id="mode"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="">Select mode</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>

            <label htmlFor="fees">Fees:</label>
            <input
              type="text"
              id="fees"
              placeholder='Enter the fees '
              required
              value={fee}
              onChange={(e) => setFee(e.target.value)}
            />
            <br></br>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
            <br></br>
            {/* <div className="new1">
          <p className="link-text1">
              <a href="/login">Back to login</a>
          </p>
          </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addcourse;
