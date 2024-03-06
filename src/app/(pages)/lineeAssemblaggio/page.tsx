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
                    <h1 className="text-[#3f3f3f] font-bold">LINEE DI ASSEMBLAGGIO
                        <br/>AUTOMATIZZATE</h1>
                </div>
            </div>
            <div className="container mx-auto text-center pt-10">
                <p>
                    Le nostre soluzioni personalizzate rappresentano l&apos;apice dell&apos;automazione industriale, mirate a
                    ottimizzare i processi di produzione e migliorare la qualità del prodotto finale. <br/>
                    Ogni linea di assemblaggio è progettata e costruita tenendo conto delle specifiche esigenze del
                    cliente. Collaboriamo con i nostri clienti per comprendere a fondo le loro necessità e sviluppare
                    soluzioni su misura che soddisfino esattamente i loro requisiti. <br/>
                    Cosa rende uniche le nostre linee di assemblaggio automatizzate:
                </p>
            </div>
            <div className="container flex pt-20 pb-10 mx-auto px-10 xl:px-0">
                {windowInnerWidth > 1300 &&
                    <div className="flex flex-col w-1/5 gap-8 items-start">
                        <Image src={icon1} alt={"icon 1"} className="w-1/2"/>
                        <Image src={icon2} alt={"icon 2"} className="w-1/2"/>
                        <Image src={icon3} alt={"icon 3"} className="w-1/2"/>
                        <Image src={icon2} alt={"icon 3"} className="w-1/2"/>
                    </div>
                }
                <div className="flex flex-col items-center xl:items-start text-center xl:text-start gap-24 xl:w-4/5">
                    <div className="flex flex-col gap-3">
                        <span className="text-primary xl:text-2xl lg:text-xl uppercase">Personalizzazione totale</span>
                        <hr className="w-full border border-primary"/>
                        <p className="text-[#3F3F3F]">
                            Ogni linea di assemblaggio è progettata e costruita tenendo conto delle specifiche esigenze del cliente. <br/>
                            Dall&apos;inizio alla fine, ci impegniamo a fornire soluzioni che si integrino perfettamente nel flusso di lavoro esistente, garantendo un aumento significativo dell&apos;efficienza.
                        </p>
                    </div>
                    <div className="xl:col-span-10 flex flex-col gap-3">
                        <span className="text-primary xl:text-2xl lg:text-xl uppercase">Tecnologia all&apos;avanguardia</span>
                        <hr className="w-full border border-primary"/>
                        <p className="text-[#3F3F3F]">
                            Utilizziamo le ultime innovazioni nel campo dell&apos;automazione e della robotica per garantire prestazioni elevate e affidabilità. <br/>
                            La nostra attenzione costante all&apos;aggiornamento tecnologico ci consente di offrire soluzioni all&apos;avanguardia che consentono ai nostri clienti di rimanere competitivi sul mercato.
                        </p>
                    </div>
                    <div className="xl:col-span-10 flex flex-col gap-3">
                        <span className="text-primary xl:text-2xl lg:text-xl uppercase">Precisione e qualità</span>
                        <hr className="w-full border border-primary"/>
                        <p className="text-[#3F3F3F]">
                            Elevate la vostra produzione con i robot collaborativi specializzati nella saldatura.
                            La precisione millimetrica e la ripetibilità costante assicurano saldature di alta qualità,
                            garantendo la robustezza e l&apos;affidabilità dei vostri prodotti.
                        </p>
                    </div>
                    <div className="xl:col-span-10 flex flex-col gap-3">
                        <span className="text-primary xl:text-2xl lg:text-xl uppercase">Assistenza continua</span>
                        <hr className="w-full border border-primary"/>
                        <p className="text-[#3F3F3F]">
                            Il nostro impegno nei confronti dei clienti non si ferma alla consegna. <br/>
                            Offriamo un supporto continuo, garantendo che le nostre soluzioni rimangano sempre allineate alle mutevoli esigenze dell&apos;industria e fornendo assistenza tempestiva in caso di necessità.
                        </p>
                    </div>
                    <div className="xl:col-span-10 flex flex-col gap-3">
                        <span className="text-primary xl:text-2xl lg:text-xl uppercase">Le nostre soluzioni automatizzate su misura possono</span>
                        <hr className="w-full border border-primary"/>
                        <p className="list-disc text-[#3F3F3F]">
                            <li>trasformare la vostra produzione,</li>
                            <li>portando efficienza,</li>
                            <li>precisione e affidabilità al prossimo livello.</li>
                        </p>
                    </div>
                </div>
            </div>
            {windowInnerWidth <= 1300 && windowInnerWidth > 800 &&
                <div className="flex gap-10 justify-evenly items-center pb-20">
                    <Image src={icon1} alt={"icon 1"} className="w-1/6"/>
                    <Image src={icon2} alt={"icon 2"} className="w-1/6"/>
                    <Image src={icon3} alt={"icon 3"} className="w-1/6"/>
                    <Image src={icon2} alt={"icon 3"} className="w-1/6"/>
                </div>
            }
        </div>
    )
}