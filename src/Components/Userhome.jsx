// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Userhome.css'; // Make sure to replace 'YourComponent' with the actual name of your React component


// Create a functional component
const Userhome = () => {
  return (
    <div>
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">EEC</a>
          </div>
          <div className='items'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><Link to="/about">About</Link></li>
            {/* <li><Link to="/Courses">Courses</Link></li> */}

            <li className="dropdown">
                <a className="dropbtn">Courses</a>
                <div className="dropdown-content">
                  <Link to="/Courses">Courses</Link>
                  {/* <Link to="/enrolledcourse">Enrolled courses</Link> */}
                  {/* Add more links as needed */}
                </div>
              </li>


            {/* <li><Link to="/enquiry">Enquiry</Link></li> */}
            <li className="dropdown">
                <a className="dropbtn">Enquiry</a>
                <div className="dropdown-content">
                  <Link to="/enquiry">Add Enquiry</Link>
                  {/* <Link to="/viewenquiry">view Enquiry</Link> */}
                  <Link to="/Deleteenquiry">Delete Enquiry</Link>
                  {/* Add more links as needed */}
                </div>
              </li>
            {/* <li><a href="#">Feedback</a></li> */}
            <li className="dropdown-logout">
                <a className="dropbtn-logout">Profile</a>
                <div className="dropdown-content-logout">
                  <Link to="/">Logout</Link>
                  
                  {/* Add more links as needed */}
                </div>
              </li>
            {/* <li><a><Link to="/Login">Login</Link></a></li> */}
          </ul>
          </div>
        </div>
      </nav>
      <div className="imgbg-uh">
        <div className="overlay"></div>
      </div>
      <div className="center">
        <div className="title">An educated mind is better</div>
        <div className="sub_title"> than an empty one</div>
        <div className="btns">
          <Link to="/about"><button>Learn More</button></Link>
          <button>Subscribe</button>
        </div>


        {/* <footer>
        <div className="footer-content">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer> */}

<footer>
       
        <div className="footer-info">
          <p>&copy; 2024 EEC. All rights reserved.</p>
          <p>Email: EECinfo@gmail.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Userhome;