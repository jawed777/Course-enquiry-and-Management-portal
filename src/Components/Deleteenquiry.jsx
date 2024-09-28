// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Deleteenquiry.css';
import axios from 'axios' // Import the CSS file

// Import necessary modules and components

const Deleteenquiry = () => {
    const [name, setName] = useState('');
  
    const handleDeleteCourse = async (e) => {
      e.preventDefault();
  
      try {
        
  
        const response = await axios.delete(
          `http://localhost:8080/enquiry/${name}`, // Updated endpoint with courseName as a parameter
          
        );
  
        // Handle successful response, if needed
        // console.log('Course deleted successfully:', response.data);
        console.log("Details deleted Successfully");
        console.log(response.data);
        window.alert("Successfully deleted");
  
        // Clear the form fields after successful submission
        setName('');
      } catch (error) {
        console.log("Failed");
      console.log(error);
      }
    };
  
    return (
      <div className='addimg-de'>
        <div className='movecourse-de'>
          <div className="add-course-container-de">
           <center> <h2>Delete Enquiry</h2></center>
            <form onSubmit={handleDeleteCourse}>
              <label className="form-label-de">
                 Name: </label>
                <input
                  type="text"
                  placeholder='Enter the name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input-de"
                />
             <br></br>
              <button type="submit" className="form-button-de">
                Delete Course
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Deleteenquiry;