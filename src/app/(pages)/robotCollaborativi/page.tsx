"use client"

import {globalStore} from "@/store/globalStore";
import React, {useEffect} from "react";
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";
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
                    <h1 className="text-[#3f3f3f] font-bold">ROBOT
                        <br/> COLLABORATIVI</h1>
                </div>
            </div>
            <div className="w-full text-center pt-10">
                <p>
                    Dove l&apos;innovazione e l&apos;efficienza si fondono per trasformare il vostro processo di
                    produzione. <br/>
                    I robot collaborativi sono progettati per rivoluzionare le fasi chiave come assemblaggio,
                    manipolazione, saldatura, palletizzazione ecc.
                </p>
            </div>
            <div className="container flex pt-20 pb-10 mx-auto px-10 xl:px-0">
                {windowInnerWidth > 1300 &&
                    <div className="flex flex-col w-1/5 gap-8 items-start">
                        <Image src={icon1} alt={"icon 1"} className="w-1/2"/>
                        <Image src={icon2} alt={"icon 2"} className="w-1/2"/>
                        <Image src={icon3} alt={"icon 3"} className="w-1/2"/>
                        <Image src={icon2} alt={"icon 3"} className="w-1/2"/>
                        <Image src={icon3} alt={"icon 3"} className="w-1/2"/>
                    </div>
                }
                <div className="flex flex-col items-center xl:items-start text-center xl:text-start gap-24 xl:w-4/5">
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
                    <div className="xl:col-span-10 flex flex-col gap-3">
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
                    <div className="xl:col-span-10 flex flex-col gap-3">
                        <span className="text-primary xl:text-2xl lg:text-xl uppercase">Robot Collaborativi per la Saldatura</span>
                        <hr className="w-full border border-primary"/>
                        <p className="text-[#3F3F3F]">
                            Elevate la vostra produzione con i robot collaborativi specializzati nella saldatura.
                            La precisione millimetrica e la ripetibilità costante assicurano saldature di alta qualità,
                            garantendo la robustezza e l&apos;affidabilità dei vostri prodotti.
                        </p>
                    </div>
                    <div className="xl:col-span-10 flex flex-col gap-3">
                        <span className="text-primary xl:text-2xl lg:text-xl uppercase">Robot Collaborativi per la Palletizzazione</span>
                        <hr className="w-full border border-primary"/>
                        <p className="text-[#3F3F3F]">
                            Semplificate il processo di palletizzazione con i nostri robot collaborativi.
                            Questi sistemi automatizzati sono in grado di gestire carichi di diverse dimensioni e forme,
                            ottimizzando lo spazio e riducendo i costi di manodopera.
                        </p>
                    </div>
                    <div className="xl:col-span-10 flex flex-col gap-3">
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
            </div>
            {windowInnerWidth <= 1300 && windowInnerWidth > 800 &&
                <div className="flex gap-10 justify-evenly items-center pb-20">
                    <Image src={icon1} alt={"icon 1"} className="w-1/6"/>
                    <Image src={icon2} alt={"icon 2"} className="w-1/6"/>
                    <Image src={icon3} alt={"icon 3"} className="w-1/6"/>
                    <Image src={icon2} alt={"icon 3"} className="w-1/6"/>
                    <Image src={icon3} alt={"icon 3"} className="w-1/6"/>
                </div>
            }
        </div>
    )
}