import React from "react";
import { Button, useTheme} from '@mui/material';
import './TeachWithUs.css';
import image1 from "../media/HeroSectionCarouselImg1.jpeg"

const TeachPage = () =>{
    return(
        <div className="teachcontainer">
            <div className="imagecontainer">
                <img src={image1}/>
                <div className="text"></div>
            </div>
        </div>
    );
};
export default TeachPage;