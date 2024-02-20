"use client"
import {globalStore} from "@/store/globalStore";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import image1 from "../../../../public/img/attivita/metrologia/mmsystems-14.png";
import image2 from "../../../../public/img/attivita/metrologia/mmsystems-1.png";
import icon1 from "../../../../public/img/attivita/metrologia/icon1.png";
import icon2 from "../../../../public/img/attivita/metrologia/icon2.png";
import icon3 from "../../../../public/img/attivita/metrologia/icon3.png";
import icon4 from "../../../../public/img/attivita/metrologia/icon4.png";
import backgroundRight2 from "../../../../public/img/backgroundRight2.png";
import backgroundRight from "../../../../public/img/backgroundRight.png";
import backgroundLeft from "../../../../public/img/backgroundLeft2.png";
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";

export default function Page() {
    const updateNavbarBackgroundColor = globalStore((state: any) => state.updateNavbarBackgroundColor)
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)
    const updateFooterBackgroundColor = globalStore((state: any) => state.updateFooterBackgroundColor)

    useEffect(() => {
        updateNavbarBackgroundColor("#e4e4e4")
        updateFooterBackgroundColor("#04203b")
    }, []);

    return (
        <div className="w-full relative" style={{backgroundColor: navbarBackgroundColor}}>
            <div className="metrologia" style={{backgroundColor: navbarBackgroundColor}}>
                <div
                    className="container my-auto gap-4 h-full flex flex-col mx-auto justify-center items-center text-center">
                    <h1 className="text-[#3f3f3f] font-semibold z-50 text-7xl lg:text-[65px] md:text-[48px] text-[35px]">METROLOGIA</h1>
                </div>
            </div>

            <div className="w-full flex relative pt-64 pb-20  flex-col items-center xl:items-start text-center xl:text-start gap-20 px-10 lg:px-0">
                <Image src={backgroundRight} alt={"img"} className="absolute top-0 right-0 w-1/2"/>
                <Image src={backgroundLeft} alt={"img"} className="absolute top-0 left-0 w-1/2"/>
                <div className="container mx-auto flex flex-row px-20 xl:px-0 gap-10 relative">
                    <Image src={image1} alt={"icon1"} className="w-1/2 left-0 xl:block hidden"/>
                    <div className="flex flex-col items-center xl:items-start w-full xl:w-1/2 gap-4">
                        <Image src={icon1} alt={"icon1"} className="w-[25%] md:w-[10%] xl:w-[13%]"/>
                        <span className="text-primary font-semibold">ANALISI STATICA - FEM</span>
                        <hr className="border border-primary w-1/3"/>
                        <p className="text-[#3F3F3F] text-center xl:text-left">
                            Attraverso il controllo di un numero adeguato di campioni (SPC - controllo statistico di
                            processo) si può misurare la variabilità e la capacità di un processo produttivo rilevandone
                            le tendenze attraverso grafici ed indici di capacità
                        </p>
                        <Image src={icon2} alt={"icon1"} className="w-[25%] md:w-[10%] xl:w-[13%] mt-10"/>
                        <span className="text-primary font-semibold">RILIEVO CON BRACCI ANTROPOMORFI</span>
                        <hr className="border border-primary w-1/3"/>
                        <p className="text-[#3F3F3F] text-center xl:text-left">
                            La nuova tecnologia del braccio di misura consente di effettuare controlli, attraverso il
                            modello matematico, di particolari di difficile movimentazione. Il braccio è portatile e
                            dispone di campo di misura di y2400, con una notevole flessibilità rispetto ad una macchina
                            di misura tradizione (CMM)
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center xl:items-start text-center xl:text-start">
                <div className="flex flex-row gap-10 items-center">
                    <div className="w-1/4 xl:block hidden"></div>
                    <div className="flex xl:pb-12 pb-20 flex-col items-center xl:items-start px-20 xl:px-0 xl:w-3/4 gap-4">
                        <Image src={icon3} alt={"icon1"} className="w-[25%] md:w-[10%] xl:w-[13%]"/>
                        <span className="text-primary font-semibold">ANALISI STATICA - FEM</span>
                        <hr className="border border-primary w-1/3"/>
                        <p className="text-[#3F3F3F] text-center xl:text-left">
                            Attraverso il controllo di un numero adeguato di campioni (SPC - controllo statistico di
                            processo) si può misurare la variabilità e la capacità di un processo produttivo rilevandone
                            le tendenze attraverso grafici ed indici di capacità
                        </p>
                        <Image src={icon4} alt={"icon1"} className="w-[25%] md:w-[10%] xl:w-[13%] mt-10"/>
                        <span className="text-primary font-semibold">RILIEVO CON BRACCI ANTROPOMORFI</span>
                        <hr className="border border-primary w-1/3"/>
                        <p className="text-[#3F3F3F] text-center xl:text-left">
                            La nuova tecnologia del braccio di misura consente di effettuare controlli, attraverso il
                            modello matematico, di particolari di difficile movimentazione. Il braccio è portatile e
                            dispone di campo di misura di y2400, con una notevole flessibilità rispetto ad una macchina
                            di misura tradizione (CMM)
                        </p>
                        <Link href="progettazione" className="py-2 mt-20 xl:py-2 px-2 text-white rounded-[100px] bg-[#3f3f3f] flex justify-between items-center xl:gap-1 w-full md:w-1/2 xl:w-1/2 relative z-50">
                            <span className="px-5">Progettazione</span>
                            <div className="p-1 rounded-3xl bg-white">
                                <MdKeyboardArrowRight className="text-[#3f3f3f] xl:w-7 xl:h-7 w-5 h-5"/>
                            </div>
                        </Link>
                        <Link href="contattaci" className="py-2 xl:py-2 px-2 text-white rounded-[100px] bg-[#3f3f3f] flex justify-between items-center xl:gap-1 w-full md:w-1/2 xl:w-1/2 relative z-50">
                            <span className="px-5">Contattaci</span>
                            <div className="p-1 rounded-3xl bg-white">
                                <MdKeyboardArrowRight className="text-[#3f3f3f] xl:w-7 xl:h-7 w-5 h-5"/>
                            </div>
                        </Link>
                    </div>
                    <Image src={image2} alt={"icon1"} className="w-[40%] right-0 bottom-0 z-50 xl:block hidden"/>
                </div>
            </div>
            {/*<Image src={backgroundRight2} alt={"img"} className="absolute bottom-0 right-0 w-1/2"/>*/}
        </div>
    )
}