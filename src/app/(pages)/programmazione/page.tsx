"use client"
import {globalStore} from "@/store/globalStore";
import React, {useEffect} from "react";
import Image from "next/image";
import image1 from "../../../../public/img/attivita/plc/mmsystems-17.png";
import icon1 from "../../../../public/img/attivita/plc/icon1.png";
import icon2 from "../../../../public/img/attivita/plc/icon2.png";
import backgroundRight2 from "../../../../public/img/backgroundRight2.png";
import backgroundRight from "../../../../public/img/backgroundRight.png";
import sw1 from "../../../../public/img/attivita/plc/sw1.png";
import sw2 from "../../../../public/img/attivita/plc/sw2.png";
import sw3 from "../../../../public/img/attivita/plc/sw3.png";
import sw4 from "../../../../public/img/attivita/plc/sw4.png";
import sw5 from "../../../../public/img/attivita/plc/sw5.png";


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
            <div className="plc" style={{backgroundColor: navbarBackgroundColor}}>
                <div
                    className="container my-auto gap-4 h-full flex flex-col mx-auto justify-center items-start px-20 xl:px-0">
                    <h1 className="text-[#3f3f3f] font-semibold z-50 text-7xl lg:text-[65px] md:text-[48px] text-[35px]">
                        PROGRAMMAZIONE <br/>
                        <span
                            className="text-primary font-semibold text-7xl lg:text-[65px] md:text-[48px] text-[35px]">PLC</span>
                    </h1>
                    <p>
                        Oltre ai programmi su PLC e PC per il controllo e la supervisione di singole unita’ produttive,
                        la MM System realizza software per l’automazione di fabbrica:
                        <p>
                            <li>Dalla comunicazione in rete locale tra le varie linee;</li>
                            <li>Alla gestione centralizzata della produzione.</li>
                        </p>
                    </p>
                </div>
            </div>

            <div
                className="w-full flex relative py-20 flex-col items-center xl:items-start text-center xl:text-start gap-20 px-10 lg:px-0">
                <Image src={backgroundRight} alt={"img"} className="absolute top-0 right-0 w-1/2"/>
                <div className="container mx-auto flex px-20 xl:px-0 gap-10">
                    <Image src={image1} alt={"icon1"} className="w-1/2 left-0 xl:block hidden"/>
                    <div className="flex flex-col items-center xl:items-start gap-4">
                        <span className="text-primary font-semibold">I NOSTRI SERVIZI</span>
                        <hr className="border border-primary w-2/3"/>
                        <div className="grid md:grid-cols-1 gap-20">
                            <div className="flex flex-col items-center xl:items-start gap-2">
                                <Image src={icon1} alt={"icon1"} className="w-[15%] md:w-[10%] xl:w-[10%] mt-10"/>
                                <span className="text-primary font-semibold">SU MISURA</span>
                                <hr className="border border-primary w-1/3"/>
                                <p className="text-[#3F3F3F] text-center xl:text-left">
                                    Il team si occupa di realizzare software ad-hoc per i PLC di macchine nuove, inclusi
                                    impianti già posseduti dalle aziende.
                                </p>
                            </div>
                            <div className="flex flex-col items-center xl:items-start gap-2">
                                <Image src={icon2} alt={"icon1"} className="w-[20%] md:w-[15%] xl:w-[13.75%] mt-10"/>
                                <span className="text-primary font-semibold">ASSISTENZA</span>
                                <hr className="border border-primary w-1/3"/>
                                <p className="text-[#3F3F3F] text-center xl:text-left">
                                    Ricerca di guasti attraverso gli strumenti di diagnostica, messi a disposizione
                                    dagli ambienti di sviluppo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex relative py-20 gap-32 flex-col items-center text-center px-10 lg:px-0">
                <h1 className="text-[#3f3f3f] font-semibold z-50 text-7xl lg:text-[65px] md:text-[48px] text-[35px]">
                    PROGRAMMIAMO I <br/>SEGUENTI
                    <span
                        className="text-primary font-semibold text-7xl lg:text-[65px] md:text-[48px] text-[35px]"> SOFTWARE</span>
                </h1>
                <div className="flex flex-col items-center mb-20">
                    <hr className="w-full lg:w-1/5 border border-primary"/>
                    <div
                        className="container items-center grid grid-cols-2 lg:grid-cols-5 gap-20 relative z-50 py-10 lg:py-0">
                        <Image src={sw1} alt={"sw1"}/>
                        <Image src={sw2} alt={"sw2"}/>
                        <Image src={sw3} alt={"sw3"}/>
                        <Image src={sw4} alt={"sw4"}/>
                        <Image src={sw5} alt={"sw5"}/>
                    </div>
                    <hr className="w-full lg:w-1/5 border border-primary"/>
                </div>


            </div>

            <Image src={backgroundRight2} alt={"img"} className="absolute bottom-0 right-0 w-1/2"/>
        </div>
    )
}