import React, { useState } from 'react'
import './../App.css';
import  {Python,Excel,WebDevelopment,JavaScript,DataScience,AmazonAWS} from './Topcourses'

const Homepage = () =>{

  let slideIndex = 1;

  setTimeout(() => {
    showSlides(slideIndex);
  }, 0);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll('.dot');

    if (!slides.length || !dots.length) {
      console.error('No slides or dots found');
      return;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 5000);
    }
   
    const topics = [
        { heading: 'Python', contentComponent: <Python/>},
        { heading: 'Excel', contentComponent: <Excel/>},
        { heading: 'WebDevelopment', contentComponent: <WebDevelopment/>},
        { heading: 'JavaScript', contentComponent: <JavaScript/> },
        { heading: 'DataScience', contentComponent: <DataScience/>},
        { heading: 'AmazonAWS', contentComponent: <AmazonAWS/>},
        
      ];
    
      const [currentTopic, setCurrentTopic] = useState(topics[0]);
    
      const handleHeadingClick = (topic) => {
        setCurrentTopic(topic);
      };
     
    return(
    <>
        <div className='outerbox'>
            <div className='slideshow'>
        
              <div className='slideshow-container'>
                <div className='mySlides fade'>
                    <div className='numbertext'>1 / 3</div>
                    <img src='/image1.png' style={{ width: '100%', height: '400px'}}/>
                    <div className='text'>Caption Text</div>
                </div>

                <div className='mySlides fade'>
                    <div className='numbertext'>2 / 3</div>
                    <img src='/image2.png' style={{ width: '100%', height: '400px' }}/>
                    <div className='text'>Caption Two</div>
                </div>

                <div className='mySlides fade'>
                    <div className='numbertext'>3 / 3</div>
                    <img src='/image3.jpg' style={{ width: '100%', height: '400px' }}/>
                    <div className='text'>Caption Three</div>
                </div>

              
                <a className='prev' onClick={() =>plusSlides(-1)}>&#10094;</a>
                <a className='next' onClick={() =>plusSlides(1)}>&#10095;</a>
              </div>
              <br/>
 
              <div style={{textAlign: 'center'}}>
                <span className='dot' onClick={() =>currentSlide(1)}></span>
                <span className='dot' onClick={() =>currentSlide(2)}></span>
                <span className='dot' onClick={() =>currentSlide(3)}></span>
              </div>
            </div>
            <br/>
            
            <div className='topcourses'>
                <h2>A broad selection of courses</h2>
                    <p>Choose from over XXXXXX online video courses with new 
                        addditions published every month

                    </p>
                <br/>
                <nav className='mininav'>
                    {topics.map((topic, index) => (
                    <div 
                        key={index} 
                        className={`${topic.heading.toLowerCase()} ${currentTopic.heading === topic.heading ? 'bold' : ''}`}
                        onClick={() => handleHeadingClick(topic)}
                        >
                        {topic.heading}
                    </div>
                    ))}
                </nav>
                <div className='topicoption'>
                    {currentTopic ? (
                    <div>
                        {currentTopic.contentComponent}
                    </div>
                    ) : (
                    <p>Select a topic from the navigation to view the content.</p>
                    )}
                </div>
            </div>
            <br/>
            <div className='reviews'>
                <h2>How learners like you are achieving their goals</h2>
            </div>
            <br/>
            <div className='recommendation'>

            </div>
            <br/>
            <div className='start-teaching'>

            </div>
            <br/>
            <div className='footer'>

            </div>
        </div>
    </>
    );
};

export default Homepage;