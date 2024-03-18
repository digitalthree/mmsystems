"use client"

import {globalStore} from "@/store/globalStore";
import React, {useEffect} from "react";
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";
import Image from "next/image";
import icon1 from "@public/img/intelligenzaArtificiale/icon1.png";
import icon2 from "@public/img/intelligenzaArtificiale/icon2.png";
import icon3 from "@public/img/intelligenzaArtificiale/icon3.png";
import backgroundLeft from "@public/img/backgroundLeft2.png";
import backgroundLeftBottom from "@public/img/backgroundLeftGray.png";
import backgroundRight from "@public/img/backgroundRight.png";
import backgroundRightBottom from "@public/img/backgroundRight2.png";
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
            <div className="intelligenzaArtificiale bg-gray-300 h-[70vh]">
                <div
                    className="container my-auto h-full flex flex-col mx-auto justify-center lg:items-start lg:text-start items-center text-center">
                    <span className="uppercase lg:text-[30px] text-[14px] font-semibold">le nostre attività</span>
                    <h1 className="text-[#3f3f3f] font-bold">
                        <span className="font-bold xl:text-[90px] lg:text-[60px] md:text-[48px] text-[35px]">SISTEMI DI VISIONE</span><br/>
                        ED <span
                        className="text-primary font-bold xl:text-[90px] lg:text-[60px] md:text-[48px] text-[35px]">INTELLIGENZA</span><br/>
                        <span
                            className="text-primary font-bold xl:text-[90px] lg:text-[60px] md:text-[48px] text-[35px]">ARTIFICIALE</span>
                    </h1>
                </div>
            </div>
            <div className="container mx-auto pt-10 px-10 xl:px-0 flex flex-col items-center xl:items-start text-center xl:text-start">
                <p>
                    Non solo vantiamo l’utilizzo delle più avanzate tecnologie di visione e intelligenza artificiale, ma
                    integriamo queste innovazioni in modo sinergico per offrire soluzioni altamente performanti e
                    personalizzate ai nostri clienti.
                </p>
                <hr className="border border-[#3f3f3f] w-1/6 mt-10"/>
            </div>

            <div className="container flex pt-20 pb-10 mx-auto px-10 xl:px-0">
                <div className="flex flex-col items-center xl:items-start text-center xl:text-start gap-24">
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon1} alt={"icon 1"} className="w-[8%]"/>}
                        <div className="flex flex-col gap-3">
                        <span
                            className="text-primary xl:text-2xl lg:text-xl uppercase">SISTEMI DI VISIONE DI ALTA QUALITà</span>
                            <hr className="w-full border border-primary"/>
                            <p className="text-[#3F3F3F]">
                                Collaboriamo con i brand leader nel settore della visione, integrando sistemi che
                                garantiscono una percezione visiva di altissima <b className="font-bold">qualità</b>
                                <br/>
                                L’acquisizione dei dati visivi è solo l’inizio: applichiamo algoritmi sofisticati per
                                preparare i dati, assicurando che siano ottimizzati per l’elaborazione dell’intelligenza
                                artificiale.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon1} alt={"icon 1"} className="w-[20%]"/>}

                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon2} alt={"icon 2"} className="w-[8%]"/>}
                        <div className="flex flex-col gap-3">
                            <span
                                className="text-primary xl:text-2xl lg:text-xl uppercase">Intelligenza Artificiale</span>
                            <hr className="w-full border border-primary"/>
                            <p className="text-[#3F3F3F]">
                                Implementiamo soluzioni di intelligenza artificiale, consentendo alle nostre macchine di
                                apprendere da dati storici e migliorare costantemente le proprie prestazioni. br
                                Questa integrazione strategica assicura una presa di decisioni <span
                                className="font-bold">autonoma</span> e <span className="font-bold">adattativa</span>,
                                contribuendo all&apos;efficienza operativa.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon2} alt={"icon 2"} className="w-[20%]"/>}
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon3} alt={"icon 3"} className="w-[8%]"/>}
                        <div className="flex flex-col gap-3">
                            <span className="text-primary xl:text-2xl lg:text-xl uppercase">COLLABORAZIONI STRATEGICHE E ADATTABILITà</span>
                            <hr className="w-full border border-primary"/>
                            <p className="text-[#3F3F3F]">
                                Grazie alle nostre partnership, siamo sempre all&apos;avanguardia delle ultime
                                innovazioni. <br/>
                                Questa sinergia di sistemi di visione e intelligenza artificiale si traduce in soluzioni
                                altamente <span
                                className="font-bold">adattabili</span> e <span
                                className="font-bold">personalizzate</span>, che rispondono alle vostre esigenze
                                specifiche.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon3} alt={"icon 3"} className="w-[20%]"/>}
                </div>
            </div>
            <div className="w-full relative py-20">
                <Image src={backgroundLeft} alt={"background left"} className="absolute top-0 left-0 w-[40%]"/>
                <Image src={backgroundRight} alt={"background right"} className="absolute top-0 right-0 w-[40%]"/>
                <div className="container mx-auto flex flex-col xl:text-end text-center pt-20 px-10 items-center xl:items-end xl:px-0">
                    <div className="flex justify-center xl:justify-end">
                        <h1 className="uppercase font-bold text-[#3f3f3f] z-50">processo <br/> integrato</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center xl:items-end gap-10 mt-10">
                        <p>
                            · Acquisizione e Analisi Visiva: I nostri sistemi di visione catturano dati visivi in tempo
                            reale, <br/>interpretando immagini con precisione.
                        </p>
                        <p>
                            · Preprocessamento dei Dati: Applichiamo algoritmi per ottimizzare e pulire i dati
                            visivi, <br/> garantendo informazioni di alta qualità.
                        </p>
                        <p>
                            · Apprendimento Automatico e Addestramento: L&apos;IA apprende da dati storici,
                            migliorando <br/> continuamente le prestazioni e adattandosi alle variazioni
                            dell&apos;ambiente.
                        </p>
                        <p>
                            · Decisioni Autonome e Feedback in Tempo Reale: L&apos;intelligenza artificiale prende
                            decisioni <br/> autonome basate sull&apos;analisi dei dati visivi, con possibilità di
                            feedback in
                            tempo reale per <br/> maggiore reattività.
                        </p>
                        <p>
                            · Risultati Ottimizzati: Questa integrazione si traduce in macchine in grado di
                            riconoscere <br/> pattern complessi, adattarsi a nuove situazioni e prendere decisioni
                            autonome, migliorando <br/> l&apos;efficienza complessiva.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full relative pb-20">
                <Image src={backgroundLeftBottom} alt={"background left"} className="absolute bottom-0 left-0 w-[40%]"/>
                <Image src={backgroundRightBottom} alt={"background right"} className="absolute bottom-0 right-0 w-[40%]"/>
                <div className="container mx-auto flex flex-col xl:text-end text-center pt-20 px-10 items-center xl:items-start xl:px-0">
                    <div className="flex justify-center xl:justify-start xl:text-start text-center">
                        <h1 className="uppercase font-bold text-[#3f3f3f] z-50">perché affidarsi <br/> a <span
                            className="text-primary font-bold xl:text-[90px] lg:text-[60px] md:text-[48px] text-[35px]">
                            mmsystems
                        </span>
                        </h1>
                    </div>
                    <div className="flex flex-col xl:text-start z-50 xl:items-start gap-10 justify-start mt-10">
                        <p>
                            Utilizziamo tecnologie all’avanguardia <br/>Il nostro è un approccio integrato
                        </p>
                        <p>
                            La visione di automazione e robotica evolve in una realtà intelligente e performante. Vi
                            guidiamo <br/> verso il futuro dell’innovazione industrial.
                        </p>
                    </div>
                    <Link href="chisiamo#contatti" className="py-2 mt-10 xl:py-2 px-2 text-white rounded-[100px] bg-[#3f3f3f] flex justify-between items-center xl:gap-1 w-full md:w-1/3 xl:w-1/5 relative z-50"
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
    )
}