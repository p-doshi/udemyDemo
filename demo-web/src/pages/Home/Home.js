import React, { useState } from 'react'
import  {Python,Excel,WebDevelopment,JavaScript,DataScience,AmazonAWS} from '../TopCourses/TopCourses.js'
import { Carousel } from 'components/CarouselHeroSection/Carousel.js';
import './Home.css'
import ReviewCarousel from 'pages/Carousel/ReviewsCarousel.js';
import { Button, useTheme} from '@mui/material';

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

        const theme = useTheme()
        const neutralLight = theme.palette.neutral.light;
        const dark = theme.palette.neutral.dark;
        const linkStyle = {
          color: dark,
          textDecoration: 'none',
          margin: '0px 0px 0px 20px'
        }  

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
              <ReviewCarousel/>
              <br/>
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
              <br/><br/>
            </div>
            <br/><br/>
            <div className='start-teaching'>
                <h2>Become an instructor</h2>
                <p>Instructors from around the world teach millions 
                  of learners on Udemy. We provide the tools and skills 
                  to teach what you love. </p>
                  <Button style={{border: '2px solid #000', backgroundColor: dark, width: '20%'}}>
                    <a href="./../TeachWithUs" style={{textDecoration: 'none', color: neutralLight}}>
                      <b>Start teaching today</b>
                    </a>
                  </Button>
                  <br/><br/>
            </div>
            <br/>
            <div className='footer' style={{backgroundColor:dark}}>
                <table className='footertable'>
                  <td>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Udemy Business</a></tr>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Teach on Udemy</a></tr>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Get the app</a></tr>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>About Us</a></tr>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Contact us</a></tr>
                  </td>
                  <td>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Careers</a></tr>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Blog</a></tr>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Help and Support</a></tr>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Affiliate</a></tr>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Investors</a></tr>
                  </td>
                  <td>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Terms</a></tr>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Privacy Policy</a></tr>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Cookie settings</a></tr>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Sitemap</a></tr>
                    <tr><a href='#' style={{textDecoration: 'none', color: neutralLight}}>Accessibility statement</a></tr>
                  </td>
                  <td>
                    <tr aria-colspan={5} className='languages' style={{color:neutralLight}}>Language</tr>
                  </td>
                </table>
                <br/>
                <a href="#home" style={linkStyle}>
                  <img src='/assets/udemyLogo.png' alt='logo' height={'10%'} width={'10%'}/>
                </a>
            </div>
        </div>
    </>
    );
};

export default Homepage;