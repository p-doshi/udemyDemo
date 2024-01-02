import React, { useState } from 'react'
import  {Python,Excel,WebDevelopment,JavaScript,DataScience,AmazonAWS} from '../TopCourses/TopCourses.js'
import { Carousel } from 'components/CarouselHeroSection/Carousel.js';
import './Home.css'
import ReviewCarousel,{ ReviewOne, ReviewTwo, ReviewThree, ReviewFour } from 'pages/Carousel/ReviewsCarousel.js';
import { Button, useTheme, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { setMode } from 'state';
import { light } from '@mui/material/styles/createPalette';

const Homepage = () =>{
    
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

        const reviews = [ReviewOne, ReviewTwo, ReviewThree, ReviewFour];
        const user = useSelector((state) => state.user);

        const theme = useTheme()
        const neutralLight = theme.palette.neutral.light;
        const dark = theme.palette.neutral.dark;
        return(
        <>
            <div className='outerbox' >
              <div className='maincarousel'>
                <Carousel />
              </div>
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
              <h2>Top Categories</h2>
              <div className='recommendoptions'>
                <div className='popout'><a href=''>Design</a></div>
                <div className='popout'><a href=''>Development</a></div>
                <div className='popout'><a href=''>Marketing</a></div>
                <div className='popout'><a href=''>IT and Software</a></div>
                <div className='popout'><a href=''>Personal Development</a></div>
                <div className='popout'><a href=''>Business</a></div>
                <div className='popout'><a href=''>Photography</a></div>
                <div className='popout'><a href=''>Music</a></div>
              </div>

            </div>
            <br/>
            <div className='start-teaching'>
                <h2>Become an instructor</h2>
                <h4>Instructors from around the world teach millions 
                  of learners on Udemy. We provide the tools and skills 
                  to teach what you love. </h4>
                  <Button style={{border: '2px solid #000', backgroundColor: dark, width: '70%'}}>
                    <a href="#teachtoday" style={{textDecoration: 'none', color: neutralLight}}>
                      Start teaching today
                    </a>
                  </Button>
            </div>
            <br/>
            <div className='footer'>

            </div>
        </div>
    </>
    );
};

export default Homepage;