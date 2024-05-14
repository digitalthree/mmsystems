import React, {useEffect, useState} from 'react';
import MyCarousel from "@/app/components/carousel/MyCarousel";
import {MdKeyboardArrowRight} from "react-icons/md";
import Link from "next/link";
import {Img} from "@/data/images";
import {fetchImages} from "@/pages/api/gallery";
export interface ProjectsSectionProps{
    
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({}) => {
    const [images, setImages] = useState<Img[]>([])
    useEffect(() => {
        fetchImages().then(res => {
            setImages(res)
        })
    }, []);
    return(
        <>
            <div className="w-full bg-white pt-20">
                <MyCarousel images={images}/>
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