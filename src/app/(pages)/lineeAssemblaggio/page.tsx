"use client"

import {globalStore} from "@/store/globalStore";
import React, {useEffect} from "react";
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";
import Image from "next/image";
import icon1 from "@public/img/attivita/lineeAssemblaggio/icon1.png";
import icon2 from "@public/img/attivita/lineeAssemblaggio/icon2.png";
import icon3 from "@public/img/attivita/lineeAssemblaggio/icon3.png";
import icon4 from "@public/img/attivita/lineeAssemblaggio/icon4.png";
import {MdKeyboardArrowRight} from "react-icons/md";
import Link from "next/link";

export default function Page() {
    const updateNavbarBackgroundColor = globalStore((state: any) => state.updateNavbarBackgroundColor)
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)
    const updateActiveMenuItem = globalStore((state:any) => state.updateActiveMenuItem)
    useEffect(() => {
        updateNavbarBackgroundColor("#f5f5f5")
    }, []);

    const windowInnerWidth = useWindowInnerWidth()

    return (
        <div className="w-full" style={{backgroundColor: navbarBackgroundColor}}>
            <div className="lineeAssemblaggio bg-gray-300 h-[70vh]">
                <div
                    className="container my-auto h-full flex flex-col mx-auto justify-center lg:items-start lg:text-start items-center text-center">
                    <span className="text-primary uppercase lg:text-[30px] text-[14px] font-semibold">mmsystems</span>
                    <h1 className="text-[#3f3f3f] font-bold">
                        <span
                            className="text-primary font-bold xl:text-[90px] lg:text-[60px] md:text-[48px] text-[35px]">LINEE</span> DI
                        ASSEMBLAGGIO
                        AUTOMATIZZATE
                    </h1>
                </div>
            </div>
            <div className="container mx-auto flex flex-col gap-5 pt-10 px-10 xl:px-0">
                <p>
                    Le nostre soluzioni personalizzate rappresentano l&apos;apice dell&apos;automazione industriale,
                    mirate a
                    ottimizzare i processi di produzione e migliorare la qualità del prodotto finale.
                </p>
                <p>
                    Ogni linea di assemblaggio è progettata e costruita tenendo conto delle specifiche esigenze del
                    cliente. Collaboriamo con i nostri clienti per comprendere a fondo le loro necessità e sviluppare
                    soluzioni su misura che soddisfino esattamente i loro requisiti.
                </p>
                <span className="font-semibold">
                     Cosa rende uniche le nostre linee di assemblaggio automatizzate:
                </span>


            </div>
            <div className="container flex pt-20 pb-10 mx-auto px-10 xl:px-0">
                <div className="flex flex-col items-center xl:items-start text-center xl:text-start gap-24">
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon1} alt={"icon 1"} className="w-[8%]"/>}
                        <div className="flex flex-col gap-3">
                        <span
                            className="text-primary xl:text-2xl lg:text-xl uppercase">Personalizzazione totale</span>
                            <hr className="w-full border border-primary"/>
                            <p className="text-[#3F3F3F]">
                                Ogni linea di assemblaggio è progettata e costruita tenendo conto delle specifiche
                                esigenze del cliente. <br/>
                                Dall&apos;inizio alla fine, ci impegniamo a fornire soluzioni che si integrino
                                perfettamente nel flusso di lavoro esistente, garantendo un aumento significativo
                                dell&apos;efficienza.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon1} alt={"icon 1"} className="w-[20%]"/>}

                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon2} alt={"icon 2"} className="w-[8%]"/>}
                        <div className="flex flex-col gap-3">
                            <span
                                className="text-primary xl:text-2xl lg:text-xl uppercase">Tecnologia all&apos;avanguardia</span>
                            <hr className="w-full border border-primary"/>
                            <p className="text-[#3F3F3F]">
                                Utilizziamo le ultime innovazioni nel campo dell&apos;automazione e della robotica per
                                garantire prestazioni elevate e affidabilità. <br/>
                                La nostra attenzione costante all&apos;aggiornamento tecnologico ci consente di offrire
                                soluzioni all&apos;avanguardia che consentono ai nostri clienti di rimanere competitivi
                                sul mercato.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon2} alt={"icon 2"} className="w-[20%]"/>}
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon3} alt={"icon 3"} className="w-[8%]"/>}
                        <div className="flex flex-col gap-3">
                            <span className="text-primary xl:text-2xl lg:text-xl uppercase">Precisione e qualità</span>
                            <hr className="w-full border border-primary"/>
                            <p className="text-[#3F3F3F]">
                                Elevate la vostra produzione con i robot collaborativi specializzati nella saldatura.
                                La precisione millimetrica e la ripetibilità costante assicurano saldature di alta
                                qualità,
                                garantendo la robustezza e l&apos;affidabilità dei vostri prodotti.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon3} alt={"icon 3"} className="w-[20%]"/>}
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon4} alt={"icon 4"} className="w-[8%]"/>}
                        <div className="flex flex-col gap-3">
                            <span className="text-primary xl:text-2xl lg:text-xl uppercase">Assistenza continua</span>
                            <hr className="w-full border border-primary"/>
                            <p className="text-[#3F3F3F]">
                                Il nostro impegno nei confronti dei clienti non si ferma alla consegna. <br/>
                                Offriamo un supporto continuo, garantendo che le nostre soluzioni rimangano sempre
                                allineate
                                alle mutevoli esigenze dell&apos;industria e fornendo assistenza tempestiva in caso di
                                necessità.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon4} alt={"icon 4"} className="w-[20%]"/>}
                    <div className="flex flex-col gap-10">
                        <p className="text-start">
                            Le nostre soluzioni automatizzate su misura possono trasformare la vostra produzione portando efficienza
                            precisione e affidabilità al prossimo livello.
                        </p>
                        <Link href="chisiamo#contattaci" className="py-2 xl:py-2 px-2 text-white rounded-[100px] bg-[#3f3f3f] flex justify-between items-center xl:gap-1 w-full md:w-1/3 xl:w-1/5 relative z-50"
                            onClick={() => updateActiveMenuItem('chisiamo')}
                        >
                            <span className="px-5">Contattaci</span>
                            <div className="p-1 rounded-3xl bg-white">
                                <MdKeyboardArrowRight className="text-[#3f3f3f] xl:w-7 xl:h-7 w-5 h-5"/>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}