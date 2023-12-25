import React, { useState } from 'react'
import './../App.css';


const Homepage = () =>{

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
            <div>

            </div>
        </div>
    </>
    );
};
let slideIndex = 1;
    showSlides(slideIndex);


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll('.mySlides');
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 5000);
        
    }
export default Homepage;