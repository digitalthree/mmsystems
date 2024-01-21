import Video from "next-video";
import React from 'react';
import Image from "next/image";
import clienti from "../../../../../public/img/clienti/clienti.png";
import YouTube from 'react-youtube';

export interface ClientiVideoSectionProps{
    
}

const ClientiVideoSection: React.FC<ClientiVideoSectionProps> = ({}) => {

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
                    <YouTube videoId="yhdL4jz74WM"
                             iframeClassName="w-[100%] h-[400px] md:w-[500px] md:h-[300px] xl:w-[1000px] xl:h-[500px]"
                    />
                </div>
            </div>
        </>
    )
}

export default ClientiVideoSection