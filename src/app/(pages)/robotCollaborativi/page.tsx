"use client"

import {globalStore} from "@/store/globalStore";
import React, {useEffect} from "react";
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";
import Image from "next/image";
import icon1 from "@public/img/attivita/robotCollaborativi/icon1.png";
import icon2 from "@public/img/attivita/robotCollaborativi/icon2.png";
import icon3 from "@public/img/attivita/robotCollaborativi/icon3.png";
import icon4 from "@public/img/attivita/robotCollaborativi/icon4.png";
import icon5 from "@public/img/attivita/robotCollaborativi/icon5.png";
import backgroudBottomRight from "@public/img/backgroundRight2.png";
import robotGrigio from "@public/img/attivita/robotica/braccio-robotico.png";

export default function Page() {
    const updateNavbarBackgroundColor = globalStore((state: any) => state.updateNavbarBackgroundColor)
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)


    useEffect(() => {
        updateNavbarBackgroundColor("#f5f5f5")
    }, []);

    const windowInnerWidth = useWindowInnerWidth()

    return (
        <div className="w-full" style={{backgroundColor: navbarBackgroundColor}}>
            <section className="w-full relative py-8 bg-opacity-30">
                <Image
                    src={backgroudBottomRight}
                    alt="background"
                    style={{
                        opacity: "0.7",
                        objectFit: "contain",
                    }}
                    className="absolute bottom-0 right-0 md:w-3/4 lg:w-3/5 z-0"
                />
                <div
                    className="container mx-auto p-8 xl:p-0 flex flex-col md:flex-row justify-center items-center text-[#3f3f3f] z-10">
                    <div className="flex flex-col md:w-3/5">
                        <h1 className="font-bold">
                            ROBOT <br/>
                            <h1 className="text-primary font-bold">COLLABORATIVI</h1>
                        </h1>
                        <span className="xl:text-2xl lg:text-xl mt-2 mb-8">
                                INNOVATIVI - SICURI - INTELLIGENTI
                            </span>
                        <p className="xl:w-4/5">
                            M.M. Systems propone soluzioni complete di robotica
                            collaborativa utilizzando tutte le possibilità offerte da questa
                            nuova tecnologia inoltre a partire dal 2018 è diventata
                            distributore per l’Italia dei Cobot TM Robot.L’avvento di questa
                            tecnologia permette la realizzazione di nuove tipologie di
                            applicazioni, in cui macchina e operatore collaborano
                            attivamente per portare a termine il task richiesto.I Cobot
                            hanno caratteristiche funzionali di apprendimento automatico,
                            gestione in sicurezza delle collisioni, collaborazione uomo
                            macchina, facilità d’uso e sensori di forza. I robot
                            collaborativi sono utilizzati anchenelle operazioni di prelievo,
                            posizionamento, avvitatura, asservimento macchine, lucidatura e
                            assemblaggi questi ultimi possono essere utilizzati in tutti
                            settori industriali.
                        </p>
                    </div>
                    <div className="flex relative w-3/5 md:w-2/5 xl:w-2/6 mx-auto mt-8 md:mt-0">
                        <Image
                            src={robotGrigio}
                            alt="robot grigio"
                            style={{objectFit: "contain"}}
                        />
                    </div>
                </div>
            </section>
            <div className="container flex pb-10 mx-auto px-10 xl:px-0">
                <div className="flex flex-col items-center xl:items-start text-center xl:text-start gap-24">
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon1} alt={"icon 1"} className="w-[10%]"/>}
                        <div className="flex flex-col gap-3">
                        <span
                            className="text-primary xl:text-2xl lg:text-xl uppercase">Robot Collaborativi per l&apos;Assemblaggio</span>
                            <hr className="w-full border border-primary"/>
                            <p className="text-[#3F3F3F]">
                                Semplificate e ottimizzate il vostro processo di assemblaggio con i nostri robot
                                collaborativi.
                                La precisione e la velocità di questi straordinari compagni automatizzati migliorano la
                                qualità del prodotto e riducono i tempi di produzione.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon1} alt={"icon 1"} className="w-[30%]"/>}

                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon2} alt={"icon 2"} className="w-[10%]"/>}
                        <div className="flex flex-col gap-3">
                            <span className="text-primary xl:text-2xl lg:text-xl uppercase">Robot Collaborativi per la Manipolazione</span>
                            <hr className="w-full border border-primary"/>
                            <p className="text-[#3F3F3F]">
                                Affidatevi ai nostri robot collaborativi per una manipolazione sicura e efficiente dei
                                vostri materiali.
                                Dalla movimentazione leggera a quella pesante, questi robot sono progettati per gestire una
                                vasta gamma di carichi, riducendo il rischio di incidenti e migliorando la sicurezza sul
                                luogo di lavoro.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon2} alt={"icon 2"} className="w-[30%]"/>}
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon3} alt={"icon 3"} className="w-[10%]"/>}
                        <div className="flex flex-col gap-3">
                            <span className="text-primary xl:text-2xl lg:text-xl uppercase">Robot Collaborativi per la Saldatura</span>
                            <hr className="w-full border border-primary"/>
                            <p className="text-[#3F3F3F]">
                                Elevate la vostra produzione con i robot collaborativi specializzati nella saldatura.
                                La precisione millimetrica e la ripetibilità costante assicurano saldature di alta qualità,
                                garantendo la robustezza e l&apos;affidabilità dei vostri prodotti.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon3} alt={"icon 3"} className="w-[30%]"/>}
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon4} alt={"icon 4"} className="w-[10%]"/>}
                        <div className="flex flex-col gap-3">
                            <span className="text-primary xl:text-2xl lg:text-xl uppercase">Robot Collaborativi per la Palletizzazione</span>
                            <hr className="w-full border border-primary"/>
                            <p className="text-[#3F3F3F]">
                                Semplificate il processo di palletizzazione con i nostri robot collaborativi.
                                Questi sistemi automatizzati sono in grado di gestire carichi di diverse dimensioni e forme,
                                ottimizzando lo spazio e riducendo i costi di manodopera.
                            </p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon4} alt={"icon 4"} className="w-[30%]"/>}
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon5} alt={"icon 5"} className="w-[10%]"/>}
                        <div className="flex flex-col gap-3">
                            <span className="text-primary xl:text-2xl lg:text-xl uppercase">Con i robot collaborativi, offriamo</span>
                            <hr className="w-full border border-primary"/>
                            <p className="list-disc text-[#3F3F3F]">
                                <li>soluzioni su misura per le vostre esigenze specifiche,</li>
                                <li>migliorando l&apos;efficienza,</li>
                                <li>riducendo gli errori,</li>
                                <li>aumentando la produttività complessiva.</li>
                            </p>
                            <p className="text-[#3F3F3F]">Siamo qui <b className="font-bold"> per guidarvi verso il futuro dell&apos;automazione e della robotica </b>, rendendo il vostro ambiente lavorativo più intelligente, sicuro ed efficiente.</p>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon5} alt={"icon 5"} className="w-[30%]"/>}
                </div>
            </div>
        </div>
    )
}