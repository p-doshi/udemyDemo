import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselItemTwo from './CarouselItemTwo';
import './ReviewsCarousel.css'

class ReviewCarousel extends React. Component {
  render(){
  const settings = {
    showArrows: true,
    showStatus: false,
    showThumbs: false,
    dynamicHeight: false, // Adjust this based on your image sizes
    emulateTouch: true,
    useKeyboardArrows: true,
    centerMode: true,
    centerSlidePercentage: 33.3,
    showIndicators: false,
  };

  const widthStyle = {
    width: '80%',
    margin: '0 auto',
}

    return(
      <Carousel {...settings}>
        <div className='review'>
            <p>
            I am proud to say that after a few months of taking 
            this course...<b>I passed my exam and am now an AWS Certified
            Cloud Practitioner!</b> This content was exactly what the CCP 
            exam covered.
            </p>
            <h4>- Person A</h4>
            <hr style={widthStyle}/><br/>
            <a href="#review1">Video XYZ for AWS</a>
        </div>
        
        <div className='review'>
            <p>
            This course helped me freshen up on my product manager
            skills and land a job at Facebook! Thanks guys 
            </p>
            <br/>
            <h4>- Person B</h4>
            <hr style={widthStyle}/><br/>
            <a href="#review2">Video XYZ for Product Manager</a>
        </div>
        <div className='review'>
            <p>
            One of the best courses on management and leadership I have
            come across so far. The advice is practical, and examples 
            highly relatable. Would help anyone become a better 
            manager.
            </p>
            <h4>- Person c</h4>
            <hr style={widthStyle}/><br/>
            <a href="#review2">Video XYZ for Practical Leadership</a>
        </div>
        <div className='review'>
            <p>
                I highly recommend this course for all budding data 
                scientists. Even people with no prior knowledge of 
                any visualization tools can become a master after 
                completing this course.
            </p>
            <h4>- Person D</h4>
            <hr style={widthStyle}/><br/>
            <a href="#review2">Video XYZ for Data Science</a>
        </div>
        </Carousel>
  );
    }
};

export default ReviewCarousel;