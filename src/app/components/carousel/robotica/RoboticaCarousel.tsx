"use client"
import React, {useState} from 'react';
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";
import Image from "next/image";
import image1 from "@public/img/carousel/image1.jpg";
import image2 from "@public/img/carousel/image2.jpg";
import image3 from "@public/img/carousel/image3.jpg";
import image4 from "@public/img/carousel/image4.jpg";

import { Carousel } from 'react-responsive-carousel';
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";

export interface RoboticaCarouselProps{}

const RoboticaCarousel: React.FC<RoboticaCarouselProps> = ({}) => {
    const windowInnerWidth = useWindowInnerWidth()
    return(
        <>
            <Carousel
                showArrows showIndicators={false} showStatus={false} showThumbs={false}
                className="relative z-50"
                centerMode={windowInnerWidth > 1300}
                infiniteLoop={true}
                centerSlidePercentage={25}
                selectedItem={1}
                renderArrowPrev={(clickHandler, hasNext) => {
                    return (
                        <>
                            {hasNext && <div className="absolute top-1/2 left-4 z-30 p-2 rounded-full bg-white" onClick={clickHandler}>
                                <RiArrowLeftSLine color="#264193" size="25px"/>
                            </div>
                            }
                        </>

                    )
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                    return (
                        <>
                            {hasNext && <div className="absolute top-1/2 right-4 z-30 p-2 rounded-full bg-white hover:cursor-pointer" onClick={clickHandler}>
                                <RiArrowRightSLine color="#264193" size="25px"/>
                            </div>
                            }
                        </>

                    )
                }}
            >
                <div className="relative sm:mr-2 grayscale transition duration-700 hover:grayscale-0">
                    <Image src={image1} alt="assets/1.jpeg" className="w-full"/>
                   
                </div>
                <div className="relative sm:mr-2 grayscale transition duration-700 hover:grayscale-0">
                    <Image src={image2} alt="assets/2.jpeg" className="w-full"/>
                   
                </div>
                <div className="relative sm:mr-2 grayscale transition duration-700 hover:grayscale-0">
                    <Image src={image3} alt="assets/3.jpeg" className="w-full"/>
                   
                </div>
                <div className="relative sm:mr-2 grayscale transition duration-700 hover:grayscale-0">
                    <Image src={image4} alt="assets/4.jpeg" className="w-full"/>
                   
                </div>
                
            </Carousel>
        </>
    )
}

export default RoboticaCarousel