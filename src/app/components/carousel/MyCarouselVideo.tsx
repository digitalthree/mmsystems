"use client"
import React, {useEffect, useState} from 'react';
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";
import {fetchImages} from "@/pages/api/gallery";
import {Img, Video} from "@/data/images";
import {fetchVideos} from "@/pages/api/videos";
import YouTube from "react-youtube";

export interface MyCarouselProps{

}

const MyCarousel: React.FC<MyCarouselProps> = ({}) => {
    const windowInnerWidth = useWindowInnerWidth()
    const [videos, setVideos] = useState<Video[]>([])
    useEffect(() => {
        fetchVideos().then(res => {
            setVideos(res)
        })
    }, []);
    return(
        <>
            <Carousel
                showArrows showIndicators={false} showStatus={false} showThumbs={false}
                className="relative z-50 px-10 xl:px-0"
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
                {videos.map((video) => {
                    return(
                        <div className="sm:mr-1 bg-black rounded-2xl" key={video.id}>
                            <YouTube videoId={video.srcKey}/>
                        </div>
                    )
                })}

                {/*<div className="relative sm:mr-2">
                    <Image src={image2} alt="assets/1.jpeg" className="w-full"/>
                    <div className="w-full bg-[#2A60E9] h-[600px] opacity-40 absolute top-0 left-0 bottom-0 right-0 z-50"/>
                </div>
                <div className="relative sm:mr-2">
                    <Image src={image3} alt="assets/1.jpeg" className="w-full"/>
                    <div className="w-full bg-[#2A60E9] h-[600px] opacity-40 absolute top-0 left-0 bottom-0 right-0 z-50"/>
                </div>
                <div className="relative sm:mr-2">
                    <Image src={image2} alt="assets/1.jpeg" className="w-full"/>
                    <div className="w-full bg-[#2A60E9] h-[600px] opacity-40 absolute top-0 left-0 bottom-0 right-0 z-50"/>
                </div>*/}
            </Carousel>
        </>
    )
}

export default MyCarousel