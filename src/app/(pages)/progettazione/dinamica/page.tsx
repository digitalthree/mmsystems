"use client"
import {globalStore} from "@/store/globalStore";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import icon1 from "../../../../../public/img/progettazione/dinamica/icon1.png";
import icon2 from "../../../../../public/img/progettazione/dinamica/icon2.png";
import icon3 from "../../../../../public/img/progettazione/dinamica/icon3.png";
import MyCarousel from "@/app/components/carousel/MyCarousel";
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";
import backgroundLeft from "../../../../../public/img/backgroundLeft.png";
import backgroundRight0 from "../../../../../public/img/backgroundRight0.png";
import bilanciare from "@public/img/progettazione/dinamica/Bilanciare.png";
import progettare1 from "@public/img/progettazione/dinamica/progettare-1.png";
import dimCome2 from "@public/img/progettazione/dinamica/dim-come-2.png";
import ridurre4 from "@public/img/progettazione/dinamica/ridurre-4.png";
import ottimizzare5 from "@public/img/progettazione/dinamica/ottimizzare5.png";
import dimostrare6 from "@public/img/progettazione/dinamica/dimostrare6.png";



export default function Page() {
    const updateNavbarBackgroundColor = globalStore((state: any) => state.updateNavbarBackgroundColor)
    const updateFooterBackgroundColor = globalStore((state: any) => state.updateFooterBackgroundColor)
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)

    const [hover, setHover] = useState("")

    useEffect(() => {
        updateNavbarBackgroundColor("#e4e4e4")
        updateFooterBackgroundColor("#CE2AE9")
    }, []);

    return (
        <div className="w-full relative" style={{backgroundColor: navbarBackgroundColor}}>
            <div className="dinamica h-[70vh]">
                <div
                    className="container my-auto gap-4 h-full flex flex-col mx-auto justify-center items-center xl:items-start text-center xl:text-start">
                    <span className="text-[#CE2AE9] xl:text-2xl lg:text-xl uppercase">simulazione dinamica</span>
                    <hr className="border border-[#3f3f3f] w-1/6"/>
                    <h1 className="text-[#3f3f3f] font-bold uppercase">fattibilità e<br/> sviluppo <br/> delle tue idee</h1>
                </div>
            </div>

            <div className="flex mx-auto py-20 flex-col items-center xl:items-start text-center xl:text-start gap-20 xl:w-4/5 px-10 lg:px-0">
                <div className="flex flex-col gap-3 items-center mx-auto">
                    <p className="text-[#3F3F3F] text-center">
                        Grazie alla Simulazione Dinamica MM Systems ti aiuterà a sviluppare e studiare la fattibilità delle tue idee
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-20 w-3/5 mx-auto pb-20">
                <div className="flex flex-col items-center gap-4">
                    <Image src={progettare1} alt={"banchi assemblaggio"} className="w-1/2"/>
                    <p className="text-center">Progettare e certificare le prestazioni di un nuovo impianto</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Image src={dimCome2} alt={"banchi assemblaggio"} className="w-1/2"/>
                    <p className="text-center">Dimostrare come opera una tecnologia o un nuovo processo produttivo</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Image src={bilanciare} alt={"banchi assemblaggio"} className="w-1/2"/>
                    <p className="text-center">Bilanciare costi da sostenere e prestazioni ottenibili</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Image src={ridurre4} alt={"banchi assemblaggio"} className="w-1/2"/>
                    <p className="text-center">Ridurre i tempi di avviamento</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Image src={ottimizzare5} alt={"banchi assemblaggio"} className="w-1/2"/>
                    <p className="text-center">Ottimizzare l’utilizzo delle risorse produttive ed energetiche</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Image src={dimostrare6} alt={"banchi assemblaggio"} className="w-1/2"/>
                    <p className="text-center">Dimostrare la validità delle proprie idee</p>
                </div>
            </div>
            <MyCarousel/>
            <div className="container flex flex-col py-20 mx-auto items-center">
                <Link href="/galleria" className="py-1 xl:py-2 px-2 text-white rounded-[100px] bg-[#CE2AE9] flex justify-between items-center xl:gap-1 relative z-50 hover:cursor-pointer">
                    <span className="px-5">Sfoglia la Gallery</span>
                    <div className="p-2 rounded-3xl bg-white">
                        <MdKeyboardArrowRight className="text-[#CE2AE9] xl:w-7 xl:h-7 w-5 h-5"/>
                    </div>
                </Link>
            </div>
            <Image src={backgroundLeft} alt={"background left"} className="absolute bottom-0 left-0 w-1/2"/>
            <Image src={backgroundRight0} alt={"background right"} className="absolute bottom-0 right-0 w-1/2"/>
        </div>
    )

}