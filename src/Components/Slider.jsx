import { useState, useEffect } from 'react';
import './Slider.css'
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlides = () => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    setSlideIndex((prevIndex) => (prevIndex >= slides.length - 1 ? 0 : prevIndex + 1));
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
  };

  useEffect(() => {
    const interval = setInterval(showSlides, 4000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 5</div>
          <img src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ width: '80%',height:'50vh' }} />
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 5</div>
          <img src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ width: '80%', height:'50vh' }} />
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 5</div>
          <img src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ width: '80%', height:'50vh' }} />
        </div>

        <div className="mySlides fade">
          <div className="numbertext">4 / 5</div>
          <img src="https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ width: '80%', height:'50vh' }} />
        </div>
        
        <div className="mySlides fade">
          <div className="numbertext">5 / 5</div>
          <img src="https://images.pexels.com/photos/1122865/pexels-photo-1122865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ width: '80%', height:'50vh' }} />
        </div>
        {/* <span className="dot" onClick="currentSlide(1)"></span> 
        <span className="dot" onClick="currentSlide(2)"></span> 
        <span className="dot" onClick="currentSlide(3)"></span>  */}
      </div>
    </>
  );
};

export default Slider;

