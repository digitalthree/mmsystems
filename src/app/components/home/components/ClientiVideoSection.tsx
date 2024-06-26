import Video from "next-video";
import React from 'react';
import Image from "next/image";
import clienti from "../../../../../public/img/clienti/clienti.png";
import MyCarouselVideo from "@/app/components/carousel/MyCarouselVideo";

export interface ClientiVideoSectionProps{
    
}

const ClientiVideoSection: React.FC<ClientiVideoSectionProps> = ({}) => {

    return(
        <>
            <div className="w-full bg-white">
                <div className="container flex flex-col py-20 xl:px-0 px-10 mx-auto bg-white items-center">
                    <h1 className="uppercase font-bold">I nostri partners</h1>
                    <hr className="w-full border border-black my-5"/>
                    <Image src={clienti} alt={"clienti"}/>
                </div>
            </div>
            <div className="w-full bg-white">
                <div className="container flex flex-col py-20 xl:px-0 px-10 mx-auto bg-white items-center">
                    <h1 className="font-bold uppercase">media gallery</h1>
                    <hr className="w-full border border-black my-10"/>
                    {/*<YouTube videoId="yKWFTkwk1OM"
                             iframeClassName="w-[100%] h-[400px] md:w-[500px] md:h-[300px] xl:w-[1000px] xl:h-[500px]"
                    />*/}
                </div>
                <MyCarouselVideo/>
            </div>
        </>
    )
}

export default ClientiVideoSection