"use client";
import {globalStore} from "@/store/globalStore";
import React, {useEffect} from "react";

import Image from "next/image";
import robotBlu from "../../../../public/img/attivita/robotica/mmsystems-12.png";
import robotGrigio from "../../../../public/img/attivita/robotica/robot-grigio.webp";
import backgroundTopRight from "../../../../public/img/backgroundRight.png";
import backgroudBottomRight from "../../../../public/img/backgroundRight2.png";
import cover2 from "../../../../public/img/attivita/robotica/banner2.jpg";
import cover3 from "../../../../public/img/attivita/robotica/banner3.jpg";
import icona1 from "../../../../public/img/attivita/robotica/misura.png";
import icona2 from "../../../../public/img/attivita/robotica/sicuri.png";
import icona3 from "../../../../public/img/attivita/robotica/360.png";
import icona4 from "../../../../public/img/attivita/robotica/qualita.png";

import RoboticaCarousel from "@/app/components/carousel/robotica/RoboticaCarousel";
import {MdKeyboardArrowRight} from "react-icons/md";
import Link from "next/link";

export default function Page() {
    const updateNavbarBackgroundColor = globalStore(
        (state: any) => state.updateNavbarBackgroundColor
    );
    const navbarBackgroundColor = globalStore(
        (state: any) => state.navbarBackgroundColor
    );
    const updateFooterBackgroundColor = globalStore(
        (state: any) => state.updateFooterBackgroundColor
    );

    useEffect(() => {
        updateNavbarBackgroundColor("#e4e4e4");
        updateFooterBackgroundColor("#04203b");
    }, []);

    return (
        <>
            <div className="w-full robotica flex justify-center">
                <div className="w-full min-h-[85vh] flex flex-col justify-center items-center">
                    <div className=" container p-8 gap-4 h-full flex flex-col justify-center">
                        <h1 className="text-[#3f3f3f] font-semibold z-50 text-7xl lg:text-[65px] text-[40px]">
                            ROBOTICA <br/>
                            <span className="text-primary font-semibold text-7xl lg:text-[65px] text-[40px]">
                ISOLE ROBOTIZZATE
              </span>
                        </h1>
                        <p className="text-[#3f3f3f] font-normal text-lg md:w-4/5">
                            Le nostre soluzioni. La M.M. Systems offre soluzioni robotizzate
                            di automazione su misura per il vostro settore utilizzando tutti i
                            marchi dei brand di robotica presenti sul mercato. I nostri
                            clienti internazionali provengono dai settori diversi, tra cui
                            l’industria automobilistica e la general industry. Le nostre isole
                            robotizzate possono svolgere le più svariate funzioni: manipolare,
                            asservire macchinari, assemblare, avvitare, rivettare, sigillare,
                            incollare, saldare, verniciare, pulire, misurare, controllare,
                            imballare o combinazioni di queste operazioni. La MMsystems, con
                            ormai oltre 10 anni di esperienza in questo settore, offre in
                            tutte le circostanze: affidabilità, precisione e qualità, senza
                            trascurare nessun passaggio dalla progettazione alla
                            realizzazione.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <section className="w-full relative">
                    <Image
                        src={backgroundTopRight}
                        alt="background"
                        style={{
                            opacity: "0.6",
                        }}
                        className="absolute top-[-30px] right-0 md:w-3/4 xl:w-3/5 z-0"
                    />
                    <div className="container xl:h-[110vh] p-8 xl:p-0 mx-auto grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-center mt-8">
                        <div className="flex flex-col z-10 pb-48 sm:pb-96 xl:pb-0">
                            <div className="flex flex-col mb-8">
                                <h4 className=" text-[#b7a095] text-2xl font-semibold">
                                    INVENTIAMO
                                </h4>
                                <hr className="w-full border border-[#B7A095]"/>
                                <p className="text-[#3f3f3f] font-normal text-lg">
                                    Grazie all’esperienza decennale, ai trascorsi in vari ambiti e
                                    alla continua innovazione del settore il nostro staff tecnico
                                    è capace di INVENTARE soluzioni sempre al passo con i tempi.
                                </p>
                            </div>
                            <div className="flex flex-col mb-8">
                                <h4 className=" text-[#b7a095] text-2xl font-semibold">
                                    PROGETTIAMO
                                </h4>
                                <hr className="w-full border border-[#B7A095]"/>
                                <p className="text-[#3f3f3f] font-normal text-lg">
                                    Date le tante conoscenze nel settore automotive e non solo, e
                                    la continua innovazione richiesta dal cliente l’inventiva si
                                    tramuta in PROGETTO meccanico, elettrico e software.
                                </p>
                            </div>
                            <div className="flex flex-col mb-8">
                                <h4 className=" text-[#b7a095] text-2xl font-semibold">
                                    REALIZZIAMO
                                </h4>
                                <hr className="w-full border border-[#B7A095]"/>
                                <p className="text-[#3f3f3f] font-normal text-lg">
                                    La Progettazione si tramuta in REALIZZAZIONE grazie ad
                                    un’officina meccanica organizzata ed attrezzata, ad un
                                    comparto elettrico preparato e a programmatori efficienti.
                                </p>
                            </div>
                            <Link href="/galleria"
                                  className="py-1 w-1/2 mt-10 xl:py-2 px-2 text-white shadow-2xl rounded-[100px] bg-[#b7a095] flex justify-between items-center xl:gap-1 hover:cursor-pointer">
                                <span className="px-5">Scopri di più</span>
                                <div className="p-2 rounded-3xl bg-white">
                                    <MdKeyboardArrowRight className="text-[#b7a095] xl:w-7 xl:h-7 w-5 h-5"/>
                                </div>
                            </Link>
                        </div>
                        <Image
                            src={robotBlu}
                            alt="robot blue"
                            className="absolute right-0 xl:top-0 bottom-0"
                        />
                    </div>
                </section>

                <section className="w-full relative py-8 lg:py-80">
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
                            <h3 className="font-semibold z-50 text-7xl lg:text-[65px] text-[40px]">
                                ROBOT <br/>
                                <span className="text-primary font-semibold text-7xl lg:text-[65px] text-[40px] ">
                  COLLABORATIVI
                </span>
                            </h3>
                            <h3 className=" font-semibold text-2xl mt-2 mb-8">
                                INNOVATIVI - SICURI - INTELLIGENTI
                            </h3>
                            <p className="font-normal text-lg xl:w-4/5">
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
                <section className="w-full h-[200px] sm:h-[250px] lg:h-[400px] 2xl:h-[500px] relative ">
                    <Image
                        src={cover2}
                        fill
                        alt="background section"
                        style={{
                            objectFit: "cover",
                            opacity: "0.3",
                            filter: "grayscale(100%)",
                        }}
                    />
                </section>

                <section className="my-20 w-full relative">
                    <Image
                        src={cover3}
                        fill
                        alt="background section"
                        style={{
                            objectFit: "cover",
                            opacity: "0.1",
                            filter: "grayscale(100%)",
                        }}
                    />
                    <div
                        className="container mx-auto p-8 xl:p-0 flex flex-col md:flex-row justify-center items-center text-[#3f3f3f] z-10">
                        <div className="flex flex-col text-right xl:w-4/5 xl:ml-auto xl:p-10">
                            <h3 className="font-semibold  z-50 text-7xl lg:text-[65px] text-[40px]">
                                BANCHI <br/>
                                <span className="text-primary font-semibold text-7xl lg:text-[65px] text-[40px] ">
                  SEMIAUTOMATICI <br/>
                </span>
                                SU MISURA PER VOI
                            </h3>
                            <p className="font-normal text-lg mt-8">
                                M.M. Systems realizza sistemi integrati di assemblaggio,
                                handling e collaudo, trasformando l’innovazione e la tecnologia
                                in qualità, sicurezza ed efficienza dei processi industriali.I
                                prodotti sviluppati dalla M.M. Systems, sono progettati,
                                realizzati e messi a punto “su misura”: Siamo pronti a trovare
                                soluzioni speciali per le specifiche esigenze dei propri
                                clienti. La M.M. Systems è specializzata nella progettazione,
                                realizzazione ed installazione di macchine speciali per
                                l’automazione dei processi industriali di assemblaggio,
                                movimentazione, logistica, handling, collaudo, controllo di
                                processo, marcatura e data tracking, in diversi settori
                                produttivi.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="mb-20 container grid grid-cols-2 md:grid-cols-4 md:gap-3 text-center mx-auto">
                    <div className="flex flex-col p-3 items-center ">
                        <Image
                            src={icona1}
                            alt="icona su misura"
                            style={{
                                height: "80px",
                                width: "auto",
                            }}
                        />
                        <h4 className=" text-primary font-bold text-lg md:text-xl mt-6 ">
                            PROGETTA E<br/>
                            REALIZZA SU MISURA
                        </h4>
                    </div>
                    <div className="flex flex-col p-3 items-center">
                        <Image
                            src={icona2}
                            alt="icona su misura"
                            style={{
                                height: "80px",
                                width: "auto",
                            }}
                        />
                        <h4 className=" text-primary font-bold text-lg md:text-xl mt-6 ">
                            SICURI E<br/>
                            SEMPLICI
                        </h4>
                    </div>
                    <div className="flex flex-col p-3 items-center">
                        <Image
                            src={icona3}
                            alt="icona su misura"
                            style={{
                                height: "80px",
                                width: "auto",
                            }}
                        />
                        <h4 className=" text-primary font-bold text-lg md:text-xl mt-6 ">
                            IMPLEMENTAZIONE
                            <br/>A 360°
                        </h4>
                    </div>
                    <div className="flex flex-col p-3 items-center">
                        <Image
                            src={icona4}
                            alt="icona su misura"
                            style={{
                                height: "80px",
                                width: "auto",
                            }}
                        />
                        <h4 className=" text-primary font-bold text-lg md:text-xl mt-6 ">
                            GESTIONE
                            <br/>
                            CONTROLLO QUALITÀ
                        </h4>
                    </div>
                </section>
                <div className="container p-8 text-center mx-auto text-[#3f3f3f]">
                    <h3 className="font-semibold z-50 text-7xl lg:text-[65px] text-[40px]">
                        SCOPRI
                        <span className="text-primary ml-3 font-semibold text-7xl lg:text-[65px] text-[40px] ">
              DI PIÙ
            </span>
                    </h3>
                    <h3 className=" font-semibold text-2xl mt-3">
                        SUI BANCHI SEMIAUTOMATICI
                    </h3>
                </div>
                <section className="py-10 pb-20">
                    <RoboticaCarousel/>
                </section>
            </div>
        </>
    );
}
