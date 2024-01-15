import React from 'react';
import Image from "next/image";
import clienti from "../../../../../public/img/clienti/clienti.png";

export interface ProjectsSectionProps{
    
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({}) => {
    return(
        <>
            <div className="w-full bg-white">
                <div className="container flex flex-col py-20 mx-auto bg-white items-center">
                    <h1 className="font-light text-7xl md:text-[48px] text-[35px]">I nostri progetti</h1>
                    <hr className="w-full border border-black my-5"/>
                    <Image src={clienti} alt={"clienti"}/>
                </div>
            </div>
        </>
    )
}

export default ProjectsSection