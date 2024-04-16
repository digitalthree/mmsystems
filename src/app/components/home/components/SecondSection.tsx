import React, {useRef} from 'react';
import Image from "next/image";
import image from "../../../../../public/img/mmsystems-18.png";
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";

export interface SecondSectionProps {

}

const SecondSection: React.FC<SecondSectionProps> = ({}) => {
    return (
        <div className="w-full bg-[#e4e4e4] relative">
            <div className="container mx-auto flex lg:h-[110vh] md:h-[60vh] h-[40vh] items-center">
                <div className="xl:w-1/4 w-2/3 flex flex-col xl:pl-0 pl-2">
                    <h1 className="text-black z-50 uppercase text-center xl:text-left xl:text-[90px] font-bold md:text-[48px] text-[35px] xl:leading-[80px]">Da
                        Oltre <span
                            className="text-primary uppercase text-7xl xl:text-[90px] font-bold md:text-[48px] text-[35px]">10 Anni</span>
                    </h1>
                    <span className="mt-3 z-50 text-black mb-3 xl:text-left text-center">MM Systems Srl fornisce all’Industria impianti nel campo
                                  dell’automazione e dell’impiantistica generale.</span>
                </div>
                <Image src={image} alt={"image"} className="absolute right-0 top-0 xl:w-[93%] w-full xl:opacity-100 opacity-40"/>
            </div>
        </div>
    )
}

export default SecondSection