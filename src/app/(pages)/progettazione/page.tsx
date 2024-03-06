"use client"
import React, {useEffect, useState} from "react";
import {globalStore} from "@/store/globalStore";
import {MdKeyboardArrowRight} from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import icon1 from "../../../../public/img/progettazione/icon1.png";
import icon2 from "../../../../public/img/progettazione/icon2.png";
import icon3 from "../../../../public/img/progettazione/icon3.png";
import icon4 from "../../../../public/img/progettazione/icon4.png";
import icon5 from "../../../../public/img/progettazione/icon5.png";
import icon6 from "../../../../public/img/progettazione/icon6.png";
import {motion} from "framer-motion";
import {useWindowInnerWidth} from "@/hook/useWindowInnerWidth";


export default function Page() {

    const updateNavbarBackgroundColor = globalStore((state: any) => state.updateNavbarBackgroundColor)
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)


    useEffect(() => {
        updateNavbarBackgroundColor("#f5f5f5")
    }, []);

    const windowInnerWidth = useWindowInnerWidth()

    return (
        <div className="w-full" style={{backgroundColor: navbarBackgroundColor}}>
            <div className="progettazione h-[70vh]">
                <div
                    className="container my-auto gap-4 h-full flex flex-col mx-auto justify-center items-center xl:items-start text-center xl:text-start">
                    <span className="text-primary xl:text-2xl lg:text-xl">PROGETTAZIONE</span>
                    <hr className="w-1/6 border border-[#3f3f3f] mb-2"/>
                    <h1 className="text-[#3f3f3f] font-bold">COSTANTE
                        <br/> PROCESSO <br/> EVOLUTIVO</h1>
                    <Link href="contattaci"
                          className="w-1/3 xl:w-1/6 py-1 xl:py-2 px-2 text-white rounded-t-[100px] rounded-br-[100px] bg-gradient-to-r from-gray-300 to-primary flex justify-between items-center xl:gap-1">
                        <span className="px-5">esplora</span>
                        <div className="p-2 rounded-3xl bg-white">
                            <MdKeyboardArrowRight className="text-primary xl:w-7 xl:h-7 w-5 h-5"/>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="container flex py-20 mx-auto px-10 xl:px-0">
                {windowInnerWidth > 1300 &&
                    <div className="flex flex-col w-1/5 gap-4 items-start">
                        <Image src={icon1} alt={"icon 1"} className="w-1/2"/>
                        <Image src={icon2} alt={"icon 2"} className="w-1/2"/>
                        <Image src={icon3} alt={"icon 3"} className="w-1/2"/>
                    </div>
                }
                <div className="flex flex-col items-center xl:items-start text-center xl:text-start gap-20 xl:w-4/5">
                    <div className="flex flex-col gap-3">
                        <span className="text-primary xl:text-2xl lg:text-xl uppercase">crescita del margine di competitività</span>
                        <hr className="w-full border border-primary"/>
                        <p className="text-[#3F3F3F]">
                            Dopo diversi anni di esperienza nel settore, l`aumento della complessità dei prodotti, ha
                            richiesto il passaggio da un processo di progettazione prevalentemente in 2D ad uno in 3D.
                        </p>
                    </div>
                    <div className="xl:col-span-10 flex flex-col gap-3">
                        <span className="text-primary xl:text-2xl lg:text-xl uppercase">equilibrio tra tempi, costi e risorse</span>
                        <hr className="w-full border border-primary"/>
                        <p className="text-[#3F3F3F]">
                            Un’avanzata soluzione per lo sviluppo integrato del prodotto, sempre al passo con i tempi e
                            con le richieste del cliente è rappresentata dal continuo aggiornamento dei releases.
                        </p>
                    </div>
                    <div className="xl:col-span-10 flex flex-col gap-3">
                        <span className="text-primary xl:text-2xl lg:text-xl uppercase">studio e perfezionamento degli strumenti costante</span>
                        <hr className="w-full border border-primary"/>
                        <p className="text-[#3F3F3F]">
                            La MM Systems continua sempre ad alzare il livello delle prestazioni, perfezionando
                            continuamente i propri strumenti. La MM Systems progetta macchinari, impianti robotizzati,
                            applicazioni specifiche per robots, apparecchiature elettromeccaniche, maschere, fissaggi e
                            stampi, compresi gli assiemi complessi, senza comunque mai perdere di vista gli utenti di
                            CAD 2D che non hanno ancora effettuato la transizione verso il mondo della progettazione in
                            3D.
                        </p>
                    </div>
                </div>
            </div>
            {windowInnerWidth <= 1300 &&
                <div className="flex gap-10 justify-evenly items-center pb-20">
                    <Image src={icon1} alt={"icon 1"} className="w-1/6"/>
                    <Image src={icon2} alt={"icon 2"} className="w-1/6"/>
                    <Image src={icon3} alt={"icon 3"} className="w-1/6"/>
                </div>
            }
        </div>
    )
}