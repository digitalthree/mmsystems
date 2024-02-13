import React from 'react';
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";
import Image from "next/image";
import icon1 from "../../../../../public/img/icon1.png";
import icon2 from "../../../../../public/img/icon2.png";
import icon3 from "../../../../../public/img/icon3.png";
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";

export interface SecondSectionProps{

}

const ThirdSection: React.FC<SecondSectionProps> = ({}) => {
    const windowInnerWidth = useWindowInnerWidth()
    return(
        <div className="w-full bg-[#e4e4e4] flex flex-col items-center">
            <hr className="w-2/3 border border-white"/>
            <div className="container flex px-5 py-5 xl:py-20 mx-auto ">
                <div className="flex flex-col items-center w-full xl:items-start text-center gap-10 xl:w-2/3">
                    <div className="xl:col-span-10 flex flex-col xl:items-start items-center">
                        <span className="text-[#04203B] uppercase font-semibold">eccellenza nel servizio e nell`esecuzione</span>
                        <hr className="xl:w-2/3 w-1/2 border border-white my-2"/>
                        <span className="text-primary font-semibold">PROGETTAZIONE: <span className="text-primary">Elettrica, Meccanica, Simulazione dinamica</span></span>
                        <span className="text-primary font-semibold">ATTIVITA`: <span className="text-primary">Metrologia</span></span>
                        <span className="text-primary font-semibold">PROGRAMMAZIONE: <span className="text-primary">PLC</span></span>
                        <span className="text-primary font-semibold">ROBOTICA: <span className="text-primary">Isole robotizzate, Robot Collaborativi e Banchi semiautomatici</span></span>
                        <hr className="xl:w-1/3 w-1/2 border border-white mt-5"/>
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="text-[#04203B] font-semibold text-7xl lg:text-[60px] md:text-[48px] text-[35px] uppercase">perchè <span className="text-primary font-semibold uppercase text-7xl lg:text-[60px] md:text-[48px] text-[35px] ">sceglierci?</span></h1>
                    </div>
                    <div className="flex flex-col xl:items-start">
                        <ul className="lg:list-disc lg:text-start text-[#04203B] xl:text-lg text-base xl:pl-6">
                            <li>Ascolto attivo;</li>
                            <li>Analisi delle abilità tecniche e comportamentali;</li>
                            <li>Equilibrio tra tempo, costi e contesto;</li>
                            <li>Individuazione delle esigenze;</li>
                            <li>Unicità del progetto;</li>
                            <li>Pensiero elaborativo;</li>
                            <li>Problem solving;</li>
                            <li>Etica, fiducia, onestà.</li>
                        </ul>
                    </div>
                    <Link href="chisiamo" className="lg:w-1/4 py-1 lg:py-2 px-2 text-white font-bold rounded-[100px] bg-primary flex justify-between items-center lg:gap-1">
                        <span className="px-3">Lo Stabilimento</span>
                        <div className="p-2 rounded-3xl bg-white">
                            <MdKeyboardArrowRight className="text-primary lg:w-7 lg:h-7 w-5 h-5"/>
                        </div>
                    </Link>
                </div>
                {windowInnerWidth > 1300 &&
                    <div className="flex flex-col gap-20 w-1/3 items-center">
                        <Image src={icon1} alt={"icon 1"} className="w-1/3"/>
                        <Image src={icon2} alt={"icon 2"} className="w-1/3"/>
                        <Image src={icon3} alt={"icon 3"} className="w-1/3"/>
                    </div>
                }
            </div>
            {windowInnerWidth <= 1300 &&
                <div className="flex gap-10 justify-evenly items-center pb-20">
                    <Image src={icon1} alt={"icon 1"} className="w-1/6"/>
                    <Image src={icon2} alt={"icon 2"} className="w-1/6"/>
                    <Image src={icon3} alt={"icon 3"} className="w-1/6"/>
                </div>
            }
        </div>
    )
}

export default ThirdSection