"use client"

import {globalStore} from "@/store/globalStore";
import React, {useEffect} from "react";
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";
import Image from "next/image";
import icon1 from "@public/img/certificazioni/icon1.png";
import icon2 from "@public/img/certificazioni/icon2.png";

export default function Page() {
    const updateNavbarBackgroundColor = globalStore((state: any) => state.updateNavbarBackgroundColor)
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)


    useEffect(() => {
        updateNavbarBackgroundColor("#f5f5f5")
    }, []);

    const windowInnerWidth = useWindowInnerWidth()

    return (
        <div className="w-full" style={{backgroundColor: navbarBackgroundColor}}>
            <div className="certificazioni h-[70vh]">
                <div
                    className="container my-auto gap-4 h-full flex flex-col mx-auto justify-center items-center xl:items-start text-center xl:text-start">
                    <span className="text-primary xl:text-2xl lg:text-xl font-semibold">MMSYSTEMS</span>
                    <h1 className="text-[#3f3f3f] font-bold">
                        <h1 className="text-primary font-bold">QUALITA&apos;</h1>
                        ALLA BASE <br/> DEL NOSTRO LAVORO
                    </h1>
                </div>
            </div>
            <div className="container flex pt-20 pb-10 mx-auto px-10 xl:px-0">
                <div className="flex flex-col items-center xl:items-start text-center xl:text-start gap-24">
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon1} alt={"icon 1"} className="w-[20%]"/>}
                        <div className="flex flex-col gap-3 md:items-start items-center">
                            <span
                                className="text-[#2A9DE9] xl:text-2xl lg:text-xl uppercase font-semibold">Macchinari e robotica</span>
                            <hr className="w-1/3 border border-[#2A9DE9]"/>
                            <p className="text-[#3F3F3F] md:text-start text-center">
                                TÜV SÜD ha una vasta esperienza nella valutazione della sicurezza di attrezzature e
                                macchine industriali. Gli esperti combinano l’esperienza acquisita nell’ambito della
                                sicurezza di base dei macchinari con uno sguardo sempre rivolto allo stato dell’arte
                                delle tecnologie innovative, come la robotica, l’industria4.0 e la produzione
                                additiva. <br/>
                                <span className="font-semibold">
                                    TÜV SÜD è un brand il cui possesso dimostra che l’attività della compagnia rispetta
                                l’ISO 9001, sottolineando il livello del prodotto e la qualità del servizio
                                </span>
                            </p>
                            <a href="https://www.tuvsud.com/it-it?utm_source=google&utm_medium=cpc&utm_campaign=2024_campagna-brand_we_it_co_cbu_enq_bb&utm_term=%2Btuv%20sud&s_kwcid=AL!14017!3!209466554116!b!!g!!%2Btuv%20sud&gad_source=1&gclid=CjwKCAiA6KWvBhAREiwAFPZM7mGUIMxWL_PVWT0drPcL75p7UXklYdtq8IPL6ebuhr8-ljQYAaAr4BoCRQgQAvD_BwE" target="_blank" className="text-primary">
                                scopri di più
                            </a>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon1} alt={"icon 1"} className="w-[40%]"/>}
                    <div className="flex items-center justify-between gap-20">
                        {windowInnerWidth > 800 && <Image src={icon2} alt={"icon 2"} className="w-[20%]"/>}
                        <div className="flex flex-col gap-3 md:items-start items-center">
                            <span
                                className="text-[#2A9DE9] xl:text-2xl lg:text-xl uppercase font-semibold">sostenibilità</span>
                            <hr className="w-1/3 border border-[#2A9DE9]"/>
                            <p className="text-[#3F3F3F] md:text-start text-center">
                                EFTILIA è una Società benefit che opera nel campo dell&apos;economia con
                                l&apos;obiettivo di
                                promuovere un&apos;attività economica rispettosa della Natura, innovativa,
                                eco-sostenibile e
                                etico-sostenibile. Consideriamo la "Natura" non solo come l&apos;ambiente
                                circostante, ma come
                                l&apos;intero universo percepibile attraverso i sensi, del quale l&apos;Uomo fa
                                parte. <br/>
                                <span className="font-semibold">
                                    La visione di partenza è di una crescita economica etico ed eco-sostenibile.
                                Innovazione, digitalizzazione e crescita economica coscienziosa.
                                </span>

                            </p>
                            <a href="https://eftilia.it/chi-siamo/" target="_blank" className="text-primary">
                                scopri di più
                            </a>
                        </div>
                    </div>
                    {windowInnerWidth < 800 && <Image src={icon2} alt={"icon 2"} className="w-[40%]"/>}
                </div>
            </div>
        </div>
    )
}