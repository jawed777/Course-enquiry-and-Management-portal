// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
 import './DeleteCourses.css';
import axios from 'axios' // Import the CSS file

// Import necessary modules and components

const DeleteCourse = () => {
    const [coursename, setCourseName] = useState('');
  
    const handleDeleteCourse = async (e) => {
      e.preventDefault();
  
      try {
        
  
        const response = await axios.delete(
          `http://localhost:8080/add/${coursename}`, // Updated endpoint with courseName as a parameter
          
        );
  
        // Handle successful response, if needed
        // console.log('Course deleted successfully:', response.data);
        console.log("Details deleted Successfully");
        console.log(response.data);
        window.alert("Successfully deleted");
  
  
        // Clear the form fields after successful submission
        setCourseName('');
      } catch (error) {
        console.log("Failed");
        console.log(error);
      }
    };
  
    return (
      <div className='addimg-d'>
        <div className='movecourse-d'>
          <div className="add-course-container-d">
            <center><h2>Delete Course</h2></center>
            <form onSubmit={handleDeleteCourse}>
              <label className="form-label-d">
                Course Name:</label>
                <input
                  type="text"
                  placeholder='Enter the course name'
                  value={coursename}
                  onChange={(e) => setCourseName(e.target.value)}
                  className="form-input-d"
                />
                <br></br>
              
              <button type="submit" className="form-button-d">
                Delete Course
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default DeleteCourse;