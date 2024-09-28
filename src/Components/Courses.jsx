// // eslint-disable-next-line no-unused-vars
// import React from 'react'
// import './Courses.css';

// export default function Courses() {
//   return (
//     <div className='course-page'>
//         <div>
//         <div className="ev">
//           <h2>COURSES AVAILABLE </h2>
//           </div>
//         <div className="event__section">
//           <div className="event__card">
//             <p>Foundations of British Literature</p>
//             <p>January 28 | 7PM</p>
//             <p>Online</p>
//             <p>₹699</p>
//             <button>    ENROLL</button>
//           </div>
//           <div className="event__card">
//             <p>Advanced English Grammar and Composition</p>
//             <p>Video on Demand</p>
//             <p>Watch on Insider</p>
//             <p>₹497</p>
//             <button> ENROLL</button>
//           </div>
//           <div className="event__card">
//             <p>Professional Business English Communication</p>
//             <p>January 1 | 10PM - January 29 | 11PM</p>
//             <p>Online</p>
//             <p>FREE</p>
//             <button> ENROLL</button>
//           </div>

//           <div className="event__card">
//             <p>Certificate in Academic Writing and Research Skills</p>
//             <p>January 1 | 12PM - January 29 | 1PM</p>
//             <p>Online</p>
//             <p>FREE</p>
//             <button> ENROLL</button>
//           </div>
//           <div className="event__card">
//             <p>Introduction to British Political Systems</p>
//             <p>March 1 | 10PM - March 29 | 11PM</p>
//             <p>Online</p>
//             <p>FREE</p>
//             <button> ENROLL</button>
//           </div>

//           <div className="event__card">
//             <p>British English Pronunciation Mastery</p>
//             <p>March 1 | 10PM - March 23 | 11PM</p>
//             <p>Online</p>
//             <p>FREE</p>
//             <button>ENROLL</button>
//           </div>

         

//          </div>
          
        
// </div>

//     </div>
//   )
// }


import  { useState, useEffect } from 'react';
import axios from 'axios';
import './Courses.css'

const View = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
  
      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }
  
      const response = await axios.get('http://localhost:8080/add', {
        headers: {
          Authorization: `Bearer ${token}`,  // Wrap in backticks
        },
      });
  
      console.log('Fetched data:', response.data);
  
      // Update the state with the fetched data
      setServicesData(response.data);
    } catch (error) {
      console.error('Fetching data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };
  
  return (
    <div className='adminback'>
      <div className='viewback'>
        <div className="views">
          <section id="view">
            <center>
              <h2 className='h2ad'>View Courses</h2>
            </center>
            <table className='admintable'>
              <thead>
                <tr>
                  <th>Coursename</th>
                  <th>Duration</th>
                  <th>Timings</th>
                  <th>Mode</th>
                  <th>Fee</th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service, index) => (
                  <tr key={index}>
                    <td>{service.coursename}</td>
                    <td>{service.duration}</td>
                    <td>{service.timings}</td>
                    <td>{service.mode}</td>
                    <td>{service.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default View;