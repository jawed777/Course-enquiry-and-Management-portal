// // Updatecourse.js
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import './Updatecourse.css'; // Import the CSS file for styling

// const Updatecourse = () => {
//   const [courses, setCourses] = useState([
//     { id: 1, coursename: 'React Basics', duration: '2 weeks', timings: 'Morning', mode: 'Online', fees: '$99' },
//     { id: 2, coursename: 'Node.js Fundamentals', duration: '4 weeks', timings: 'Evening', mode: 'Offline', fees: '$149' },
//     // Add more sample courses as needed
//   ]);

//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [editedCourse, setEditedCourse] = useState({});

//   const handleEditCourse = (course) => {
//     setSelectedCourse(course);
//     setEditedCourse({ ...course });
//   };

//   const handleUpdateCourse = () => {
//     const updatedCourses = courses.map(course =>
//       course.id === editedCourse.id ? { ...editedCourse } : course
//     );
//     setCourses(updatedCourses);
//     setSelectedCourse(null);
//   };

//   const handleDeleteCourse = (courseId) => {
//     const updatedCourses = courses.filter(course => course.id !== courseId);
//     setCourses(updatedCourses);
//     setSelectedCourse(null);
//   };

//   const handleCloseEdit = () => {
//     setSelectedCourse(null);
//   };

//   return (
//     <div>
//       <div className='bod-up'>
//         <h2>View Courses</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Course Name</th>
//               <th>Duration</th>
//               <th>Timings</th>
//               <th>Mode</th>
//               <th>Fees</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map(course => (
//               <tr key={course.id}>
//                 <td>{course.id}</td>
//                 <td>{course.coursename}</td>
//                 <td>{course.duration}</td>
//                 <td>{course.timings}</td>
//                 <td>{course.mode}</td>
//                 <td>{course.fees}</td>
//                 <td>
//                   <button type="button" onClick={() => handleEditCourse(course)}>
//                     Edit
//                   </button>
//                   <button type="button" onClick={() => handleDeleteCourse(course.id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Inline Edit Form */}
//       {selectedCourse && (
//         <div className="edit-overlay">
//           <div className="edit-form">
//             <h3>Edit Course</h3>
//             <label htmlFor="editedCoursename">Course Name:</label>
//             <input
//               type="text"
//               id="editedCoursename"
//               value={editedCourse.coursename}
//               onChange={(e) => setEditedCourse({ ...editedCourse, coursename: e.target.value })}
//             />

//             <label htmlFor="editedDuration">Duration:</label>
//             <input
//               type="text"
//               id="editedDuration"
//               value={editedCourse.duration}
//               onChange={(e) => setEditedCourse({ ...editedCourse, duration: e.target.value })}
//             />

//             <label htmlFor="editedTimings">Timings:</label>
//             <input
//               type="text"
//               id="editedTimings"
//               value={editedCourse.timings}
//               onChange={(e) => setEditedCourse({ ...editedCourse, timings: e.target.value })}
//             />

//             <label htmlFor="editedMode">Mode:</label>
//             <select
//               id="editedMode"
//               value={editedCourse.mode}
//               onChange={(e) => setEditedCourse({ ...editedCourse, mode: e.target.value })}
//             >
//               <option value="Online">Online</option>
//               <option value="Offline">Offline</option>
//             </select>

//             <label htmlFor="editedFees">Fees:</label>
//             <input
//               type="text"
//               id="editedFees"
//               value={editedCourse.fees}
//               onChange={(e) => setEditedCourse({ ...editedCourse, fees: e.target.value })}
//             />

//             <button type="button" onClick={handleUpdateCourse}>
//               Update
//             </button>
//             <button type="button" onClick={handleCloseEdit}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Updatecourse;


import { useState } from 'react';
import './Updatecourse.css';
import axios from 'axios';

const UpdateCourses = () => {
  const [coursename, setCourseName] = useState('');
  const [duration, setDuration] = useState('');
  const [timings, setTimings] = useState('');
  const [mode, setMode] = useState('');
  const [fee, setFee] = useState('');

  const handleUpdateCourse = async (e) => {
    e.preventDefault();

    try {
     

      const response = await axios.put(
        `http://localhost:8080/add/${coursename}`, // Updated endpoint with courseName as a parameter
        {
          coursename,
          duration,
          timings,
          mode,
          fee,
        },
       
      );
      

      // Handle successful response, if needed
      // console.log('Course updated successfully:', response.data);
      console.log("Course updated Successfully");
        console.log(response.data);
        window.alert("Successfully updated");

      // Clear the form fields after successful submission
      setCourseName('');
      setDuration('');
      setTimings('');
      setMode('');
      setFee('');
    } catch (error) {
      console.log("Failed");
      console.log(error);
    }
  };

  return (
    <div className='addimg'>
      <div className='movecourse'>
        <div className="add-course-container">
          <center><h2>Update Course</h2></center>
          <form onSubmit={handleUpdateCourse}>
            <label className="form-label">
              Course Name:</label>
              <input
                type="text"
                placeholder='Enter the coursename'
                value={coursename}
                onChange={(e) => setCourseName(e.target.value)}
                className="form-input"
              />
            
            <label className="form-label">
              Course Duration:</label>

              <input
                type="text"
                placeholder='Enter the course duration'
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="form-input"
              />
            
            <label className='form-label'>Timings:</label>
            <input
              type="text"
              id="timings"
              placeholder='Enter the timings'
              value={timings}
              onChange={(e) => setTimings(e.target.value)}
              className="form-input"
            />

            <label className='form-label'>Mode:</label>
            <select
              id="mode"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="form-input"
            >
              <option value="">Select mode</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>


            <label className="form-label">
              Course Fee:  </label>
              <input
                type="text"
                placeholder='Enter the fee'
                value={fee}
                onChange={(e) => setFee(e.target.value)}
                className="form-input"
              />
          
            <button type="submit" className="form-button">
              Update Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourses;