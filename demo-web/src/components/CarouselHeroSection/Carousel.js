import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import { IoIosRadioButtonOn } from "react-icons/io";
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useTheme } from "@mui/material";
import image1 from "../../media/HeroSectionCarouselImg1.jpeg"
import image2 from "../../media/HeroSectionCarouselImg2.jpeg"
import image3 from "../../media/HeroSectionCarouselImg3.jpeg"

import './Carousel.css'


export const Carousel = () => {
    const theme = useTheme()
    const light = theme.palette.neutral.medium;
    const dark = theme.palette.neutral.dark;

    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            description: 'Learning that gets you skills for present and the future',
            icon: image1
        },
        {
            description: 'Learning that gets you skills for present and the future',
            icon: image2
        },
        {
            description: 'Learning that gets you skills for present and the future',
            icon: image3
        },
    ];
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }

        setActiveIndex(newIndex);
    };

    return (
        <div className="carousel">
            <div
                className="inner"
                style={{ transform: `translate(-${activeIndex * 100}%)`
            }}
            >
                {items.map((item) => {
                return <CarouselItem item={item} width={"100%"} />;
                })}
            </div>

            <div className="carousel-buttons">
                <button
                className="button-arrow"
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}
                >
                    <span><FaRegArrowAltCircleLeft className="material-symbols-outlined" color={dark}/></span>
                </button>
                <div className="indicators">
                {items.map((item, index) => {
                    return (
                    <button
                        className="indicator-buttons"
                        onClick={() => {
                        updateIndex(index);
                        }}
                    >
                        <span
                            style={{color: index === activeIndex ? dark : light}}
                        >
                            <IoIosRadioButtonOn  className="material-symbols-outlined"/>
                        </span>
                    </button>
                    );
                })}
                </div>
                <button
                className="button-arrow"
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}
                >
                    <span ><FaRegArrowAltCircleRight className="material-symbols-outlined" color={dark}/></span>
                </button>
            </div>
        </div>
    );
};