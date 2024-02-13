import React, {useRef} from 'react';
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";
import Image from "next/image";
import icon1 from "../../../../../public/img/icon1.png";
import icon2 from "../../../../../public/img/icon2.png";
import icon3 from "../../../../../public/img/icon3.png";
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";
import graphImage from "@public/img/graph.png";
import {motion} from "framer-motion";

export interface SecondSectionProps {

}

const SecondSection: React.FC<SecondSectionProps> = ({}) => {
    const windowInnerWidth = useWindowInnerWidth()
    const ref2 = useRef(null)
    return (
        <div className="w-full bg-[#e4e4e4]">
            <div className="container flex flex-col py-5 xl:py-20 px-5 mx-auto ">
                <h1 className="text-black uppercase w-full text-center xl:text-left xl:text-[90px] font-semibold md:text-[48px] text-[35px]">Da
                    Oltre <span
                        className="text-primary uppercase text-7xl xl:text-[90px] font-semibold md:text-[48px] text-[35px]">10 Anni</span>
                </h1>
                <span className="mt-3 text-black mb-3 xl:text-left text-center ">MM Systems Srl fornisce all’Industria impianti nel campo
                                  dell’automazione e dell’impiantistica generale.</span>
                <div className="xl:col-span-2 grid xl:grid-cols-12 xl:pt-20 xl:pb-20 ">
                    {windowInnerWidth > 1300 &&
                        <div ref={ref2} className="flex justify-start items-end mr-10 xl:col-span-5">
                            <Image src={graphImage} alt={"ai image"} className="xl:w-4/5 w-1/2"/>
                        </div>
                    }

                    <div className="xl:col-span-7">
                        <motion.div className="flex flex-col xl:items-start items-center mt-10 xl:mt-0"
                                    initial={{opacity: 0, x: -100}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 1}}
                        >

                            <div className="flex flex-col xl:items-start items-center lg:mb-10 mb-2">
                                <span className=" text-primary uppercase font-semibold">2 Uffici di Rappresentanza Nazionale</span>
                                <span className="text-black xl:text-justify text-center">Germania, Francia. <br/> Mente e cuore rimangono, però, saldamente in Abruzzo.</span>
                            </div>

                            <div className="flex flex-col xl:items-end items-center lg:mb-10 mb-2">
                                <span className="text-primary uppercase font-semibold">30 Dipendenti</span>
                                <span className="text-black xl:text-right text-center">I dipendenti dell’azienda sono il nostro orgoglio. <br/> Dirigenti capaci, progettisti qualificati, operai specializzati rappresentano la solida base su cui è strutturata la nostra realtà aziendale.</span>
                            </div>

                            <div className="flex flex-col xl:items-start items-center">
                                <span
                                    className="text-primary uppercase font-semibold">3 Milioni di euro di fatturato</span>
                                <span className="text-black xl:text-justify text-center">Sono le basi per pianificare il domani.</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div/>
            </div>
        </div>
    )
}

export default SecondSection