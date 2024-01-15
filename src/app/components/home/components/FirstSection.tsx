import React, {useRef} from 'react';
import Image from "next/image";
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";
import {motion, useInView} from "framer-motion";
import graphImage from "../../../../../public/img/graph.png";

export interface FirstSectionProps{

}

const FirstSection: React.FC<FirstSectionProps> = ({}) => {
    const ref1 = useRef(null)
    const isInView1 = useInView(ref1)
    const ref2 = useRef(null)
    const isInView2 = useInView(ref2)
    return(
        <>
            <div className="w-full section1">
                <div className="container px-5 mx-auto grid lg:grid-cols-2 lg:gap-0 gap-10">
                    <div ref={ref1} className="col-span-1 flex h-[85vh] justify-center lg:justify-start lg:items-center">
                        <div className="flex flex-col lg:items-start items-center">
                            <span className="text-[#2A9DE9] text-2xl mb-3">soluzioni industriali</span>
                            <hr className="w-3/4 border border-white"/>
                            <h1 className="text-white lg:text-start text-center">Robot <br/> Collaborativi <br/> Per il <span className="text-primary lg:text-[90px] md:text-[48px] text-[35px]">Futuro</span></h1>
                            <span className="text-white mt-5 lg:text-justify text-center">L’industria 4.0 con tecnologia di ultima generazione per importanti player <br/>del settore automotive.</span>
                            <div className="gap-2 lg:gap-5 flex justify-between mt-5">
                                <Link href="chisiamo" className="py-1 lg:py-2 px-2 text-white z-10 rounded-t-[100px] rounded-br-[100px] bg-gradient-to-r from-[#04203B] to-[#2A9DE9] flex justify-between items-center lg:gap-1">
                                    <span className="px-5 line-clamp-1">Scopri di più</span>
                                    <div className="p-2 rounded-3xl bg-white">
                                        <MdKeyboardArrowRight className="text-primary lg:w-7 lg:h-7 w-5 h-5"/>
                                    </div>
                                </Link>
                                <Link href="contattaci" className="py-1 lg:py-2 px-2 text-white rounded-t-[100px] rounded-br-[100px] bg-gradient-to-r from-[#04203B] to-[#2A9DE9] flex justify-between items-center lg:gap-1">
                                    <span className="px-5">Contattaci</span>
                                    <div className="p-2 rounded-3xl bg-white">
                                        <MdKeyboardArrowRight className="text-primary lg:w-7 lg:h-7 w-5 h-5"/>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/*<video src={require('../../public/video/videoHome.mov')} autoPlay muted loop className="mt-[-150px] -z-10"/>*/}
                    </div>
                    <div className="lg:flex lg:justify-end lg:col-span-1">
                        <motion.img src={"/img/img1.png"} alt={"banner"}
                                    className="w-4/5"
                            /*initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{duration: 1}}*/
                        />
                        {isInView1 &&
                            <></>
                        }
                    </div>
                    <div className="lg:col-span-2 grid lg:grid-cols-12 lg:pt-20 pt-10 lg:pb-20 pb-10">
                        <div ref={ref2} className="flex justify-end items-end mr-10 lg:col-span-4">
                            <Image src={graphImage} alt={"ai image"} className="w-full"/>
                        </div>
                        <div className="lg:col-span-8">
                            {isInView2 &&
                                <motion.div className="flex flex-col lg:items-start items-center mt-10 lg:mt-0"
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{duration: 1}}
                                >
                                    <h1 className="text-white uppercase w-full text-center text-7xl">Da Oltre <span className="text-primary uppercase text-7xl">10 Anni</span></h1>
                                    <span className="mt-3 text-white mb-3 lg:text-right text-center">MM Systems Srl fornisce all’Industria impianti nel campo
                                  dell’automazione e dell’impiantistica generale.</span>

                                    <div className="flex flex-col lg:items-start items-center mb-10">
                                        <span className=" text-primary uppercase">2 Uffici di Rappresentanza Nazionale</span>
                                        <span className="text-white lg:text-justify text-center">Germania, Francia. <br/> Mente e cuore rimangono, però, saldamente in Abruzzo.</span>
                                    </div>

                                    <div className="flex flex-col lg:items-end items-center mb-10">
                                        <span className="text-primary uppercase">30 Dipendenti</span>
                                        <span className="text-white lg:text-right text-center">I dipendenti dell’azienda sono il nostro orgoglio. <br/> Dirigenti capaci, progettisti qualificati, operai specializzati rappresentano la solida base su cui è strutturata la nostra realtà aziendale.</span>
                                    </div>

                                    <div className="flex flex-col lg:items-start items-center">
                                        <span className="text-primary uppercase">3 Milioni di euro di fatturato</span>
                                        <span className="text-white lg:text-justify text-center">Sono le basi per pianificare il domani.</span>
                                    </div>
                                </motion.div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FirstSection