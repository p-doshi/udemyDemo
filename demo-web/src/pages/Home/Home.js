import React, { useState } from 'react'
import  {Python,Excel,WebDevelopment,JavaScript,DataScience,AmazonAWS} from '../TopCourses/TopCourses.js'
import './Home.css'

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
        
        return(
        <>
            <div className='outerbox'>
                
            
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