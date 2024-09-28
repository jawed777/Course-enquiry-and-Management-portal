// // EnquiryListPage.js

// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import './Viewenquiry.css'; // Import the CSS file

// const Viewenquiry = () => {
//   const [enquiries, setEnquiries] = useState([
//     { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Interested in your services.', courseName: 'Advanced English Grammar and Composition' },
//     { id: 2, name: 'John Doe', email: 'john@example.com', message: 'Need more information.', courseName: 'Professional Business English Communication' },
//     // Add more sample data as needed
//   ]);

//   const handleDelete = (enquiryId) => {
//     // Filter out the enquiry with the specified ID
//     const updatedEnquiries = enquiries.filter(enquiry => enquiry.id !== enquiryId);
//     setEnquiries(updatedEnquiries);
//   };

//   return (
//     <div>
//         <div className='bod-enq'>
//       <h2>Enquiry List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Message</th>
//             <th>Course Name</th> {/* New column for Course Name */}
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {enquiries.map(enquiry => (
//             <tr key={enquiry.id}>
//               <td>{enquiry.id}</td>
//               <td>{enquiry.name}</td>
//               <td>{enquiry.email}</td>
//               <td>{enquiry.message}</td>
//               <td>{enquiry.courseName}</td> {/* Display Course Name */}
//               <td>
//                 <button className="delete-button" onClick={() => handleDelete(enquiry.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//   );
// };

// export default Viewenquiry;


import  { useState, useEffect } from 'react';
import axios from 'axios';
import './Viewenquiry.css'

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
  
      const response = await axios.get('http://localhost:8080/enquiry', {
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
              <h2 className='h2ad'>View Enquiry</h2>
            </center>
            <table className='admintable'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Course Name</th>
                  <th>Message</th>
                  
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service, index) => (
                  <tr key={index}>
                    <td>{service.name}</td>
                    <td>{service.email}</td>
                    <td>{service.course}</td>
                    <td>{service.message}</td>
                  
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