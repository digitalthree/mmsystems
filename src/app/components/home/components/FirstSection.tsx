import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";
import mmsystems2 from "../../../../../public/img/mmsystems-2b.png";
import {globalStore} from "@/store/globalStore";

export interface FirstSectionProps{

}

const FirstSection: React.FC<FirstSectionProps> = ({}) => {
    const updateActiveMenuItem = globalStore((state:any) => state.updateActiveMenuItem)
    return(
        <>
            <div className="w-full section1 xl:pt-0 pt-10">
                <div className="container px-5 mx-auto grid xl:grid-cols-2 xl:gap-0 gap-10">
                    <div className="col-span-1 flex xl:h-[88vh] justify-center xl:justify-start xl:items-center">
                        <div className="flex flex-col xl:items-start items-center">
                            <span className="text-[#2A9DE9] xl:text-2xl lg:text-xl text-lg xl:mb-3 mb-2 uppercase">soluzioni industriali</span>
                            <hr className="xl:w-3/4 w-1/2 border border-white mb-2"/>
                            <h1 className="text-white xl:text-start text-center uppercase font-bold leading-[1]">Robot <br/> Per il Futuro</h1>
                            <span className="text-white mt-5 xl:text-justify text-center">L’industria 4.0  per importanti player <br/>del settore automotive.</span>
                            <div className="gap-2 xl:gap-5 flex flex-col justify-between mt-5">
                                <Link href="chisiamo" className="py-1 xl:py-2 px-2 text-white z-10 rounded-t-[100px] rounded-br-[100px] bg-gradient-to-r from-[#04203B] to-[#2A9DE9] flex justify-between items-center xl:gap-1"
                                      onClick={() => updateActiveMenuItem('chisiamo')}
                                >
                                    <span className="px-5 line-clamp-1">Scopri di più</span>
                                    <div className="p-2 rounded-3xl bg-white">
                                        <MdKeyboardArrowRight className="text-primary xl:w-7 xl:h-7 w-5 h-5"/>
                                    </div>
                                </Link>
                                <Link href="chisiamo#contatti" className="py-1 xl:py-2 px-2 text-white rounded-t-[100px] rounded-br-[100px] bg-gradient-to-r from-[#04203B] to-[#2A9DE9] flex justify-between items-center xl:gap-1"
                                    onClick={() => updateActiveMenuItem('chisiamo')}
                                >
                                    <span className="px-5">Contattaci</span>
                                    <div className="p-2 rounded-3xl bg-white">
                                        <MdKeyboardArrowRight className="text-primary xl:w-7 xl:h-7 w-5 h-5"/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Image src={mmsystems2} alt={""} className="xl:absolute xl:w-2/3 xl:right-0 xl:bottom-12"/>
                </div>
            </div>

        </>
    )
}

export default FirstSection