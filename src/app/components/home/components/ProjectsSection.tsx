import React from 'react';
import Image from "next/image";
import clienti from "../../../../../public/img/clienti/clienti.png";
import { Carousel } from 'react-responsive-carousel';
import image from "../../../../../public/img/img1.png"
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";
import MyCarousel from "@/app/components/carousel/MyCarousel";
import {MdKeyboardArrowRight} from "react-icons/md";
import Link from "next/link";
export interface ProjectsSectionProps{
    
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({}) => {
    return(
        <>
            <div className="w-full bg-white">
                <div className="container flex flex-col py-20 mx-auto xl:px-0 px-10 bg-white items-center">
                    <h1 className="font-semibold uppercase xl:text-7xl md:text-[48px] text-[35px]">I nostri progetti</h1>
                    <hr className="w-full border border-black my-5"/>
                </div>
                <MyCarousel/>
                <div className="container flex flex-col py-20 mx-auto bg-white items-center">
                    <Link href="galleria" className="py-1 xl:py-2 px-2 text-white rounded-[100px] bg-primary flex justify-between items-center xl:gap-1">
                        <span className="px-5">Sfoglia la Gallery</span>
                        <div className="p-2 rounded-3xl bg-white">
                            <MdKeyboardArrowRight className="text-primary xl:w-7 xl:h-7 w-5 h-5"/>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProjectsSection