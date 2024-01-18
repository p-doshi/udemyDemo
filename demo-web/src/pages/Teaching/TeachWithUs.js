import React from "react";
import { Button, useTheme} from '@mui/material';
import './TeachWithUs.css';
import image1 from "../../media/HeroSectionCarouselImg1.jpeg"
import { Link } from "react-router-dom";

const TeachPage = () =>{
    const theme = useTheme()
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const linkStyle = {
        color: dark,
        textDecoration: 'none',
        margin: '0px 0px 0px 20px'
    }  
    const students = "62M"
    const languages = "75+"
    const enrollments = "830M"
    const countries = "180+"
    const customers = "15000+"
    return(
        <div className="teachcontainer">
            <div className="imagecontainer">
                <img src={image1}/>
                <div className="text">
                    <h2>Come teach with us</h2>
                    <h5>Become an instructor and change lives — including your own</h5>
                    <Button style={{border: '2px solid #000', backgroundColor: dark, width: '20%'}}>
                    <Link to="pages/TeachWithUs" style={{textDecoration: 'none', color: neutralLight}}>
                      <b>Get Started</b>
                    </Link>
                  </Button>
                </div>
            </div>
            <div className="reasonsbox">
                <h1>So many reasons to start</h1>
                <div className="startreason">
                    <div className="reasons">
                        <h3><b>Teach your ways</b></h3>
                        <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
                    </div>
                    <div className="reasons">
                        <h3><b>Inspire learners</b></h3>
                        <p>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
                    </div>
                    <div className="reasons">
                        <h3><b>Get rewarded</b></h3>
                        <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
                    </div>
                </div>
            </div>
            <div className="stats">
                <div className="allstats">
                    <h3><b>{students}</b></h3>
                    <p>Students</p>
                </div>
                <div className="allstats">
                    <h3><b>{languages}</b></h3>
                    <p>Languages</p>
                </div>
                <div className="allstats">
                    <h3><b>{enrollments}</b></h3>
                    <p>Enrollments</p>
                </div>
                <div className="allstats">
                    <h3><b>{countries}</b></h3>
                    <p>Countries</p>
                </div>
                <div className="allstats">
                    <h3><b>{customers}</b></h3>
                    <p>Enterprise customers</p>
                </div>
            </div>
        </div>
    );
};
export default TeachPage;