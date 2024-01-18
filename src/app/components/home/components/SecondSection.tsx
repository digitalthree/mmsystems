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

const SecondSection: React.FC<SecondSectionProps> = ({}) => {
    const windowInnerWidth = useWindowInnerWidth()
    return(
        <>
            <div className="container flex px-5 py-20 mx-auto">
                <div className="flex flex-col items-center xl:items-start text-center xl:text-start gap-10 xl:w-2/3">
                    <div className="xl:col-span-10 flex flex-col">
                        <span className="text-white mb-5">Il nostro scopo è fornire eccellenza nel servizio e nell`esecuzione</span>
                        <span className="text-primary">PROGETTAZIONE: <span className="text-primary">Elettrica, Meccanica, Simulazione dinamica</span></span>
                        <span className="text-primary">ATTIVITA`: <span className="text-primary">Metrologia</span></span>
                        <span className="text-primary">PROGRAMMAZIONE: <span className="text-primary">PLC</span></span>
                        <span className="text-primary">ROBOTICA: <span className="text-primary">Isole robotizzate, Robot Collaborativi e Banchi semiautomatici</span></span>
                        <hr className="xl:w-1/3 w-full border border-white mt-5"/>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-7xl lg:text-[60px] md:text-[48px] text-[35px]"> perchè <span className="text-[#c7c7c7] text-7xl lg:text-[60px] md:text-[48px] text-[35px] ">sceglierci?</span></h1>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white">Perché siamo in grado di risolvere le più svariate problematiche nell`ambito dell`industria, individuando con voi la migliore soluzione. Gli uffici tecnici sono attrezzati con 5 postazioni per la progettazione meccanica (CAD CAD), hardware (Spac/Eplan) software PLC (Siemens, Allen Bradley, Omron, Schneider) e Software ROBOT (Kuka, ABB, Motoman, Comau, Fanuc). Il nostro stabilimento di Mozzagrogna si sviluppa su una superficie di 1550 metri quadrati - tutti coperti- ed è dotato di macchinari all`avanguardia per la realizzazione dei nostri prodotti.</span>
                    </div>
                    <Link href="chisiamo" className="lg:w-1/4 py-1 lg:py-2 px-2 text-white font-bold rounded-t-[100px] rounded-br-[100px] bg-gradient-to-r from-[#04203B] to-[#2A9DE9] flex justify-between items-center lg:gap-1">
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
        </>
    )
}

export default SecondSection