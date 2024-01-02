import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselItemTwo from './CarouselItemTwo';
import './ReviewsCarousel.css'

const ReviewCarousel = ({ reviews }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="reviews">
      <Slider {...settings}>
        {reviews.map((ReviewComponent, index) => (
          <div key={index}>
            <CarouselItemTwo ReviewComponent={ReviewComponent} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;

const widthStyle = {
    width: '80%',
    margin: '0 auto',
}
export const ReviewOne = () =>{
    return(
        <div>
            <p>
            I am proud to say that after a few months of taking 
            this course...<b>I passed my exam and am now an AWS Certified
            Cloud Practitioner!</b> This content was exactly what the CCP 
            exam covered.
            </p>
            <h4>- Person A</h4>
            <hr style={widthStyle}/>
            <a href="#review1">Video XYZ for AWS</a>
        </div>
    );
};
export const ReviewTwo = () =>{
    return(
        <div>
            <p>
            This course helped me freshen up on my product manager
            skills and land a job at Facebook! Thanks guys 
            </p>
            <h4>- Person B</h4>
            <hr style={widthStyle}/>
            <a href="#review2">Video XYZ for Product Manager</a>
        </div>
    );
};
export const ReviewThree = () =>{
    return(
        <div>
            <p>
            One of the best courses on management and leadership I have
            come across so far. The advice is practical, and examples 
            highly relatable. Would help anyone become a better 
            manager.
            </p>
            <h4>- Person c</h4>
            <hr style={widthStyle}/>
            <a href="#review2">Video XYZ for Practical Leadership</a>
        </div>
    );
};
export const ReviewFour = () =>{
    return(
        <div>
            <p>
                I highly recommend this course for all budding data 
                scientists. Even people with no prior knowledge of 
                any visualization tools can become a master after 
                completing this course.
            </p>
            <h4>- Person D</h4>
            <hr style={widthStyle}/>
            <a href="#review2">Video XYZ for Data Science</a>
        </div>
    );
};

