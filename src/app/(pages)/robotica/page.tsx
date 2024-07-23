"use client";
import {globalStore} from "@/store/globalStore";
import React, {useEffect} from "react";

import Image from "next/image";
import robotBlu from "../../../../public/img/attivita/robotica/mmsystems-12.png";
import robotGrigio from "../../../../public/img/attivita/robotica/braccio-robotico.png";
import backgroundTopRight from "../../../../public/img/backgroundRight.png";
import backgroudBottomRight from "../../../../public/img/backgroundRight2.png";
import cover1 from "../../../../public/img/attivita/robotica/mmsystems-23.jpg";
import cover2 from "../../../../public/img/attivita/robotica/mmsystems-20.jpg";
import cover3 from "../../../../public/img/attivita/robotica/mmsystems-21.jpg";
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
                        <h1 className="text-[#3f3f3f] font-bold">
                            ROBOTICA <br/>
                            <h1 className="text-primary font-bold">ISOLE ROBOTIZZATE</h1>
                        </h1>
                        <p className="text-[#3f3f3f] font-normal md:w-4/5">
                            Le nostre soluzioni. La MM Systems offre soluzioni robotizzate
                            di automazione su misura per il vostro settore utilizzando tutti i
                            marchi dei brand di robotica presenti sul mercato. I nostri
                            clienti internazionali provengono dai settori diversi, tra cui
                            l’industria automobilistica e la general industry. Le nostre isole
                            robotizzate possono svolgere le più svariate funzioni: manipolare,
                            asservire macchinari, assemblare, avvitare, rivettare, sigillare,
                            incollare, saldare, verniciare, pulire, misurare, controllare,
                            imballare o combinazioni di queste operazioni. La MM systems, con
                            ormai oltre 10 anni di esperienza in questo settore, offre in
                            tutte le circostanze: affidabilità, precisione e qualità, senza
                            trascurare nessun passaggio dalla progettazione alla
                            realizzazione.
                        </p>
                    </div>
                </div>
            </div>

            <section className="w-full relative xl:h-[140vh]">
                <Image
                    src={backgroundTopRight}
                    alt="background"
                    style={{
                        opacity: "0.6",
                    }}
                    className="absolute top-[-30px] right-0 md:w-3/4 xl:w-3/5 z-0"
                />
                <div
                    className="container xl:h-[110vh] p-8 xl:p-0 mx-auto grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-center mt-8">
                    <div className="flex flex-col z-10 pb-48 sm:pb-96 xl:pb-0">
                        <div className="flex flex-col mb-8">
                            <span className=" text-[#b7a095] xl:text-2xl lg:text-xl">
                                INVENTIAMO
                            </span>
                            <hr className="w-full border border-[#B7A095]"/>
                            <p className="text-[#3f3f3f]">
                                Grazie all’esperienza decennale, ai trascorsi in vari ambiti e
                                alla continua innovazione del settore il nostro staff tecnico
                                è capace di INVENTARE soluzioni sempre al passo con i tempi.
                            </p>
                        </div>
                        <div className="flex flex-col mb-8">
                            <span className=" text-[#b7a095] xl:text-2xl lg:text-xl">
                                PROGETTIAMO
                            </span>
                            <hr className="w-full border border-[#B7A095]"/>
                            <p className="text-[#3f3f3f]">
                                Date le tante conoscenze nel settore automotive e non solo, e
                                la continua innovazione richiesta dal cliente l’inventiva si
                                tramuta in PROGETTO meccanico, elettrico e software.
                            </p>
                        </div>
                        <div className="flex flex-col mb-8">
                            <h4 className=" text-[#b7a095] xl:text-2xl lg:text-xl">
                                REALIZZIAMO
                            </h4>
                            <hr className="w-full border border-[#B7A095]"/>
                            <p className="text-[#3f3f3f]">
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

            <section className="py-10 pb-20">
                <RoboticaCarousel/>
            </section>
        </>
    );
}
