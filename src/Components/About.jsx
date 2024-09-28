// About.jsx

// eslint-disable-next-line no-unused-vars
// import React from 'react';
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './About.css';
// import Slider from './Slider';

const About = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    //   }, 3000); // Change slide every 3 seconds (adjust as needed)
  
    //   return () => clearInterval(interval);
    // }, []);
  
    // const images = [
    //   'https://placekitten.com/300/300',
    //   'https://placekitten.com/301/300',
    //   'https://placekitten.com/302/300',
    //   'https://placekitten.com/302/300',
    //   'https://placekitten.com/302/300',
    //   'https://placekitten.com/302/300'
    // ];
  return (
    <div className='bod-ab'>
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <p>
        Welcome to the EEC  COURSE ENQUIRY Portal, your premier destination for achieving proficiency and certification in British English. Developed with a commitment to excellence and linguistic precision, our platform is designed to empower individuals worldwide with the language skills needed to succeed in academic, professional, and personal contexts.
        </p>
        <p>
        H2B  reflects our dedication to delivering a high standard of Course Enquiry. Our certification process is meticulously crafted to assess language proficiency across various levels, ensuring that individuals can showcase their competence and communicate effectively in British English.
        </p>
        <p>
          <strong>Key Features:</strong>
        </p>
        <ul>
          <strong>Comprehensive Content:</strong> Our certification exams cover all aspects of the English language, including reading, writing, listening, and speaking. The comprehensive nature of our assessments guarantees a thorough evaluation of language skills, providing a well-rounded certification.<br></br>
          <strong>Engaging Learning Experience:</strong> Immerse yourself in dynamic and interactive learning materials, including videos, quizzes, and real-world projects.<br></br>
          <strong>Industry-Standard Recognition:</strong>
          H2B certifications are widely recognized and respected in academic and professional circles. Employers, educational institutions, and organizations globally acknowledge the value of our certifications, making them a valuable asset for career advancement and educational pursuits.<br></br>
          <strong>Global Community:</strong> Connect with learners from around the world, share experiences, and collaborate on projects to enhance your learning journey.<br></br>
          <strong>Personalized Learning Paths:</strong>
           Understanding that every individual learns differently, H2B provides personalized learning paths to cater to diverse learning styles. Whether you are a beginner or an advanced learner, our platform adapts to your needs, ensuring an effective and tailored language-learning experience.<br></br>
          <strong>Career Support:</strong> Gain access to career services, job placement assistance, and networking opportunities to boost your professional growth.
        </ul>
        <p>
        <strong> Our Vision:</strong>
        </p>
        <p>
          At EEC, we envision a world where education transcends boundaries, and everyone has the opportunity to unlock their full potential. We are driven by the belief that learning is a lifelong journey, and our platform is designed to support you at every step of that journey.
        </p>
        <p>
        Join us at the EEC Course Enquiry Portal and embark on a journey towards linguistic excellence. Elevate your language skills, broaden your opportunities, and showcase your proficiency in British English with a certification that opens doors to a world of possibilities.
        </p>
      </div>

      {/* <div className="photo-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className={`grid-item ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
          </div> */}

          
      <div className="photo-grid">
          <img className='grid-item' src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder 1" />
          <img className='grid-item' src="https://images.pexels.com/photos/1184580/pexels-photo-1184580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder 2" />
          <img className='grid-item' src="https://images.pexels.com/photos/8093032/pexels-photo-8093032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder 3" />
        </div>
      
        {/* <img className='img' src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
      
    </div>
    </div>
  );
};

export default About;
