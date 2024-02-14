"use client"
import {globalStore} from "@/store/globalStore";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import icon1 from "../../../../../public/img/progettazione/meccanica/icon1.png";
import icon2 from "../../../../../public/img/progettazione/meccanica/icon2.png";
import icon3 from "../../../../../public/img/progettazione/meccanica/icon3.png";
import MyCarousel from "@/app/components/carousel/MyCarousel";
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";
import backgroundLeft from "../../../../../public/img/backgroundLeft.png";
import backgroundRight0 from "../../../../../public/img/backgroundRight0.png";


export default function Page() {
    const updateNavbarBackgroundColor = globalStore((state: any) => state.updateNavbarBackgroundColor)
    const updateFooterBackgroundColor = globalStore((state: any) => state.updateFooterBackgroundColor)
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)

    const [hover, setHover] = useState("")

    useEffect(() => {
        updateNavbarBackgroundColor("#e4e4e4")
        updateFooterBackgroundColor("#7E2AE9")
    }, []);

    return (
        <div className="w-full relative" style={{backgroundColor: navbarBackgroundColor}}>
            <div className="meccanica h-[70vh]">
                <div
                    className="container my-auto gap-4 h-full flex flex-col mx-auto justify-center items-center xl:items-start text-center xl:text-start">
                    <span className="text-[#7E2AE9] font-semibold uppercase">progettazione meccanica</span>
                    <hr className="border border-white w-1/4"/>
                    <h1 className="text-black font-semibold uppercase text-7xl lg:text-[65px] md:text-[48px] text-[35px]">soluzioni
                        mirate<br/> all`esigenza <br/> del cliente</h1>
                </div>
            </div>

            <div
                className="flex mx-auto py-20 flex-col items-center xl:items-start text-center xl:text-start gap-20 xl:w-4/5 px-10 lg:px-0">
                <div className="flex flex-col gap-3 items-center mx-auto">
                    <p className="text-[#3F3F3F] text-center">
                        Durante la progettazione e realizzazione viene mantenuto un costante feedback con il cliente in
                        modo da monitorare l’andamento del progetto nelle sue varie fasi di avanzamento.
                        Il team di consulenti e progettisti è a disposizione del cliente offrendo la più vasta gamma di
                        soluzioni mirate alle necessità di processo grazie alla solida esperienza maturata nel corso
                        degli anni nei vari settori della progettazione meccanica.
                    </p>
                    <p className="text-[#3F3F3F] text-center mt-4">
                        MM System può eseguire:
                        <li>
                            assemblaggio e realizzazione di componenti meccanici nel pieno rispetto delle specifiche progettuali fornite o se richiesto,
                        </li>
                        <li>
                            impiegarsi nella sola engineering per sviluppare la soluzione più efficiente in base alle esigenze del cliente.
                        </li>
                    </p>

                </div>
            </div>
            <MyCarousel/>
            <div className="container flex flex-col py-20 mx-auto items-center">
                <Link href="/galleria"
                      className="py-1 xl:py-2 px-2 text-white rounded-[100px] bg-[#7E2AE9] flex justify-between items-center xl:gap-1 relative z-50 hover:cursor-pointer">
                    <span className="px-5">Sfoglia la Gallery</span>
                    <div className="p-2 rounded-3xl bg-white">
                        <MdKeyboardArrowRight className="text-[#7E2AE9] xl:w-7 xl:h-7 w-5 h-5"/>
                    </div>
                </Link>
            </div>
            <Image src={backgroundLeft} alt={"background left"} className="absolute bottom-0 left-0 w-1/2"/>
            <Image src={backgroundRight0} alt={"background right"} className="absolute bottom-0 right-0 w-1/2"/>
        </div>
    )

}