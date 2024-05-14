"use client"
import {globalStore} from "@/store/globalStore";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import banchiAssemblaggio from "../../../../../public/img/progettazione/meccanica/banchiAssemblaggio.png";
import isole from "../../../../../public/img/progettazione/meccanica/isole.png";
import attrezzature from "../../../../../public/img/progettazione/meccanica/attrezzature.png";
import carpenteria from "../../../../../public/img/progettazione/meccanica/carpenteria.png";
import lavorazioni from "../../../../../public/img/progettazione/meccanica/lavorazioni.png";
import maschere from "../../../../../public/img/progettazione/meccanica/maschere.png";
import MyCarousel from "@/app/components/carousel/MyCarousel";
import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md";
import backgroundLeft from "../../../../../public/img/backgroundLeft.png";
import backgroundRight0 from "../../../../../public/img/backgroundRight0.png";
import {Img} from "@/data/images";
import {fetchImages} from "@/pages/api/gallery";


export default function Page() {
    const updateNavbarBackgroundColor = globalStore((state: any) => state.updateNavbarBackgroundColor)
    const updateFooterBackgroundColor = globalStore((state: any) => state.updateFooterBackgroundColor)
    const navbarBackgroundColor = globalStore((state: any) => state.navbarBackgroundColor)

    const [hover, setHover] = useState("")

    useEffect(() => {
        updateNavbarBackgroundColor("#e4e4e4")
        updateFooterBackgroundColor("#7E2AE9")
    }, []);

    const [images, setImages] = useState<Img[]>([])
    useEffect(() => {
        fetchImages().then(res => {
            setImages(res)
        })
    }, []);

    return (
        <div className="w-full relative" style={{backgroundColor: navbarBackgroundColor}}>
            <div className="meccanica h-[70vh]">
                <div
                    className="container my-auto gap-4 h-full flex flex-col mx-auto justify-center items-center xl:items-start text-center xl:text-start">
                    <span className="text-[#7E2AE9] xl:text-2xl lg:text-xl uppercase">progettazione meccanica</span>
                    <hr className="border border-[#3f3f3f] w-1/6"/>
                    <h1 className="text-[#3f3f3f] font-bold uppercase">soluzioni
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
            <div className="grid xl:grid-cols-3 xl:gap-20 w-3/5 mx-auto xl:py-20">
                <div className="flex flex-col items-center gap-4">
                    <Image src={banchiAssemblaggio} alt={"banchi assemblaggio"} className="w-1/2"/>
                    <p className="text-center">Banchi di assemblaggio di tipo manuali o automatici</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Image src={isole} alt={"banchi assemblaggio"} className="w-1/2"/>
                    <p className="text-center">Isole robotizzate per operazioni di saldatura, manipolazione e dispensazione</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Image src={attrezzature} alt={"banchi assemblaggio"} className="w-1/2"/>
                    <p className="text-center">Attrezzature per asservimento presse di stampaggio a freddo, ad iniezione e pressofusione</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Image src={carpenteria} alt={"banchi assemblaggio"} className="w-1/2"/>
                    <p className="text-center">Carpenteria metallica medio/piccola e di precisione</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Image src={lavorazioni} alt={"banchi assemblaggio"} className="w-1/2"/>
                    <p className="text-center">Lavorazioni Cad Cam</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <Image src={maschere} alt={"banchi assemblaggio"} className="w-1/2"/>
                    <p className="text-center">Maschere e calibri di controllo per componenti saldati o stampati</p>
                </div>
            </div>
            <MyCarousel images={images}/>
            <div className="container flex flex-col py-20 mx-auto items-center">
                <Link href="/galleria"
                      className="py-1 xl:py-2 px-2 text-white rounded-[100px] bg-[#7E2AE9] flex justify-between items-center xl:gap-1 relative z-50 hover:cursor-pointer">
                    <span className="px-5">Sfoglia la Gallery</span>
                    <div className="p-2 rounded-3xl bg-white">
                        <MdKeyboardArrowRight className="text-[#7E2AE9] xl:w-7 xl:h-7 w-5 h-5"/>
                    </div>
                </Link>
            </div>
            <Image src={backgroundLeft} alt={"background left"} className="absolute bottom-0 left-0 w-1/2 z-10"/>
            <Image src={backgroundRight0} alt={"background right"} className="absolute bottom-0 right-0 w-1/2"/>
        </div>
    )

}