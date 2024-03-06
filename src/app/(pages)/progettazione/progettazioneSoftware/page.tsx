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
    const updateFooterBackgroundColor = globalStore((state: any) => state.updateFooterBackgroundColor)
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)

    useEffect(() => {
        updateNavbarBackgroundColor("#e4e4e4")
        updateFooterBackgroundColor("#f26f6f")
    }, []);

    const windowInnerWidth = useWindowInnerWidth()

    return (
        <div className="w-full" style={{backgroundColor: navbarBackgroundColor}}>
            <div className="robotCollaborativi bg-gray-300 h-[70vh]">
                <div
                    className="container my-auto gap-4 h-full flex flex-col mx-auto justify-center items-center xl:items-start text-center xl:text-start">
                    <span className="text-[#f26f6f] xl:text-2xl lg:text-xl">PROGETTAZIONE</span>
                    <hr className="w-1/6 border border-[#3f3f3f] mb-2"/>
                    <h1 className="text-[#3f3f3f] font-bold">PROGETTAZIONE
                        <br/>SOFTWARE</h1>
                    <p>
                        La progettazione software, il cuore digitale delle nostre macchine automatiche. <br/>
                        I nostri software possono elevare le prestazioni delle vostre macchine, portando la vostra automazione industriale a nuovi livelli di successo. <br/>
                        Il nostro team specializzato crea soluzioni software su misura, progettate specificamente per
                        ottimizzare le performance delle nostre macchine utilizzando i principali strumenti di
                        programmazione
                        Con un approccio centrato sull&apos;efficienza e la precisione, sviluppiamo software che si
                        integrano perfettamente con le macchine automatiche, utilizzando le ultime tecnologie PLC.
                        La nostra progettazione software si distingue per:
                    </p>
                </div>
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
                        <span
                            className="text-[#f26f6f] xl:text-2xl lg:text-xl uppercase">Integrazione perfetta</span>
                        <hr className="w-full border border-[#f26f6f]"/>
                        <p className="text-[#3F3F3F]">
                            Software progettato su misura per adattarsi senza soluzione di continuità alle vostre
                            macchine automatiche, migliorando la loro funzionalità e facilitando l&apos;operatività.
                        </p>
                    </div>
                    <div className="xl:col-span-10 flex flex-col gap-3">
                        <span className="text-[#f26f6f] xl:text-2xl lg:text-xl uppercase">Massima Efficienza</span>
                        <hr className="w-full border border-[#f26f6f]"/>
                        <p className="text-[#3F3F3F]">
                            Miriamo a ottimizzare i processi, garantendo che il software contribuisca in modo
                            significativo alla performance e alla precisione delle vostre macchine, sfruttando le
                            potenzialità dei software PLC più avanzati.
                        </p>
                    </div>
                    <div className="xl:col-span-10 flex flex-col gap-3">
                        <span className="text-[#f26f6f] xl:text-2xl lg:text-xl uppercase">Affidabilità operativa</span>
                        <hr className="w-full border border-[#f26f6f]"/>
                        <p className="text-[#3F3F3F]">
                            La sicurezza e l&apos;affidabilità sono al centro della nostra progettazione software,
                            assicurando un funzionamento stabile delle vostre macchine automatiche.
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