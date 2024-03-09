"use client"

import Image from "next/image";
import cover2 from "@public/img/attivita/robotica/mmsystems-20.jpg";
import icona1 from "@public/img/attivita/robotica/misura.png";
import icona2 from "@public/img/attivita/robotica/sicuri.png";
import icona3 from "@public/img/attivita/robotica/360.png";
import icona4 from "@public/img/attivita/robotica/qualita.png";
import React from "react";
import RoboticaCarousel from "@/app/components/carousel/robotica/RoboticaCarousel";

export default function Page() {
    return (
        <>
            <section className="w-full relative h-[70vh] flex">
                <Image
                    src={cover2}
                    fill
                    alt="background section"
                    style={{
                        objectFit: "cover",
                    }}
                />
                <div
                    className="container mx-auto p-8 xl:p-0 flex flex-col md:flex-row justify-center items-center text-[#3f3f3f] z-10">
                    <div className="flex flex-col text-right xl:w-4/5 xl:ml-auto xl:p-10">
                        <h1 className="font-bold z-50">
                            BANCHI <br/>
                            <h1 className="text-primary font-bold">
                                SEMIAUTOMATICI <br/>
                            </h1>
                            SU MISURA PER VOI
                        </h1>
                        <p className="z-50 mt-8">
                            Sistemi integrati di assemblaggio, handling e collaudo, trasformando l’innovazione e la
                            tecnologia in qualità, sicurezza ed efficienza dei processi industriali. I prodotti
                            sviluppati dalla M.M. Systems, sono progettati realizzati e messi a punto su misura.
                            Sempre pronti a trovare soluzioni speciali per le specifiche esigenze dei propri
                            clienti.
                        </p>
                    </div>
                </div>
            </section>
            <section className="my-20 container grid grid-cols-2 md:grid-cols-4 md:gap-3 text-center mx-auto">
                <div className="flex flex-col p-3 items-center ">
                    <Image
                        src={icona1}
                        alt="icona su misura"
                        style={{
                            height: "80px",
                            width: "auto",
                        }}
                    />
                    <span className="text-primary xl:text-2xl lg:text-xl mt-6 ">
                            PROGETTA E<br/>
                            REALIZZA SU MISURA
                        </span>
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
                    <span className=" text-primary xl:text-2xl lg:text-xl mt-6 ">
                            SICURI E<br/>
                            SEMPLICI
                        </span>
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
                    <span className=" text-primary xl:text-2xl lg:text-xl mt-6 ">
                            IMPLEMENTAZIONE
                            <br/>A 360°
                        </span>
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
                    <span className=" text-primary xl:text-2xl lg:text-xl mt-6 ">
                            GESTIONE
                            <br/>
                            CONTROLLO QUALITÀ
                        </span>
                </div>
            </section>
            <div className="container p-8 text-center mx-auto text-[#3f3f3f]">
                <h1 className="font-bold z-50">
                    SCOPRI
                    <span className="text-primary ml-3 font-bold xl:text-[90px] lg:text-[60px] md:text-[48px] text-[35px]">
                        DI PIÙ
                    </span>
                </h1>
                <span className="xl:text-2xl lg:text-xl mt-3">
                        SUI BANCHI SEMIAUTOMATICI
                    </span>
            </div>
            <section className="py-10 pb-20">
                <RoboticaCarousel/>
            </section>
        </>
    )
}