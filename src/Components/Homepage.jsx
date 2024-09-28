import { Link } from 'react-router-dom';
import './Homepage.css'; // Make sure to replace 'YourComponent' with the actual name of your React component


// Create a functional component
const Homepage = () => {
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
            {/* <li><a href="#">Courses</a></li> */}
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a><Link to="/Login">Login</Link></a></li>
          </ul>
          </div>
        </div>
      </nav>
      <div className="imgbg-hm">
        <div className="overlay"></div>
      </div>
      <div className="center">
        <div className="title">An educated mind is better</div>
        <div className="sub_title"> than an empty one</div>
        <div className="btns">
        <Link to="/about"> <button>Learn More</button></Link>
         <Link to="/subs" ><button>Subscribe</button></Link>
        </div>


        {/* <footer>
        <div className="footer-content">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer> */}

<footer>
       
        <div className="footer-info">
          <p>&copy; 2024 EEC. All rights reserved.</p>
          <p>Email: EECRinfo@gmail.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Homepage;