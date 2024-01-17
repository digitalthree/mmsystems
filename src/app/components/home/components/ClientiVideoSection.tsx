import Video from "next-video";
import React from 'react';
import Image from "next/image";
import clienti from "../../../../../public/img/clienti/clienti.png";
import YouTube from 'react-youtube';

export interface ClientiVideoSectionProps{
    
}

const ClientiVideoSection: React.FC<ClientiVideoSectionProps> = ({}) => {
    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };
    return(
        <>
            <div className="w-full bg-white">
                <div className="container flex flex-col py-20 mx-auto bg-white items-center">
                    <h1 className="font-light text-7xl md:text-[48px] text-[35px]">I nostri clienti</h1>
                    <hr className="w-full border border-black my-5"/>
                    <Image src={clienti} alt={"clienti"}/>
                </div>
            </div>
            <div className="w-full bg-white">
                <div className="container flex flex-col py-20 mx-auto bg-white items-center">
                    <h1 className="font-light text-7xl md:text-[48px] text-[35px]">video e recensioni</h1>
                    <hr className="w-full border border-black my-10"/>
                    <div className="flex justify-center">
                        <YouTube videoId="yhdL4jz74WM"
                                 opts={opts} iframeClassName=" "
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientiVideoSection