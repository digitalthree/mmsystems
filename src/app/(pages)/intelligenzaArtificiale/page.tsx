"use client"

import {globalStore} from "@/store/globalStore";
import React, {useEffect} from "react";
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";
import Image from "next/image";
import icon1 from "@public/img/progettazione/icon1.png";
import icon2 from "@public/img/progettazione/icon2.png";
import icon3 from "@public/img/progettazione/icon3.png";

export default function Page() {
    const updateNavbarBackgroundColor = globalStore((state: any) => state.updateNavbarBackgroundColor)
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)


    useEffect(() => {
        updateNavbarBackgroundColor("#f5f5f5")
    }, []);

    const windowInnerWidth = useWindowInnerWidth()

    return (
        <div className="w-full" style={{backgroundColor: navbarBackgroundColor}}>
            <div className="robotCollaborativi bg-gray-300 h-[70vh]">
                <div
                    className="container my-auto gap-4 h-full flex flex-col mx-auto justify-center items-center  text-center">
                    <h1 className="text-[#3f3f3f] font-bold">SISTEMI DI VISIONE ED
                        <br/>INTELLIGENZA ARTIFICIALE</h1>
                </div>
            </div>
            <div className="container mx-auto text-center pt-10">
                <p>
                    Non solo vantiamo l’utilizzo delle più avanzate tecnologie di visione e intelligenza artificiale, ma
                    integriamo queste innovazioni in modo sinergico per offrire soluzioni altamente performanti e
                    personalizzate ai nostri clientI
                </p>
            </div>
            <div className="container flex pt-20 pb-10 mx-auto px-10 xl:px-0">
                {windowInnerWidth > 1300 &&
                    <div className="flex flex-col w-1/5 gap-8 items-start">
                        <Image src={icon1} alt={"icon 1"} className="w-1/2"/>
                        <Image src={icon2} alt={"icon 2"} className="w-1/2"/>
                        <Image src={icon3} alt={"icon 3"} className="w-1/2"/>
                    </div>
                }
                <div className="flex flex-col items-center xl:items-start text-center xl:text-start gap-24 xl:w-4/5">
                    <div className="flex flex-col gap-3">
                        <span className="text-primary xl:text-2xl lg:text-xl uppercase">Sistemi di Visione di Alta Qualità</span>
                        <hr className="w-full border border-primary"/>
                        <p className="text-[#3F3F3F]">
                            Collaboriamo con i brand leader nel settore della visione, integrando sistemi che
                            garantiscono una percezione visiva di altissima qualità.
                            L&apos;acquisizione dei dati visivi è solo l&apos;inizio: applichiamo algoritmi sofisticati
                            per
                            preparare i dati, assicurando che siano ottimizzati per l&apos;elaborazione
                            dell&apos;intelligenza
                            artificiale.
                        </p>
                    </div>
                    <div className="xl:col-span-10 flex flex-col gap-3">
                        <span
                            className="text-primary xl:text-2xl lg:text-xl uppercase">Intelligenza Artificiale</span>
                        <hr className="w-full border border-primary"/>
                        <p className="text-[#3F3F3F]">
                            Implementiamo soluzioni di intelligenza artificiale, consentendo alle nostre macchine di
                            apprendere da dati storici e migliorare costantemente le proprie prestazioni.
                            Questa integrazione strategica assicura una presa di decisioni autonoma e adattativa,
                            contribuendo all&apos;efficienza operativa.
                        </p>
                    </div>
                    <div className="xl:col-span-10 flex flex-col gap-3">
                        <span className="text-primary xl:text-2xl lg:text-xl uppercase">Collaborazioni Strategiche e Adattabilità</span>
                        <hr className="w-full border border-primary"/>
                        <p className="text-[#3F3F3F]">
                            Grazie alle nostre partnership, siamo sempre all&apos;avanguardia delle ultime innovazioni.
                            Questa sinergia di sistemi di visione e intelligenza artificiale si traduce in soluzioni
                            altamente adattabili e personalizzate, che rispondono alle vostre esigenze specifiche.
                        </p>
                    </div>
                </div>
            </div>
            {windowInnerWidth <= 1300 && windowInnerWidth > 800 &&
                <div className="flex gap-10 justify-evenly items-center pb-20">
                    <Image src={icon1} alt={"icon 1"} className="w-1/6"/>
                    <Image src={icon2} alt={"icon 2"} className="w-1/6"/>
                    <Image src={icon3} alt={"icon 3"} className="w-1/6"/>
                </div>
            }
        </div>
    )
}